

# Test Plan: Conduit E-Commerce Platform

## 1. Introduction
The objective of this test plan is to validate the critical user journeys (CUJs) of the Conduit blogging platform. This includes a hybrid approach using API for data setup and Playwright for UI validation.

## 2. Scope
### In Scope
* **Authentication:** Login, Registration (via API).
* **Articles:** Create, Read, Update, Delete (CRUD).
* **Feed:** Global Feed vs. Your Feed visibility.

### Out of Scope
* Third-party social logins.
* Performance testing (Load > 1000 users).

## 3. Test Strategy
We adhere to the **Testing Pyramid**:
1.  **API Level:** fast data creation and user management.
2.  **UI Level:** End-to-end user journey validation.
3.  **Visual:** Snapshot testing for layout stability.

## 4. Tools
* **Automation:** Playwright (TypeScript).
* **CI/CD:** GitHub Actions.
* **Reporting:** Playwright HTML Report.