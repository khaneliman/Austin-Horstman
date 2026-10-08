import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repos = ['Nixpkgs', 'Home Manager', 'Nixvim', 'Waybar'];
const seed = `// Seed must survive rejected and unchanged responses byte-for-byte.\n${repos.map((repo) => `{ repo: '${repo}', mergedPrs: 10 },`).join('\n')}\n`;
const complete = (count) => ({ payload: { incomplete_results: false, total_count: count } });

function runCommand(t, responses) {
  const cacheDir = path.join(process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache'), 'github-metrics-tests');
  mkdirSync(cacheDir, { recursive: true });
  const root = mkdtempSync(path.join(cacheDir, 'run-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const commandDir = path.join(root, '.github', 'scripts');
  const outputDir = path.join(root, 'WebApp', 'src', 'app', 'shared', 'data');
  mkdirSync(commandDir, { recursive: true });
  mkdirSync(outputDir, { recursive: true });
  const command = path.join(commandDir, 'update-github-metrics.mjs');
  const preload = path.join(commandDir, 'github-metrics-fetch.fixture.mjs');
  copyFileSync(path.join(scriptDir, 'update-github-metrics.mjs'), command);
  copyFileSync(path.join(scriptDir, 'github-metrics-fetch.fixture.mjs'), preload);
  const output = path.join(outputDir, 'github-metrics.ts');
  writeFileSync(output, seed);
  const result = spawnSync(process.execPath, ['--import', preload, command], {
    cwd: root,
    encoding: 'utf8',
    timeout: 10_000,
    env: {
      ...process.env,
      GH_TOKEN: '',
      GITHUB_TOKEN: '',
      GITHUB_USERNAME: 'fixture-user',
      METRICS_TEST_RESPONSES: JSON.stringify(responses),
    },
  });
  assert.ifError(result.error);
  assert.equal(result.signal, null);
  return { ...result, contents: readFileSync(output) };
}

const invalid = [
  ['missing count', { incomplete_results: false }],
  ['negative count', { incomplete_results: false, total_count: -1 }],
  ['fractional count', { incomplete_results: false, total_count: 1.5 }],
  ['unsafe count', { incomplete_results: false, total_count: Number.MAX_SAFE_INTEGER + 1 }],
  ['string count', { incomplete_results: false, total_count: '12' }],
  ['null count', { incomplete_results: false, total_count: null }],
  ['incomplete results', { incomplete_results: true, total_count: 12 }],
  ['missing completeness flag', { total_count: 12 }],
  ['invalid completeness flag', { incomplete_results: 'false', total_count: 12 }],
  ['null payload', null],
];

for (const [name, payload] of invalid) {
  for (const [index, repo] of repos.entries()) {
    test(`rejects ${name} for ${repo} without writing`, (t) => {
      const responses = repos.map(() => complete(11));
      responses[index] = { payload };
      const result = runCommand(t, responses);
      assert.equal(result.status, 1);
      assert.match(result.stderr, /Invalid or incomplete search response/);
      assert.deepEqual(result.contents, Buffer.from(seed));
    });
  }
}

for (const [name, response, diagnostic] of [
  ['non-JSON', { raw: '<html>error</html>' }, /JSON|Unexpected token/],
  ['HTTP JSON error', { status: 403, payload: { message: 'rate limit' } }, /403.*rate limit/],
  ['HTTP non-JSON error', { status: 502, raw: 'Bad Gateway' }, /502.*Unknown error/],
  ['network error', { networkError: 'fixture network failure' }, /fixture network failure/],
]) {
  test(`rejects ${name} without writing`, (t) => {
    const result = runCommand(t, [complete(11), complete(11), complete(11), response]);
    assert.equal(result.status, 1);
    assert.match(result.stderr, diagnostic);
    assert.deepEqual(result.contents, Buffer.from(seed));
  });
}

for (const count of [10, 9, 0]) {
  test(`counts of ${count} leave the file unchanged without an increase`, (t) => {
    const result = runCommand(t, repos.map(() => complete(count)));
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(result.contents, Buffer.from(seed));
  });
}

test('an increase generates all validated counts, including legitimate zero', (t) => {
  const result = runCommand(t, [complete(11), complete(10), complete(0), complete(9)]);
  assert.equal(result.status, 0, result.stderr);
  const contents = result.contents.toString();
  assert.match(contents, /totalMergedPrs: 30,/);
  assert.match(contents, /asOf: '\d{4}-\d{2}-\d{2}',/);
  for (const [index, count] of [11, 10, 0, 9].entries()) {
    assert.ok(contents.includes(`{ repo: '${repos[index]}', mergedPrs: ${count} }`));
  }
  assert.match(result.stdout, /Updated WebApp/);
});
