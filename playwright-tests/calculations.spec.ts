import { test, expect } from '@playwright/test';

test('health endpoint returns ok', async ({ page }) => {
  await page.goto('http://localhost:8000/health');
  const content = await page.textContent('body');

  const json = JSON.parse(content!);

  expect(json.status).toBe('ok');
});
