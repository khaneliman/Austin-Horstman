import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import { after, before, test } from 'node:test';

const apiDirectory = fileURLToPath(new URL('../', import.meta.url));
const summaries = new Set([
  'Freezing', 'Bracing', 'Chilly', 'Cool', 'Mild',
  'Warm', 'Balmy', 'Hot', 'Sweltering', 'Scorching',
]);
let server;
let baseUrl;
let output = '';

before(async () => {
  server = spawn('dotnet', ['bin/Release/net10.0/WebApi.dll', '--urls', 'http://127.0.0.1:0'], {
    cwd: apiDirectory,
    env: {
      ...process.env,
      ASPNETCORE_ENVIRONMENT: 'Production',
      DOTNET_ENVIRONMENT: 'Production',
      Logging__LogLevel__Default: 'Information',
      Logging__LogLevel__Microsoft: 'Information',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => finish(new Error(`API startup timed out:\n${output}`)), 30_000);
    const onError = (error) => finish(error);
    const onExit = (code, signal) => finish(new Error(`API exited (${code ?? signal}):\n${output}`));
    const finish = (error) => {
      clearTimeout(timer);
      server.off('error', onError);
      server.off('exit', onExit);
      if (error) reject(error);
      else resolve();
    };
    const collect = (chunk) => {
      output += chunk.toString();
      const listening = output.match(/Now listening on: (http:\/\/127\.0\.0\.1:\d+)/);
      if (listening && !baseUrl) {
        baseUrl = listening[1];
        finish();
      }
    };
    server.stdout.on('data', collect);
    server.stderr.on('data', collect);
    server.once('error', onError);
    server.once('exit', onExit);
  });
});

after(async () => {
  if (!server?.pid || server.exitCode !== null || server.signalCode !== null) return;
  const exited = once(server, 'exit');
  const timer = setTimeout(() => server.kill('SIGKILL'), 5_000);
  server.kill('SIGTERM');
  try {
    await exited;
  } finally {
    clearTimeout(timer);
  }
});

async function request(path) {
  return fetch(`${baseUrl}${path}`, { redirect: 'manual', signal: AbortSignal.timeout(5_000) });
}

test('weather returns five dated forecasts with valid temperatures and summaries', async () => {
  const start = Date.now();
  const response = await request('/WeatherForecast');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /application\/json/);
  const forecasts = await response.json();
  const end = Date.now();
  assert.ok(Array.isArray(forecasts));
  assert.equal(forecasts.length, 5);
  for (const [index, forecast] of forecasts.entries()) {
    const date = Date.parse(forecast.date);
    // DateTime.Now has no offset in JSON. The child inherits this process's timezone.
    const earliest = new Date(start);
    const latest = new Date(end);
    // Calendar days, rather than elapsed hours, also cover daylight-saving transitions.
    earliest.setDate(earliest.getDate() + index + 1);
    latest.setDate(latest.getDate() + index + 1);
    assert.ok(Number.isFinite(date), `invalid date: ${forecast.date}`);
    assert.ok(date >= earliest.getTime() - 1 && date <= latest.getTime() + 1,
      `forecast ${index + 1} date outside request window: ${forecast.date}`);
    assert.ok(Number.isInteger(forecast.temperatureC));
    assert.ok(forecast.temperatureC >= -20 && forecast.temperatureC < 55);
    assert.equal(forecast.temperatureF, 32 + Math.trunc(forecast.temperatureC / 0.5556));
    assert.ok(summaries.has(forecast.summary), `unknown summary: ${forecast.summary}`);
  }
});

for (const path of ['/swagger/index.html', '/swagger/v1/swagger.json']) {
  test(`production does not expose ${path}`, async () => {
    assert.equal((await request(path)).status, 404);
  });
}
