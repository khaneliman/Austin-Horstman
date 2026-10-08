import { defineConfig } from '@playwright/test';

const port = process.env['SMOKE_PORT'] ?? '4173';

export default defineConfig({
  testDir: './browser',
  testMatch: '**/*.pw.ts',
  outputDir: './tmp/playwright-results',
  fullyParallel: true,
  workers: process.env['CI'] ? 2 : undefined,
  retries: 0,
  reporter: 'list',
  use: {
    channel: 'chromium',
    baseURL: `http://127.0.0.1:${port}`,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { browserName: 'chromium', viewport: { width: 1440, height: 900 } } },
    {
      name: 'mobile',
      use: { browserName: 'chromium', viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
    },
  ],
  webServer: {
    command: 'bun run smoke:serve',
    url: `http://127.0.0.1:${port}/health`,
    reuseExistingServer: false,
    gracefulShutdown: { signal: 'SIGTERM', timeout: 5000 },
  },
});
