# 🎭 Conduit Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Test-green)
![CI Status](https://github.com/jmgdeve/test_playwright/actions/workflows/playwright.yml/badge.svg)

## 🚀 Overview
This is a robust **Hybrid Test Automation Framework** built with **TypeScript** and **Playwright**. It automates the Critical User Journeys of the [Conduit RealWorld App](https://conduit.bondaracademy.com/).

Unlike standard automation scripts, this framework treats testing as a product, focusing on speed, stability, and visual integrity.

## 🧠 Strategic Highlights
* **Hybrid Architecture:** Uses API calls to instantly creating/deleting test data, reducing test execution time by ~60% compared to pure UI tests.
* **Smart Authentication:** Bypasses the UI login screen by injecting a valid JWT Token directly into Browser LocalStorage (saves 3-5s per test).
* **Resilient Visual Testing:** Implements full-page layout validation with **dynamic masking**. This ensures tests verify structural integrity (CSS/Layout) while ignoring volatile content like feeds and timestamps.
* **Self-Healing Data:** Tests automatically clean up their own data via API teardown hooks (`afterAll`), keeping the environment pristine.

## 🛠️ Tech Stack
* **Language:** TypeScript
* **Framework:** Playwright
* **CI/CD:** GitHub Actions (Push, PR, & Nightly Cron Schedule)
* **Reporting:** Playwright HTML Report
* **Pattern:** Page Object Model (POM)

## 📂 Project Structure
```text
├── .github/workflows   # CI/CD Pipeline Configuration
├── docs/               # Manual QA Artifacts (Test Plan, Bug Reports)
├── pages/              # Page Object Model (Locators & Methods)
├── tests/              # Test Specs (Functional & Visual)
├── utils/              # Helper functions (API Controllers & Test Data)
└── playwright.config.ts
```
## ⚡ How to Run

### 1. Install Dependencies
Uses `npm ci` to ensure you get the exact versions defined in the lockfile.
```bash
npm ci
```

### 2. Run All Tests (Headless)
Runs the hybrid E2E and functional tests in the background.
```bash
npx playwright test
```

### 3. Run Visual Regression Tests
Specifically targets the visual specs.
```bash
npx playwright test tests/visual.spec.ts
```

### 4. Update Visual Snapshots
If the UI changes intentionally, run this to update the baseline images:
```bash
npx playwright test --update-snapshots
```

### 5. View HTML Report
Generates and opens the local test report artifact.
```bash
npx playwright show-report
```

## 📝 Manual QA
Beyond automation, this repository contains documentation demonstrating standard QA processes:

* [Test Plan](docs/TestPlan.md)
* [Sample Bug Report](docs/BugReport.md)


---

