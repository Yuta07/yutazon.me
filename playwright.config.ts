import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
	testDir: 'tests/e2e',
	timeout: 10000,
	forbidOnly: !!process.env.CI,
	use: {
		actionTimeout: 5000,
		baseURL: 'http://localhost:3000',
		browserName: 'chromium',
		headless: false,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		screenshot: 'only-on-failure',
	},
	projects: [
		{
			name: 'chromium',
			use: { browserName: 'chromium', ...devices['Desktop Chrome'] },
		},
		// {
		// 	name: 'iPhone 11',
		// 	use: { browserName: 'webkit', ...devices['iPhone 11'] },
		// },
	],
}
export default config