# 🎭 Conduit Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Test-green)
![CI Status](https://github.com/jmgdeve/test_playwright/actions/workflows/playwright.yml/badge.svg)

## 🚀 Overview
This is a robust **Hybrid Test Automation Framework** built with **TypeScript** and **Playwright**. It automates the Critical User Journeys of the [Conduit RealWorld App](https://conduit.bondaracademy.com/).

This project uses:
* **Page Object Model (POM)** architecture for maintainability.
* **API + UI Hybrid Testing** (Using API to inject test data state).
* **CI/CD Integration** via GitHub Actions.
* **Visual Regression Testing** for pixel-perfect validation.

## 🛠️ Tech Stack
* **Language:** TypeScript
* **Framework:** Playwright
* **CI/CD:** GitHub Actions
* **Reporting:** Playwright HTML Report

## 📂 Project Structure
```text
├── .github/workflows   # CI/CD Pipeline Configuration
├── pages/              # Page Object Model (Locators & Methods)
├── tests/              # Test Specs (E2E & API)
├── utils/              # Helper functions (API Controllers)
└── playwright.config.ts