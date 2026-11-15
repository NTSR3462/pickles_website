# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :x:                |

---

## 🔒 Security Architecture Highlights
1. **Zero Database Risk**: Achaari Bliss utilizes a static, client-side data model. There is no SQL/NoSQL database to breach or inject.
2. **Zero Payment Card Storage**: No customer credit card, debit card, or CVV numbers are collected or stored on any server.
3. **Encrypted Communications**: 100% forced TLS 1.3 encryption across all GitHub Pages, Cloudflare Pages, and Netlify deployments.
4. **Input Sanitization**: Order details passed via the WhatsApp URL are sanitized and URL-encoded to prevent protocol injection.

---

## 🛡️ Reporting a Vulnerability
If you discover a security vulnerability in this project, please report it privately:
- **Email**: hello@achaaribliss.com
- Please include a detailed description of the vulnerability, reproduction steps, and potential impact.
- Maintainers will acknowledge receipt within 48 hours and coordinate a public fix.
