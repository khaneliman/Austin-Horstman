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
  await expect(page.getByLabel('Prepared message draft')).toHaveText(
    'Name: Smoke Visitor\nEmail: visitor@example.com\n\nDiscuss a portfolio project.'
  );
  expect(outgoing).toEqual([]);
});

for (const mode of ['copied', 'denied', 'unavailable'] as const) {
  runtimeTest(`contact draft copying: ${mode}`, async ({ page }) => {
    await page.addInitScript((mode) => {
      let copied = '';
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value:
          mode === 'unavailable'
            ? undefined
            : {
                writeText: async (text: string) => {
                  if (mode === 'denied') throw new DOMException('Denied', 'NotAllowedError');
                  copied = text;
                },
                readText: async () => copied,
              },
      });
    }, mode);
    await page.goto('/personal/contact');
    await page.getByRole('textbox', { name: 'Your Name' }).fill('Smoke Visitor');
    await page.getByRole('textbox', { name: 'Email Address' }).fill('visitor@example.com');
    await page.getByRole('textbox', { name: /^Message/ }).fill('Context with <markup> & punctuation.\nSecond line.');
    const outgoing: string[] = [];
    page.on('request', (request) => {
      if (request.method() !== 'GET') outgoing.push(request.url());
    });
    await page.getByRole('button', { name: 'Prepare Message' }).click();
    const expected =
      'Name: Smoke Visitor\nEmail: visitor@example.com\n\nContext with <markup> & punctuation.\nSecond line.';
    const draft = page.getByLabel('Prepared message draft');
    await expect(draft).toHaveText(expected);
    await page.getByRole('button', { name: 'Copy draft', exact: true }).focus();
    await page.keyboard.press('Enter');
    if (mode === 'copied') {
      await expect(page.getByText('Draft copied.', { exact: false })).toBeVisible();
      expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(expected);
    } else {
      await expect(page.getByText("Copying wasn't available.", { exact: false })).toBeVisible();
      await expect(draft).toBeFocused();
      expect(await page.evaluate(() => document.getSelection()?.toString())).toBe(expected);
    }
    await page.getByRole('textbox', { name: /^Message/ }).fill('A different prepared draft.');
    await page.getByRole('button', { name: 'Prepare Message' }).click();
    await expect(page.getByText('Draft copied.', { exact: false })).toBeHidden();
    await expect(page.getByText("Copying wasn't available.", { exact: false })).toBeHidden();
    expect(outgoing).toEqual([]);
  });
}

runtimeTest('Home gateways have working destinations', async ({ page }) => {
  for (const [label, destination] of [
    ['resume path', '/personal/resume'],
    ['project catalog', '/projects'],
    ['personal context', '/personal/about'],
    ['contact route', '/personal/contact'],
  ]) {
    await page.goto('/home');
    const gateway = page.getByRole('link', { name: new RegExp(label ?? '') });
    await gateway.focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(new RegExp(`${destination}$`));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
});

runtimeTest('Home chronology and case-study metadata survive navigation', async ({ page }) => {
  await page.goto('/home');
  const cards = page.locator('a[href^="/projects/professional/nri-na/"] h3');
  await expect(cards).toHaveText([
    'MuleSoft Migrator',
    'Underwriting Workbench',
    'FarmLink Modernization',
    'Accident & Health',
  ]);
  await page.getByRole('link', { name: /Accident & Health/ }).click();
  await expect(page).toHaveTitle('Accident & Health | Austin Horstman');
  const description = page.locator('meta[name="description"]');
  await expect(description).toHaveAttribute('content', /new agent-facing quote interface/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'Accident & Health | Austin Horstman'
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    'content',
    'Accident & Health | Austin Horstman'
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://austinhorstman.dev/projects/professional/nri-na/accident-health'
  );
  await expect(page.getByRole('heading', { name: 'Technology Stack', exact: true })).toHaveCount(0);
  await page.locator('app-footer').getByRole('link', { name: 'Austin Horstman', exact: true }).click();
  await expect(page).toHaveURL(/\/home$/);
  await expect(page).toHaveTitle('Austin Horstman - Full Stack Developer Portfolio');
  await expect(description).toHaveAttribute('content', /Full Stack Developer specializing/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'Austin Horstman - Full Stack Developer Portfolio'
  );
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    'content',
    'Austin Horstman - Full Stack Developer Portfolio'
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://austinhorstman.dev/');
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
