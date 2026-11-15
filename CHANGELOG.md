# Changelog

All notable changes to the **Achaari Bliss** platform are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-11-15
### Added
- **Gourmet Non-Vegetarian Pickle Line**:
  - Andhra Spicy Boneless Chicken Pickle in cold-pressed groundnut oil.
  - Coastal Malabar Royyala Sea Prawn Pickle with curry leaves.
  - Nizami Boneless Mutton (Gosht) Pickle in Shahi Garam Masala.
  - Konkani Surmai (King Fish) Pickle in wild kokum.
- **FSSAI Food Packaging Standards**:
  - Green dot indicator badge for 100% Pure Vegetarian pickles.
  - Red triangle indicator badge for Non-Vegetarian varieties.
- **Progressive Web App (PWA)**:
  - Added `sw.js` Service Worker with Stale-While-Revalidate caching for 100% offline catalog browsing.
  - Added `manifest.json` for standalone mobile home screen installation.
- **Live Dynamic UPI QR Code Engine**:
  - Client-side NPCI-compliant UPI deep-link QR generator (`upi://pay?pa=...`) for instant cashless payments.
- **Interactive Taste Matchmaker Quiz**:
  - 3-step recommendation wizard scoring user heat tolerance and meal pairings.
- **Web Share API**:
  - Native mobile sharing for individual pickle products.
- **Professional Project Organization**:
  - Structured into `assets/css`, `assets/js`, `docs`, and GitHub workflow automation.

---

## [1.0.0] - 2026-11-15
### Added
- Initial release of Achaari Bliss Artisanal Pickles storefront.
- IEEE 830-compliant Software Requirements Specification (`docs/SRS_DOCUMENT.md`).
- Traditional Vegetarian catalog: Raw Mango Avakaya, Lemon Khatta-Meetha, Lahsun Garlic, Gongura, Chhundo, Kolhapuri Thecha, Punjabi Mix, Amla.
- Dynamic weight variants (250g, 500g, 1kg) with real-time price updates.
- Sliding cart drawer with HTML5 `localStorage` persistence and free delivery tracker.
- WhatsApp Click-to-Chat automated order manifest dispatch.
- Zero-cost deployment configuration for GitHub Pages, Cloudflare Pages, Netlify, and Vercel.
