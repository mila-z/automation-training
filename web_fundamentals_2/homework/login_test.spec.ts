import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    const url = 'http://localhost:5173/login';
    await page.goto(url);

    // Enter email
    const email : string = "john@example.com";
    const email_field = page.locator('[data-testid="cs-login-email"] input');
    await(email_field.fill(email));

    // Enter password
    const password : string = "password123";
    const password_field = page.locator('[data-testid="cs-login-password"] input');
    await(password_field.fill(password));

    // Click login button
    const login_button = page.locator('[data-testid="cs-login-submit"]');
    await(login_button.click());

    // Assert the URL changes
    await expect(page).not.toHaveURL(url);

    // Assert the heading is visible
    await expect(page.locator('[data-testid="cs-app-header"]')).toHaveText("City Services Portal");
});