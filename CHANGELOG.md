# Changelog

All notable changes to the **Achaari Bliss** platform are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.1.0] - 2026-11-16
### Added
- **Multi-Currency Diaspora Converter**:
  - Live currency toggle (INR ₹, USD $, GBP £, EUR €) for international NRI and diaspora gifting orders.
- **Interactive Verified Customer Reviews**:
  - Customer review modal with star ratings, location tagging, and instant client-side wall publishing.
- **Real-Time FAQ Search**:
  - Live searchable accordion covering shelf life, oil-curing safety, shipping timelines, and hygienic meat preparation.
- **Automated Unit Testing Suite**:
  - Dedicated zero-dependency test runner (`tests/cart.test.js`) covering catalog integrity, cart math, coupon deductions, shipping thresholds, currency conversion, and XSS sanitization.
  - Integrated into GitHub Actions CI pipeline (`.github/workflows/ci.yml`).
- **Data Dictionary Specification**:
  - Comprehensive documentation (`docs/DATA_DICTIONARY.md`) detailing data types, schemas, constraints, and NPCI UPI URI standards.
- **Performance & Micro-Interactions**:
  - Responsive image loading shimmer skeleton placeholder to eliminate Cumulative Layout Shift (CLS).
  - Tactile button press feedback, weight variant scale animations, and elevated card hover shadows.
  - Estimated dispatch ETA indicator (`⚡ Fresh Batch: Dispatches in 24 hrs`).
- **Seasonal Harvest & Freshness Badges**:
  - Highlight tags for sun-cured terrace batches, winter harvest gooseberry, and Konkani coastal seasonal batches.
- **Accessibility & PWA Offline Experience**:
  - High-contrast accessible keyboard skip link and focus rings (`:focus-visible`).
  - Real-time network connectivity offline notification banner.
- **Order Printing & Invoicing**:
  - Dedicated `@media print` stylesheet for formatted printable receipts and kitchen packing manifests.
- **Promo Discount Coupon Engine**:
  - Instant discount deduction supporting `FIRST10` (10% off), `ACHAAR50` (₹50 off), and `GRANDMA` (15% off).
- **SEO & Social Discovery**:
  - Complete OpenGraph, Twitter card tags, and JSON-LD `Product` structured schema metadata.

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
