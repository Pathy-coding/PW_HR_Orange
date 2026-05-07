// tests/pim.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';
import { users } from '../config/users';

test('Add Employee', async ({ page }) => {
  const login = new LoginPage(page);
  const pim = new PimPage(page);

  await login.goto();
  await login.login(users.admin.username, users.admin.password);

  await pim.navigate();
  await pim.addEmployee('Jane', 'Doe');
  await pim.verifyEmployeeCreated('Jane','Doe');

});
