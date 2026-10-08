import { spawn } from 'node:child_process';
import { mkdtemp, readFile, writeFile, mkdir, rm, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { delimiter } from 'node:path';

const port = Number(process.env.SMOKE_PORT ?? 4173);
if (!Number.isInteger(port) || port < 1024 || port > 65535)
  throw new Error('SMOKE_PORT must be an unprivileged TCP port');
const nginx = process.env.NGINX_BIN ?? 'nginx';
const executable = nginx.includes('/')
  ? resolve(nginx)
  : await (async () => {
      for (const directory of (process.env.PATH ?? '').split(delimiter)) {
        const candidate = resolve(directory, nginx);
        try {
          await access(candidate);
          return candidate;
        } catch {}
      }
      throw new Error('Install nginx or set NGINX_BIN');
    })();
const mimeCandidates = [
  process.env.NGINX_MIME_TYPES,
  '/etc/nginx/mime.types',
  resolve(dirname(executable), '../conf/mime.types'),
].filter(Boolean);
let mime;
for (const candidate of mimeCandidates) {
  try {
    await access(candidate);
    mime = candidate;
    break;
  } catch {}
}
if (!mime) throw new Error('Set NGINX_MIME_TYPES to the nginx mime.types file');
await access(resolve('dist/web-app/browser/index.html'));
await mkdir('tmp', { recursive: true });
const scratch = await mkdtemp(resolve('tmp/production-smoke-'));
const quote = (value) => '"' + value.replaceAll('\\', '\\\\').replaceAll('"', '\\"') + '"';
let config = await readFile('nginx.conf', 'utf8');
config = config
  .replace('http {', 'http {\n    access_log ' + quote(resolve(scratch, 'access.log')) + ';')
  .replace('/tmp/nginx.pid', quote(resolve(scratch, 'nginx.pid')))
  .replace('/etc/nginx/mime.types', quote(mime))
  .replace('/usr/share/nginx/html', quote(resolve('dist/web-app/browser')))
  .replace('listen       8080;', 'listen       127.0.0.1:' + port + ';')
  .replaceAll(/\/tmp\/([a-z]+_temp)/g, (_, name) => quote(resolve(scratch, name)));
const configPath = resolve(scratch, 'nginx.conf');
await writeFile(configPath, config);
const child = spawn(executable, ['-p', scratch + '/', '-c', configPath, '-e', 'stderr', '-g', 'daemon off;'], {
  stdio: 'inherit',
});
let stopping = false;
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    stopping = true;
    child.kill('SIGTERM');
  });
}
child.on('error', async (error) => {
  console.error(error);
  await rm(scratch, { recursive: true, force: true });
  process.exitCode = 1;
});
child.on('exit', async (code, signal) => {
  await rm(scratch, { recursive: true, force: true });
  process.exitCode = stopping ? 0 : (code ?? 1);
});
