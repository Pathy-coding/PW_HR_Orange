// pages/DashboardPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
  }

  async verifyLoaded() {
    await expect(this.dashboardHeader).toBeVisible();
  }
}