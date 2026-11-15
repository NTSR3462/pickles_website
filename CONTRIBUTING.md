# Contributing to Achaari Bliss

Thank you for your interest in contributing to **Achaari Bliss**! We welcome community contributions to improve our artisanal food e-commerce platform.

---

## 🛠️ Code of Conduct
Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) in all community interactions.

---

## 🌿 How to Contribute

### 1. Reporting Bugs
- Check existing issues before opening a new bug report.
- Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) with details on your browser, device, and reproduction steps.

### 2. Suggesting Features & Pickles
- Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).
- To suggest authentic regional pickles, include recipe heritage, ingredients, spice heat rating, and oil medium.

### 3. Submitting Pull Requests
1. Fork the repository on GitHub.
2. Create a descriptive feature branch:
   ```bash
   git checkout -b feature/add-kashmiri-walnut-pickle
   ```
3. Commit your changes using conventional commit messages:
   ```bash
   git commit -m "feat(catalog): add kashmiri walnut and garlic pickle"
   ```
4. Verify JavaScript syntax before submitting:
   ```bash
   node -c assets/js/products.js
   node -c assets/js/app.js
   node -c sw.js
   ```
5. Open a Pull Request referencing the related issue.

---

## 📜 Development Guidelines
- **Zero-Cost Mandate**: Do not add dependencies on paid APIs, databases, or proprietary SDKs.
- **Vanilla First**: Maintain zero heavy framework dependencies (no React/Vue runtime build steps) to ensure the platform remains 100% free-hostable on static CDNs.
- **Accessibility & Mobile-First**: Ensure layouts remain responsive across screen sizes from 320px to 1440px+ and follow WCAG 2.1 AA accessibility standards.
