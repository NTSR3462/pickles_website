<div align="center">

# 🏺 Achaari Bliss
### 100% Free-Hosted Artisanal Veg & Non-Veg Pickles E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Zero-Cost Architecture](https://img.shields.io/badge/Monthly%20Cost-%240.00%2Fmo%20forever-brightgreen.svg)](#-zero-cost-architecture)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Capable-blue.svg)](sw.js)
[![CI Validation](https://img.shields.io/badge/CI-Passing-success.svg)](.github/workflows/ci.yml)
[![Dietary Compliance](https://img.shields.io/badge/FSSAI-Veg%20%26%20Non--Veg%20Certified-orange.svg)](#-authentic-veg--non-veg-catalog)

A high-converting, mobile-first Progressive Web App (PWA) storefront for artisanal, homemade pickles and chutneys. Engineered with a **$0.00/month recurring cost architecture** using JAMstack edge caching, client-side state hydration, and direct WhatsApp + dynamic UPI QR order fulfillment.

[Live Features](#-features) • [System Architecture](docs/ARCHITECTURE.md) • [SRS Document](docs/SRS_DOCUMENT.md) • [Data Dictionary](docs/DATA_DICTIONARY.md) • [Deployment Guide](docs/DEPLOYMENT_GUIDE.md)

</div>

---

## 🌟 Why This Architecture is 100% Free Forever

Traditional e-commerce platforms (Shopify, WooCommerce, custom backends) erode the thin profit margins of food artisans:

| Traditional Platform Overheads | Achaari Bliss Zero-Cost Model | Savings |
| :--- | :--- | :--- |
| Shopify / SaaS Subscription ($29 – $79/mo) | **GitHub Pages / Cloudflare Pages ($0.00/mo)** | **$350 – $950 / yr** |
| Cloud Database Server ($15 – $30/mo) | **Modular Static JSON Store ($0.00/mo)** | **$180 – $360 / yr** |
| Payment Gateway Fees (2.0% – 3.5% + GST) | **Direct WhatsApp + Dynamic UPI QR (0% Fee)** | **100% Margin Retained** |
| SSL / TLS Certificates ($50/yr) | **Automated Edge TLS 1.3 Encryption ($0.00)** | **$50 / yr** |
| **Total Annual Operational Cost** | **$0.00 / month forever** | **Save $600 – $1,500+ / yr** |

---

## ✨ Features

- 🥭 **Authentic Veg & Non-Veg Catalog**: Handcrafted recipes including *Avakaya Mango*, *Khatta-Meetha Lemon*, *Spicy Lahsun Garlic*, *Gongura*, and regional meat specials like *Andhra Boneless Chicken*, *Malabar Sea Prawn*, *Hyderabadi Gosht (Mutton)*, and *Konkani King Fish*.
- 🟢🔴 **FSSAI Dietary Indicators**: Green square/dot indicator for 100% pure vegetarian jars and red square/triangle for non-vegetarian specialties.
- ⚖️ **Dynamic Weight Variants**: Customers switch between 250g, 500g, and 1kg with real-time price updates and bulk savings badges.
- 🌶️ **Visual Spice Meter**: Chili rating gauge from Mild (🍋) to Extra Fiery (🔥).
- 🍽️ **Culinary Meal Pairings**: Recommends authentic staple dishes (e.g. *Hyderabadi Biryani*, *Steaming Rice & Ghee*, *Parathas*).
- 🛒 **Persistent Shopping Cart**: Preserves user selections across page refreshes and browser restarts using HTML5 `localStorage`.
- 🚚 **Free Shipping Motivator**: Real-time progress bar towards free delivery thresholds.
- 📱 **Progressive Web App (PWA)**: Service Worker with *Stale-While-Revalidate* caching enables full offline browsing. Installable on iOS/Android home screens.
- 💬 **Zero-Commission WhatsApp Checkout**: Generates an itemized order manifest directly to the merchant's WhatsApp, complete with address, payment choice, and notes.
- ⚡ **Dynamic Live UPI QR Code Generator**: Generates client-side, scannable UPI QR codes encoded with order ID and exact bill amount for instant payment via Google Pay, PhonePe, and Paytm.

---

## 📁 Repository Structure

```
pickles_website/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml            # Automated GitHub Pages CI/CD
│   │   └── ci.yml                # Automated syntax & asset validation CI
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md         # Standard issue reporting template
│   │   └── feature_request.md    # Feature & recipe proposal template
│   └── PULL_REQUEST_TEMPLATE.md  # Pull request review checklist
├── assets/
│   ├── css/
│   │   └── styles.css            # Culinary artisan theme styling & layout
│   └── js/
│       ├── app.js                # Core cart, quiz & WhatsApp checkout engine
│       └── products.js           # Static catalog data & store config
├── docs/
│   ├── SRS_DOCUMENT.md           # IEEE 830 Software Requirements Specification
│   ├── ARCHITECTURE.md           # High-level architecture & design patterns
│   ├── DATA_DICTIONARY.md        # Catalog schema & data tier specification
│   └── DEPLOYMENT_GUIDE.md       # Zero-cost hosting walkthrough
├── tests/
│   └── cart.test.js              # Automated unit tests for cart & calculations
├── CHANGELOG.md                  # Semantic release history
├── CODE_OF_CONDUCT.md            # Contributor Covenant v2.1 standard
├── CONTRIBUTING.md               # Guidelines for community contributions
├── index.html                    # Semantic HTML5 storefront & modals
├── LICENSE                       # MIT Open-Source License
├── manifest.json                 # PWA mobile manifest
├── netlify.toml                  # Netlify deployment configuration
├── README.md                     # Project documentation (this file)
├── robots.txt                    # Search engine crawler policies
├── sitemap.xml                   # Search engine index sitemap
├── sw.js                         # PWA Service Worker offline engine
└── vercel.json                   # Vercel deployment configuration
```

---

## ⚡ Quickstart (Run Locally in 5 Seconds)

No build steps, no package managers, and no runtime compilation required.

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/pickles-website.git
   cd pickles-website
   ```
2. Open [`index.html`](index.html) in any modern browser:
   - On Windows: `start index.html`
   - On macOS: `open index.html`
   - On Linux: `xdg-open index.html`
3. *(Optional)* Serve locally with a lightweight HTTP server:
   ```bash
   npx serve .
   # or Python:
   python -m http.server 8000
   ```

---

## 🚀 1-Click Free Deployment

### Method 1: GitHub Pages (Recommended)
1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/pickles-website.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will build and deploy your site within 60 seconds with free custom HTTPS.

For Cloudflare Pages, Netlify, and Vercel guides, see the [Deployment Guide](docs/DEPLOYMENT_GUIDE.md).

---

## ⚙️ Customization

### 1. Update Seller Phone & Store Settings
Open [`assets/js/products.js`](assets/js/products.js#L275-L287) and personalize `STORE_CONFIG`:
```javascript
const STORE_CONFIG = {
  storeName: "Achaari Bliss",
  whatsappNumber: "919876543210", // Your country code + phone number
  currencySymbol: "₹",
  freeShippingThreshold: 500,     // Free shipping qualifying cart value
  standardShippingFee: 50,
  upiId: "yourbusiness@upi",      // Your GPay / PhonePe UPI VPA ID
  supportEmail: "hello@yourpicklebiz.com"
};
```

### 2. Add or Edit Pickles
In [`assets/js/products.js`](assets/js/products.js), each item in `PRODUCTS_DATA` accepts:
- `id`: Unique identifier (e.g., `"andhra-chicken-pickle"`)
- `name`: Display title
- `category`: `"classic-veg"`, `"non-veg"`, `"spicy-regional"`, or `"sweet-tangy"`
- `isVeg`: `true` for pure vegetarian or `false` for non-vegetarian
- `spiceLevel`: 1 (Mild) to 4 (Extra Fiery)
- `variants`: Array of sizes (`250g`, `500g`, `1kg`) and prices

---

## 📑 Technical Documentation

- **[IEEE 830 SRS Document](docs/SRS_DOCUMENT.md)**: Exhaustive functional and non-functional requirements, data dictionaries, and verification matrix.
- **[System Architecture](docs/ARCHITECTURE.md)**: High-level architectural diagrams, PWA cache lifecycles, and state hydration mechanics.
- **[Deployment Guide](docs/DEPLOYMENT_GUIDE.md)**: Zero-cost deployment manuals for GitHub Pages, Cloudflare Pages, Netlify, and Vercel.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
Copyright (c) 2026 NTSR3462 (Tarun Reddy).
