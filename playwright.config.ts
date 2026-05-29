import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 60000,

  testDir: "./tests",

  fullyParallel: true,

  retries: 2,

  workers: 1,

  reporter: [["html"], ["list"]],

  use: {
    baseURL: "https://www.saucedemo.com/",

    trace: "on-first-retry",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    headless: !!process.env.CI,
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
