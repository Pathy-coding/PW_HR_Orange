// pages/PimPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly addBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly saveBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.addBtn = page.getByRole('link', { name: 'Add Employee' }); 
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  async navigate() {
    await this.pimMenu.click();
  }

  async addEmployee(first: string, last: string) {
    await this.addBtn.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await expect(this.saveBtn).toBeVisible(); // optional but good practice
    await this.saveBtn.click();
  }

 async verifyEmployeeCreated(first: string, last: string) {
 //await expect(this.page).toHaveURL(/empNumber\/\d+/);
  await expect(
    this.page.getByRole('textbox', { name: 'First Name' })
  ).toHaveValue(first);

  await expect(
    this.page.getByRole('textbox', { name: 'Last Name' })
  ).toHaveValue(last);

  // Another comment
}
}