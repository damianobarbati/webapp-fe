import { test, expect } from '@playwright/test';

test('Resume', async ({ page }) => {
  await page.goto('/resume');
  const title = page.locator('#root h1');
  await expect(title).toHaveText('Damiano Barbati');

  const state = await page.evaluate(() => window.store.getState());
  expect(state.app).toEqual({
    id: null,
    ready: false,
    token: null,
  });
});
