import { devices } from '@playwright/test';

export default {
  webServer: {
    command: 'yarn build && yarn serve',
    url: 'http://localhost',
    timeout: 3000,
  },
  use: {
    baseURL: 'http://localhost/',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    headless: process.env.NODE_ENV !== 'development',
    locale: 'en-US',
    retries: 1,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    launchOptions: {
      slowMo: 100,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'iPhone 12',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
};
