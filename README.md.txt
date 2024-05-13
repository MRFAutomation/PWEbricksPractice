Running Playwright tests
1. "npx playwright test" command to run your tests on all browsers as configured in the playwright.config file.
2. "npx playwright test --ui" command to run your tests in ui mode, where you can easily walk through each step of the test and visually see what was happening before, during and after each step.
3. "npx playwright test --headed" command to run your tests in headed mode. Default is headless.
4. "npx playwright test --project chromium" command to run your tests in specific browser.
5. "npx playwright test landing-page.spec.ts" to run specific file.
6. "npx playwright test --debug" to debug all tests.
7. "npx playwright test example.spec.ts --debug" To debug one specific test file.
