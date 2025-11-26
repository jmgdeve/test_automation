import { test } from '@playwright/test';
import { APIController } from '../utils/APIController';
import { HomePage } from '../pages/HomePage';
import { generateArticle, testUser } from '../utils/testData';





test.describe('Hybrid E-Commerce Tests', () => {
    let USER = testUser;
    let apiController: APIController;
    let homePage: HomePage;
    let token: string;
    let articleSlug: string;
    let articleData: any;

    test.beforeAll(async ({ request }) => {
        const apiController = new APIController(request);
        // 1. Get Token via API
        token = await apiController.getAuthToken(USER);
    });

    test('Verify newly created article is visible on Global Feed', async ({ page, request }) => {
        const apiController = new APIController(request);
        // generate article data with -testData-
        articleData = generateArticle();

        // 2. API: Create Article
        const createdArticleResponse = await apiController.createArticle(token, articleData);
        articleSlug = createdArticleResponse.article.slug;
        console.log(`Created article with slug: ${articleSlug}`);

        // 3. UI: Inject Token & Verify
        await page.addInitScript((value) => {
            window.localStorage.setItem('jwtToken', value); // Conduit uses 'jwtToken' as the key
        }, token);
        
        // 4. UI: Verify Data
        homePage = new HomePage(page);
        await homePage.goto();
        await homePage.verifyArticleVisible(articleData.title);
    });

    test.afterAll(async ({ request }) => {
        const apiController = new APIController(request);
        // 4. API: Cleanup Data--delete
        if (articleSlug) {
            await apiController.deleteArticle(token, articleSlug);
            console.log(`Cleaned up article: ${articleSlug}`);
        }
    });
});