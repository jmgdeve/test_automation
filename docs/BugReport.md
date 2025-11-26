# 🐞 Bug Report: Tag List Overflow in Editor

**ID:** BUG-001
**Severity:** Medium
**Priority:** High
**Status:** Open

### 💥 Description
When a user adds more than 20 tags to an article, the tag container overflows the viewport, making it impossible to delete the last added tags.

### 👣 Steps to Reproduce
1. Log in to the application.
2. Navigate to "New Article" (`/editor`).
3. In the "Enter tags" input, type a tag and hit Enter.
4. Repeat step 3 for 25 different tags.

### 🤔 Expected Behavior
The tag list should wrap to the next line or provide a scrollbar within the container.

### 😱 Actual Behavior
The tags continue in a single horizontal line, extending off the screen and breaking the page layout.

### 📸 Screenshots
*(Insert placeholder image or link here)*

### 🌍 Environment
* **OS:** Windows 10
* **Browser:** Chrome 114
* **URL:** https://conduit.bondaracademy.com/editor