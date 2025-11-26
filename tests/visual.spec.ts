import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Visual Regression Tests', () => {
    
    test('Home Page Layout (Masking Dynamic Data)', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();

        // Wait for the page to settle
        await page.waitForLoadState('networkidle');

        // Capture screenshot with MASKING
        // We mask the feed and tags because they change every day
        await expect(page).toHaveScreenshot('home-page-layout.png', {
            mask: [
                page.locator('.feed-toggle'), // Hides the feed tabs
                page.locator('.sidebar'),     // Hides the popular tags
                page.locator('.article-preview') // Hides specific articles
            ],
            fullPage: true // Captures the whole scrollable page
        });
    });
});