import { Page, Locator, expect } from '@playwright/test';
// Represents the Home Page of the Conduit application
export class HomePage {
    readonly page: Page;
    readonly globalFeedTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.globalFeedTab = page.locator('text=Global Feed');
    }
    // Navigate to the Home Page
    async goto() {
        await this.page.goto('https://conduit.bondaracademy.com/');
    }

    // Verify that an article with the given title is visible on the Global Feed
    async verifyArticleVisible(title: string) {
        await this.globalFeedTab.click();
        await expect(this.globalFeedTab).toHaveClass(/active/);
        
        // Wait for the article to be visible
        const article = this.page.getByRole('heading', { name: title }).first();
        await expect(article).toBeVisible();
    }
}