// tests/auth.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { users } from '../config/users';

test('Login Success', async ({ page }) => {
  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.login(users.admin.username, users.admin.password);
  await dashboard.verifyLoaded();
});

test('Login Failure', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login(users.invalid.username, users.invalid.password);

  await expect(login.errorMsg).toBeVisible();
});