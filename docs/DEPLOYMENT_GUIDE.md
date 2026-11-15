# 🚀 Zero-Cost Production Deployment Guide

## Project: "Achaari Bliss" Artisanal Pickles PWA
Deploy and host this platform for **$0.00 / month forever** with free global CDN and SSL.

---

## Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Deployment Option 1: GitHub Pages (Recommended)](#2-deployment-option-1-github-pages-recommended)
3. [Deployment Option 2: Cloudflare Pages](#3-deployment-option-2-cloudflare-pages)
4. [Deployment Option 3: Netlify](#4-deployment-option-3-netlify)
5. [Deployment Option 4: Vercel](#5-deployment-option-4-vercel)
6. [Post-Deployment Configuration & Verification](#6-post-deployment-configuration--verification)

---

## 1. Prerequisites
- A free [GitHub](https://github.com) account.
- Git installed on your workstation.
- Your merchant WhatsApp number with country code (e.g. `919876543210`).
- Your business UPI ID (e.g. `yourbiz@upi`).

---

## 2. Deployment Option 1: GitHub Pages (Recommended)

GitHub Pages provides 100% free static website hosting backed by Fastly CDN with automated Let's Encrypt SSL certificates.

### Step 1: Create a GitHub Repository
1. Log into your GitHub account.
2. Click **New Repository** (or visit [github.com/new](https://github.com/new)).
3. Name your repository (e.g., `pickles-website` or `achaari-bliss`).
4. Keep the repository **Public** (or Private if using GitHub Pro/Free Actions).
5. Click **Create repository**.

### Step 2: Push Your Project to GitHub
In your local project terminal (`d:\pickles_website`), run:
```bash
# Add the remote repository
git remote add origin https://github.com/<your-username>/pickles-website.git

# Ensure you are on the main branch
git branch -M main

# Push all files
git push -u origin main
```

### Step 3: Enable Automated Deployment
1. On GitHub, navigate to your repository **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The workflow in [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) will trigger automatically.
5. In approximately 60 seconds, your site will be live at:
   ```text
   https://<your-username>.github.io/pickles-website/
   ```

*(Optional)* **Custom Domain**: Under the Pages settings, you can add your custom domain (e.g., `shop.achaaribliss.com`) with automated free SSL.

---

## 3. Deployment Option 2: Cloudflare Pages

Cloudflare Pages offers unlimited bandwidth, DDoS protection, and global edge propagation.

1. Sign up for a free account at [dash.cloudflare.com](https://dash.cloudflare.com).
2. Go to **Workers & Pages** > **Create application** > **Pages** tab.
3. Select **Connect to Git** and authorize your GitHub account.
4. Select your `pickles-website` repository.
5. Configure deployment settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (or root)
6. Click **Save and Deploy**.
7. Your site is live instantly at `https://pickles-website.pages.dev`.

---

## 4. Deployment Option 3: Netlify

Netlify allows instant drag-and-drop or automated Git-based builds.

### Method A: Instant Drag-and-Drop (No Git Required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `pickles_website` folder into the upload target.
3. Your website is deployed in 10 seconds with a free `.netlify.app` subdomain!

### Method B: Git Integration
1. Log into [netlify.com](https://www.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Choose **GitHub** and select `pickles-website`.
4. Publish directory: `.`
5. Click **Deploy Site**. The included [`netlify.toml`](../netlify.toml) configures headers automatically.

---

## 5. Deployment Option 4: Vercel

1. Log into [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New...** > **Project**.
3. Import your `pickles-website` repository.
4. Keep the default settings (Root directory: `.`). The included [`vercel.json`](../vercel.json) handles routes and caching headers.
5. Click **Deploy**.

---

## 6. Post-Deployment Configuration & Verification

### Step 1: Update Merchant Details
Open [`assets/js/products.js`](../assets/js/products.js#L275-L287) and personalize `STORE_CONFIG`:
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

### Step 2: Verification Checklist
- [ ] **Catalog Display**: Verify all vegetarian and non-vegetarian pickles load properly with images.
- [ ] **Weight Toggle**: Check that switching from 250g to 500g and 1kg updates card prices.
- [ ] **Cart Persistence**: Add items to your cart, refresh the browser, and ensure items remain intact.
- [ ] **WhatsApp Checkout**: Add products, proceed to checkout, enter test delivery information, and click **Send Order via WhatsApp**. Ensure WhatsApp opens with the formatted order manifest.
- [ ] **Dynamic UPI QR**: Confirm the QR code appears on the order confirmation screen with the exact bill amount.
- [ ] **Offline PWA**: Open DevTools > Network tab > select **Offline**, reload the page, and ensure the website loads cleanly from the Service Worker cache.
