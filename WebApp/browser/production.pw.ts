import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === 'skipped') return;
  await expect(page.locator('h1')).toHaveCount(1);
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

const runtimeTest = test.extend<{ runtimeErrors: string[] }>({
  runtimeErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await use(errors);
      expect(errors).toEqual([]);
    },
    { auto: true },
  ],
});

runtimeTest('legacy redirects and company entry points', async ({ page }) => {
  await page.goto('/personal/resume/education');
  await expect(page).toHaveURL(/\/personal\/resume\/education\/foxvalley$/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.goto('/personal/resume/employment');
  await expect(page).toHaveURL(/\/personal\/resume$/);
  for (const [company, legacy] of [
    ['bestbuy', 'geeksquad'],
    ['corebts', 'corebts'],
    ['skyline', 'skyline'],
    ['nri-na', 'nri-na'],
    ['west', 'west'],
  ]) {
    await page.goto('/personal/resume/employment/' + company);
    await expect(page).toHaveURL(new RegExp('/experience/' + company + '$'));
    await page.goto('/projects/professional/' + legacy);
    await expect(page).toHaveURL(new RegExp('/experience/' + company + '$'));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

runtimeTest('direct case study and sibling navigation', async ({ page }) => {
  await page.goto('/projects/professional/nri-na/farmlink-modernization');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/FarmLink/i);
  const siblings = page.getByLabel('Project quick navigation');
  await siblings.getByRole('link', { name: /MuleSoft/i }).click();
  await expect(page).toHaveURL(/\/mulesoft-migrator$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(/MuleSoft/i);
});

runtimeTest('mobile menu navigation', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile');
  await page.goto('/home');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  const toggle = page.getByRole('button', { name: 'Toggle navigation menu' });
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page).toHaveURL(/\/personal\/contact$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

runtimeTest('command palette contains focus and restores its trigger', async ({ page }) => {
  await page.goto('/home');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  const trigger = page.getByRole('button', { name: 'Open command palette' }).filter({ visible: true });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Command palette' });
  await expect(dialog.getByRole('combobox')).toBeFocused();
  for (const key of ['Tab', 'Shift+Tab', 'Shift+Tab', 'Tab']) {
    await page.keyboard.press(key);
    await expect.poll(() => dialog.evaluate((element) => element.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

runtimeTest('command palette restores focus on dismissal', async ({ page }) => {
  await page.goto('/home');
  const trigger = page.getByRole('button', { name: 'Open command palette' }).filter({ visible: true });
  await trigger.click();
  await expect(page.getByRole('dialog', { name: 'Command palette' }).getByRole('combobox')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog', { name: 'Command palette' })).toBeHidden();
  await expect(trigger).toBeFocused();
});

runtimeTest('theme persists and applies before application bootstrap', async ({ page }) => {
  await page.goto('/home');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.getByRole('button', { name: 'Switch to dark mode' }).filter({ visible: true }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await expect.poll(() => page.evaluate(() => localStorage.getItem('theme'))).toBe('dark');
  await page.evaluate(() => localStorage.setItem('theme-palette', 'catppuccin'));
  await page.route(/\.js(?:\?|$)/, (route) => route.abort());
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'catppuccin');
  await expect(page.locator('app-root')).toBeEmpty();
  await page.unroute(/\.js(?:\?|$)/);
  await page.reload();
});

runtimeTest('single-key preference persists without disabling modifier shortcuts', async ({ page }) => {
  await page.goto('/home');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.keyboard.press('?');
  const help = page.getByRole('dialog', { name: 'Keyboard shortcuts' });
  await help.getByRole('switch').uncheck();
  await page.keyboard.press('Escape');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.keyboard.press('?');
  await expect(help).toBeHidden();
  await expect.poll(() => page.evaluate(() => localStorage.getItem('single-key-shortcuts'))).toBe('off');
  await expect(page.locator('app-command-palette')).toBeAttached();
  await page.keyboard.press('Control+k');
  await expect(page.getByRole('dialog', { name: 'Command palette' })).toBeVisible();
  await page.keyboard.press('Escape');
});

runtimeTest('contact prepares an exact draft without sending', async ({ page }) => {
  await page.goto('/personal/contact');
  await expect(page.getByRole('button', { name: 'Prepare Message' })).toBeDisabled();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Smoke Visitor');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('visitor@example.com');
  await page.getByRole('textbox', { name: /^Message/ }).fill('Discuss a portfolio project.');
  const outgoing: string[] = [];
  page.on('request', (request) => {
    if (request.method() !== 'GET') outgoing.push(request.url());
  });
  await page.getByRole('button', { name: 'Prepare Message' }).click();
  await expect(page.getByRole('status').locator('pre')).toHaveText(
    'Name: Smoke Visitor\nEmail: visitor@example.com\n\nDiscuss a portfolio project.'
  );
  expect(outgoing).toEqual([]);
});

runtimeTest('production app-shell caching and security headers', async ({ page, request }) => {
  await page.goto('/home');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  for (const path of ['/', '/index.html', '/projects/professional/nri-na/farmlink-modernization']) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const headers = response.headers();
    expect(headers['cache-control']).toContain('no-cache');
    expect(headers['x-frame-options']).toBe('SAMEORIGIN');
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-xss-protection']).toBe('0');
    expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['permissions-policy']).toBe('geolocation=(), microphone=(), camera=()');
    expect(headers['strict-transport-security']).toBe('max-age=31536000; includeSubDomains');
    expect(headers['content-security-policy']).toContain("frame-ancestors 'self'");
    expect(headers['content-security-policy']).toContain("form-action 'self'");
  }
});
