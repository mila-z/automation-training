import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

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
});