import { devices } from '@playwright/test';

export default {
  webServer: {
    command: process.env.NODE_ENV === 'production' ? 'yarn serve' : 'yarn build && yarn serve',
    url: 'http://localhost',
    timeout: 30000,
  },
  testDir: '.',
  testMatch: '*.spec-e2e.js',
  use: {
    baseURL: 'http://localhost/',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    headless: process.env.NODE_ENV !== 'development',
    locale: 'en-US',
    retries: 1,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chrome',
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
      name: 'iphone 12',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
};
