import { test, test as it, expect } from '@playwright/test';

const { describe } = test;

// await page.pause();

describe('Auth', () => {
  it('success', async ({ page }) => {
    await page.goto('/app/auth');
    const title = page.locator('#root button');
    await expect(title).toHaveText('Login');

    await page.fill('input[name=email]', 'bruce.wayne@gmail.com');
    await page.fill('input[name=password]', 'bruce');
    await page.click('button');

    await page.waitForSelector('h1');
    const state = await page.evaluate(() => window.store.getState());

    expect(state.app).toEqual({
      id: 1,
      ready: false,
      token: expect.any(String),
    });
  });

  it('failure', async ({ page }) => {
    await page.goto('/app/auth');
    const title = page.locator('#root button');
    await expect(title).toHaveText('Login');

    await page.fill('input[name=email]', 'bruce.wayne@gmail.com');
    await page.fill('input[name=password]', 'blabla');
    await page.click('button');

    await page.waitForSelector('p[role=alert]');
    const copy = page.locator('p[role=alert]');
    await expect(copy).toHaveText(/Unauthorized/);

    const state = await page.evaluate(() => window.store.getState());

    expect(state.app).toEqual({
      id: null,
      ready: false,
      token: null,
    });
  });
});
