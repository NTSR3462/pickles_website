# Software Requirements Specification (SRS)
## For "Achaari Bliss" – 100% Free-Hosted Artisanal Veg & Non-Veg Pickles E-Commerce Platform

---

### Document Control
- **Document Title**: Software Requirements Specification for Achaari Bliss Pickles Web Platform
- **Version**: 2.0.0 (Enhanced with Non-Veg Gourmet Catalog, PWA Offline Engine, Telemetry & Resume Architecture)
- **Status**: Approved / Ready for Production & Portfolio Presentation
- **Author**: Lead Full-Stack Systems Architect
- **Target Deployment Cost**: $0.00 / month (Completely Free Tier Infrastructure)
- **Date**: November 2026

---

## Table of Contents
1. [Introduction](#1-introduction)
   - 1.1 Purpose & Value Proposition
   - 1.2 Scope of the System
   - 1.3 Definitions, Acronyms, and Abbreviations
2. [Overall Description](#2-overall-description)
   - 2.1 Product Perspective & Architectural Model
   - 2.2 Technical Stacks That Enhance This Project on a Resume
   - 2.3 User Classes & Personas
   - 2.4 Operating Environment & Constraints
3. [Zero-Cost Architecture & Technology Stack](#3-zero-cost-architecture--technology-stack)
   - 3.1 Edge CDN & Static Hosting ($0.00)
   - 3.2 Progressive Web App (PWA) & Service Worker Cache ($0.00)
   - 3.3 Dynamic Live UPI QR Code Generator ($0.00)
   - 3.4 Client-Side State Hydration & Telemetry ($0.00)
4. [Functional Requirements (System Modules)](#4-functional-requirements-system-modules)
   - 4.1 Module 1: Comprehensive Catalog (Pure Veg & Non-Veg Pickles)
   - 4.2 Module 2: FSSAI-Compliant Dietary Indicators & Food Pairing Engine
   - 4.3 Module 3: Weight Variants & Dynamic Price Scaling
   - 4.4 Module 4: Client-Side Shopping Cart & Free Shipping Tracker
   - 4.5 Module 5: Automated WhatsApp Manifest & Live Dynamic UPI QR Checkout
   - 4.6 Module 6: "Taste Matchmaker" Interactive Recommendation Quiz
   - 4.7 Module 7: Core Web Vitals Telemetry & Performance Observer
5. [Non-Functional Requirements (NFR)](#5-non-functional-requirements-nfr)
   - 5.1 Performance & Core Web Vitals (LCP, FID/INP, CLS)
   - 5.2 Offline Availability & PWA Compliance
   - 5.3 Security, Privacy & Compliance (FSSAI & Zero-PCI liability)
6. [Resume Engineering Spotlight & Portfolio Presentation](#6-resume-engineering-spotlight--portfolio-presentation)
   - 6.1 Architectural Trade-offs & Decisions
   - 6.2 Pre-Formatted Resume Bullet Points for Software Engineers
7. [Deployment & Operations Manual](#7-deployment--operations-manual)
   - 7.1 GitHub Pages Deployment
   - 7.2 Cloudflare Pages / Netlify / Vercel
8. [Verification & Acceptance Criteria](#8-verification--acceptance-criteria)

---

## 1. Introduction

### 1.1 Purpose & Value Proposition
This Software Requirements Specification (SRS) defines the functional, architectural, performance, and engineering requirements for **Achaari Bliss**—a high-converting, Progressive Web App (PWA) for artisanal, homemade vegetarian and non-vegetarian pickles.

The project achieves two core objectives:
1. **Commercial Viability**: Operates at **$0.00/month recurring cost**, eliminating typical SaaS subscription costs ($29–$79/mo) and payment gateway cuts (2–3.5%) through direct WhatsApp order ticketing and dynamic UPI QR generation.
2. **Resume & Engineering Excellence**: Demonstrates production-grade full-stack patterns: PWA Service Worker caching (Stale-While-Revalidate), client-side state hydration, real-time Core Web Vitals telemetry, FSSAI food labeling standards, and zero-dependency vanilla ES6+ optimization.

### 1.2 Scope of the System
- **Product Catalog**: Vegetarian heritage pickles (Avakaya Mango, Lemon Khatta-Meetha, Garlic, Gongura, Chhundo, Kolhapuri Thecha, Amla) alongside gourmet regional Non-Vegetarian pickles (Andhra Boneless Chicken, Malabar Sea Prawn, Hyderabadi Mutton Gosht, Konkani King Fish).
- **Dietary & Safety Indicators**: FSSAI-standard green/red badges and food pairing recommendations (Biryani, Steaming Rice with Ghee, Parathas).
- **PWA Capabilities**: Installable web app with offline catalog browsing via Service Worker caching (`sw.js`).
- **Interactive Matchmaker**: 3-step recommendation wizard matching users to jars based on dietary choice, spice threshold, and staple meal pairing.
- **Zero-Commission Transactions**: Generates formatted WhatsApp orders and client-side scannable UPI QR codes.

### 1.3 Definitions and Acronyms
- **PWA**: Progressive Web App (Web App Manifest + Service Worker).
- **LCP / CLS / FID**: Largest Contentful Paint, Cumulative Layout Shift, First Input Delay (Core Web Vitals).
- **FSSAI**: Food Safety and Standards Authority of India (Dietary green/red icon compliance).
- **UPI**: Unified Payments Interface (Zero-fee instant bank transfer standard).

---

## 2. Overall Description

### 2.1 Technical Stacks That Enhance This Project on a Resume
When presented to hiring managers or technical interviewers, this project stands out through deliberate architectural decisions:

```
+---------------------------------------------------------------------------------+
|                                 CLIENT LAYER                                    |
|  - Modern Semantic HTML5 & Responsive CSS Grid / Flexbox                        |
|  - Progressive Web App (PWA): manifest.json + sw.js (Stale-While-Revalidate)    |
|  - Real-Time Core Web Vitals Monitor: PerformanceObserver (LCP, CLS, TTFB)      |
|  - Client-Side State Hydration: HTML5 LocalStorage with zero database latency   |
|  - Interactive Recommendation Engine: Algorithmic Taste Quiz                    |
+---------------------------------------------------------------------------------+
                                       |
                   +-------------------+-------------------+
                   |                                       |
                   v                                       v
+--------------------------------------+ +--------------------------------------+
|        FREE EDGE HOSTING ($0.00)     | |      ZERO-COMMISSION FULFILLMENT     |
| - GitHub Pages / Cloudflare Pages    | | - RFC wa.me WhatsApp URL protocol    |
| - Automated TLS 1.3 SSL via Edge     | | - Dynamic Client-Side UPI QR Engine  |
| - Sub-second TTFB via Global Anycast | | - Direct P2M 0% merchant transaction |
+--------------------------------------+ +--------------------------------------+
```

### 2.2 Resume Architecture Highlights
- **Zero-Cost JAMstack**: Proves ability to design lean, cost-efficient cloud architectures without sacrificing user experience.
- **Service Worker Caching**: Demonstrates mastery of browser cache lifecycles, background fetch handling, and offline resilience.
- **Performance Budgeting**: Real-time telemetry monitoring demonstrates engineering empathy for low-bandwidth mobile users.
- **Universal URL Protocol Integration**: Utilizes standardized deep links (`wa.me` and `upi://pay`) for seamless cross-app communication without external paid SDKs.

---

## 3. Zero-Cost Architecture & Technology Stack

| Component | Technology | Free Tier Policy | Monthly Cost |
|---|---|---|---|
| **Hosting & Edge CDN** | GitHub Pages / Cloudflare Pages | 100GB+ traffic, Unlimited visits | **$0.00** |
| **SSL / HTTPS Security** | Automated Let's Encrypt / Cloudflare Edge | Automatic TLS 1.3 renewal | **$0.00** |
| **Offline Engine & PWA** | Service Worker (`sw.js`) + Cache API | Browser-native, 100% free | **$0.00** |
| **Data Layer** | Modular JavaScript Data Objects (`products.js`) | Client-side memory | **$0.00** |
| **State Persistence** | HTML5 Web Storage API (`localStorage`) | 5MB per origin | **$0.00** |
| **Telemetry & Vitals** | Web PerformanceObserver API | Native browser execution | **$0.00** |
| **QR Code Generation** | Client-Side URI SVG / Dynamic Canvas API | 100% Client-Side generation | **$0.00** |
| **Order Dispatch** | WhatsApp Universal Click-to-Chat URI (`wa.me`) | Unlimited messages | **$0.00** |
| **Payment Gateway** | Direct UPI QR (GPay / PhonePe / Paytm / BHIM) | 0% merchant commission | **$0.00** |
| **Total Recurring Cost** | | | **$0.00 / mo** |

---

## 4. Specific Functional Requirements

### 4.1 Module 1: Comprehensive Catalog (Veg & Non-Veg)
- **FR-1.1**: The catalog shall feature both Vegetarian and Non-Vegetarian products with discrete category tabs:
  - *All Pickles*
  - *Classic Veg* (Raw Mango, Lemon, Garlic, Gongura, Chhundo, Kolhapuri Thecha, Punjabi Mix, Amla)
  - *Non-Veg Pickles* (Andhra Boneless Chicken, Coastal Malabar Prawn, Hyderabadi Mutton, Konkani King Fish)
  - *Spicy & Regional*
  - *Sweet & Tangy*
- **FR-1.2**: Non-veg pickles shall specify meat quality standards: 100% boneless, air-dried cuts, shelf life under refrigeration, and cold-pressed groundnut/sesame oil media.

### 4.2 Module 2: FSSAI-Compliant Dietary Indicators & Food Pairing Engine
- **FR-2.1**: Every product card shall display an official FSSAI dietary logo:
  - Vegetarian: Green square border with filled green circle.
  - Non-Vegetarian: Brown/Red square border with filled brown/red triangle.
- **FR-2.2**: Each product shall feature curated meal pairings (e.g., *“Pairs with: Hyderabadi Biryani, Steaming Rice with Ghee”*).

### 4.3 Module 3: Weight Variants & Dynamic Pricing
- **FR-3.1**: Support weight toggles: `250g` (Trial), `500g` (Family Favorite), `1kg` (Mega Value).
- **FR-3.2**: Selecting a weight variant shall recalculate the displayed price and update savings indicators instantly without DOM page reload.

### 4.4 Module 4: Client-Side Shopping Cart & LocalStorage
- **FR-4.1**: State shall persist in `localStorage` under `achaari_bliss_cart`.
- **FR-4.2**: The slide-out cart shall compute items subtotal, shipping fee, and grand total.
- **FR-4.3**: A real-time free delivery tracker shall calculate remaining balance needed to reach the free shipping threshold (e.g. ₹500).

### 4.5 Module 5: Automated WhatsApp Manifest & Live Dynamic UPI QR
- **FR-5.1**: Upon checkout, customer details (Name, Phone, Delivery Address, Pincode, Payment Preference) are captured.
- **FR-5.2**: The system formats an itemized ticket and launches WhatsApp via `https://wa.me/{phone}?text={encodedString}`.
- **FR-5.3**: The Order Success view generates a **Live Dynamic UPI QR Code** encoding:
  `upi://pay?pa=achaaribliss@upi&pn=AchaariBliss&am={total}&cu=INR&tn=Order_{orderId}`
  allowing instantaneous scanning via Google Pay, PhonePe, or Paytm with zero transaction fees.

### 4.6 Module 6: "Taste Matchmaker" Interactive Recommendation Quiz
- **FR-6.1**: A 3-step recommendation wizard shall guide users based on:
  1. *Dietary Preference*: Vegetarian vs Non-Vegetarian.
  2. *Heat Tolerance*: Mild/Tangy (1-2) vs Fiery (3-4).
  3. *Staple Pairing*: Rice & Ghee / Biryani vs Parathas / Rotis.
- **FR-6.2**: The engine filters matched products and provides 1-click Add to Cart capabilities.

### 4.7 Module 7: Core Web Vitals Telemetry Monitor
- **FR-7.1**: Real-time integration with `PerformanceObserver` to calculate Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).
- **FR-7.2**: Surface a floating telemetry badge on screen reflecting real-time performance to demonstrate technical rigor.

---

## 5. Non-Functional Requirements (NFR)

### 5.1 Performance & Core Web Vitals
- **LCP (Largest Contentful Paint)**: `< 1.0 second` on 4G network.
- **CLS (Cumulative Layout Shift)**: `< 0.05` across all viewports.
- **Google Lighthouse Score**: `> 95` across Performance, Accessibility, Best Practices, and SEO.

### 5.2 Offline Availability & PWA
- The Service Worker shall cache core assets using a *Stale-While-Revalidate* strategy.
- Users can view products, filter categories, and adjust their cart while offline.

### 5.3 Security & Zero-Liability Compliance
- Zero collection or storage of credit card numbers, avoiding PCI-DSS audit overheads.
- Automated HTTPS enforced via edge TLS 1.3 certificates.

---

## 6. Resume Engineering Spotlight & Portfolio Presentation

### 6.1 Architectural Trade-offs & Decisions
1. **Why No Node/Express Server?**
   - Eliminates cold starts, server crashes, database patching, and $15–$30/mo server bills.
2. **Why WhatsApp + Dynamic UPI instead of Stripe/Razorpay?**
   - Razorpay/Stripe charges 2%–3% + GST per transaction. For cottage food makers with 15% margins, this represents 20% of net profits. Direct UPI offers 0% fees.
3. **Why LocalStorage instead of Cloud DB?**
   - Zero-latency cart updates, 100% offline functionality, and complete user privacy.

### 6.2 Pre-Formatted Resume Bullet Points
```text
• Engineered "Achaari Bliss", a zero-operational-cost ($0.00/mo) e-commerce PWA for artisanal food businesses, delivering < 1.0s FCP and 100/100 Lighthouse performance metrics.
• Implemented client-side state hydration engine utilizing HTML5 LocalStorage with zero database runtime costs, surviving cross-session tab reloads without authentication lag.
• Designed a zero-commission transaction pipeline using RFC-compliant WhatsApp Click-to-Chat deep links and dynamic client-side UPI QR code generator (GPay/PhonePe/Paytm), eliminating 2.5-3.5% payment gateway overheads.
• Built an offline-capable Progressive Web App (PWA) with Service Worker caching strategies (Stale-While-Revalidate), Web Share API integration, and real-time Core Web Vitals telemetry monitoring.
```

---

## 7. Verification & Acceptance Criteria Matrix

| Test ID | Module | Standard | Pass / Fail Standard |
|---|---|---|---|
| **TC-01** | Non-Veg Catalog | Filter verification | Selecting "Non-Veg Pickles" shows chicken, prawn, mutton, and fish jars with red FSSAI badges. |
| **TC-02** | FSSAI Badges | Visual inspection | Veg products show green dots; non-veg show red triangles. |
| **TC-03** | PWA Caching | Offline simulation | Disconnecting internet allows full cart browsing via Service Worker cache. |
| **TC-04** | Dynamic UPI QR | QR code validation | Scanning generated QR with Google Pay loads exact grand total and merchant UPI ID. |
| **TC-05** | Taste Quiz | Match calculation | Selecting Non-Veg + Fiery recommends Andhra Chicken and Malabar Prawn pickles. |
| **TC-06** | Telemetry | Web Vitals Observer | Floating pill shows LCP under 1.2s and CLS = 0.00. |

---
*End of SRS Document v2.0.0.*
