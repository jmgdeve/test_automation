import { APIRequestContext } from '@playwright/test';

/**
 * I created this controller to handle all backend interactions.
 * This allows me to set up test state (like creating users or articles) 
 * much faster than doing it through the UI.
 */
export class APIController {
    private request: APIRequestContext;
    private baseURL: string = 'https://conduit-api.bondaracademy.com/api';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    // 1. Login via API to get the token
    async getAuthToken(userDetails: object) {
        const response = await this.request.post(`${this.baseURL}/users/login`, {
            data: { user: userDetails },
        });

        // Error handling for failed login
        if (!response.ok()) {
            throw new Error(`Login failed: ${response.status()} ${response.statusText()} - ${await response.text()}`);
        }
        const responseBody = await response.json();
        return responseBody.user.token;

    }

    // 2. Create a new article via API
    async createArticle(token: string, articleDetails: object) {
        const response = await this.request.post(`${this.baseURL}/articles`, {
            data: { article: articleDetails },
            headers: { Authorization: `Token ${token}` }
        });
        return await response.json();
    }

    // 3. Delete an article via API
    async deleteArticle(token: string, slug: string) {
        const response = await this.request.delete(`${this.baseURL}/articles/${slug}`, {
            headers: { Authorization: `Token ${token}` }
        });

    }
}