import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  webServer: { command: 'npm run dev', url: 'http://localhost:5173', reuseExistingServer: !process.env.CI },
  use: { baseURL: 'http://localhost:5173' },
  projects: [
    { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium' } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
  ],
})
