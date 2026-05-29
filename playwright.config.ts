import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  
  testDir: './tests',

  fullyParallel: true,

  retries: 2,

  workers: 2,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false
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
  ],
});