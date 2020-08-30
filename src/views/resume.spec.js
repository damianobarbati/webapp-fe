/* eslint-disable jest/no-done-callback */
import { test, expect } from '@playwright/test';

test('resume', async ({ page }) => {
  await page.goto('/resume');
  const title = page.locator('#root h1');
  await expect(title).toHaveText('Damiano Barbati');
});
