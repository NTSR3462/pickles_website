# Achaari Bliss - Data Dictionary & Catalog Schema Specification

**Document Version:** 1.0.0  
**Target Architecture:** Zero-Cost Client-Side E-Commerce Jamstack  
**Standard Compliance:** RFC 8259 (JSON), IEEE 830-1998, ISO 4217 (Currency Codes)

---

## 1. Overview

This document specifies the canonical data structures, schemas, validation constraints, and serialization formats utilized across the **Achaari Bliss** artisanal pickles e-commerce platform. Because the architecture operates without an external SQL or NoSQL database, the client data tier is statically declared, immutably structured, and strictly validated client-side.

---

## 2. Product Entity (`PRODUCTS_DATA[]`)

Each item in the `PRODUCTS_DATA` array represents an artisanal pickle catalog entry.

| Field Name | Type | Required | Constraints | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `string` | **Yes** | Slug format (`^[a-z0-9-]+$`), unique | Unique product identifier and URL slug. |
| `name` | `string` | **Yes** | 5 – 80 chars | Display title of the product. |
| `regionalName` | `string` | No | UTF-8 native script | Native regional script name (e.g. Telugu, Hindi, Malayalam). |
| `category` | `string` | **Yes** | Enum: `classic-veg`, `non-veg`, `regional-heritage`, `sweet-tangy` | Primary culinary category. |
| `isVeg` | `boolean` | **Yes** | `true` or `false` | Green dot (Veg) or Brown/Red dot (Non-Veg) FSSAI classification. |
| `tagline` | `string` | **Yes** | Max 150 chars | Brief sensory taste summary for preview cards. |
| `image` | `string` | **Yes** | Valid HTTPS URL | High-definition product photograph URL. |
| `spiceLevel` | `number` | **Yes** | Integer `1` to `5` | Scoville tier indicator (1 = Mild to 5 = Blazing Fiery). |
| `spiceLabel` | `string` | **Yes** | String with emoji | Visual label (e.g., `"Extra Fiery 🔥"`). |
| `bestseller` | `boolean` | No | Boolean | Highlights product with a "Bestseller" ribbon badge. |
| `rating` | `number` | **Yes** | Float `1.0` to `5.0` | Average customer review score. |
| `reviewsCount` | `number` | **Yes** | Integer >= 0 | Number of verified customer reviews received. |
| `shelfLife` | `string` | **Yes** | String (e.g., `"12 Months"`, `"6 Months"`) | Storage durability under unopened ambient conditions. |
| `seasonalBadge`| `string` | No | String | Seasonal harvest indicator (e.g., `"Sun-Cured Terrace Batch"`). |
| `oilType` | `string` | **Yes** | String | Curing medium (e.g., `"Wood-Churned Cold Pressed Gingelly Oil"`). |
| `pairsWith` | `string[]`| **Yes** | Array of strings (min 1) | Serving suggestions for pairing. |
| `ingredients` | `string[]`| **Yes** | Array of strings (min 3) | Full list of raw artisanal ingredients for allergen transparency. |
| `highlights` | `string[]`| **Yes** | Array of strings (min 2) | USP bullets (e.g., `"No preservatives"`, `"Sun-dried"`). |
| `variants` | `Variant[]`| **Yes** | Array of `Variant` (min 1) | Available weight packages and pricing. |

### 2.1 Product Variant Sub-Entity (`Variant`)

| Field Name | Type | Required | Constraints | Description |
| :--- | :--- | :--- | :--- | :--- |
| `weight` | `string` | **Yes** | Format: `^[0-9]+(g|kg)$` | Packaging jar volume (e.g. `250g`, `500g`, `1kg`). |
| `price` | `number` | **Yes** | Positive Integer in INR (₹) | Active selling price in base currency. |
| `originalPrice` | `number` | No | Positive Integer >= `price` | Strikethrough comparison MSRP to illustrate savings. |
| `label` | `string` | No | String | Commercial packaging description (e.g. `"Trial Jar"`). |
| `popular` | `boolean` | No | Default `false` | Sets default selected size on page load. |

---

## 3. Store Configuration Entity (`STORE_CONFIG`)

Global store constants governing merchant routing, currency conversions, and free delivery thresholds.

| Field Name | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `storeName` | `string` | Alphanumeric | Store brand name displayed in headers and messages. |
| `tagline` | `string` | Max 100 chars | Store mission motto. |
| `whatsappNumber` | `string` | E.164 without `+` (e.g. `919876543210`) | Target merchant WhatsApp line receiving order payloads. |
| `currencySymbol` | `string` | Active symbol (`₹`, `$`, `£`, `€`) | Dynamic UI currency indicator. |
| `activeCurrency` | `string` | ISO 4217 (`INR`, `USD`, `GBP`, `EUR`) | Currently selected diaspora display currency. |
| `currencies` | `object` | Keyed by currency code | Multipliers and symbols for real-time exchange conversion. |
| `freeShippingThreshold` | `number` | Integer (e.g. `500`) | Minimum cart value in INR to unlock free standard shipping. |
| `standardShippingFee` | `number` | Integer (e.g. `50`) | Standard shipping charge applied when subtotal < threshold. |
| `upiId` | `string` | VPA format (`id@bank`) | Virtual Payment Address for dynamic UPI QR generation. |
| `supportEmail` | `string` | RFC 5322 email | Customer grievance and inquiry email address. |

---

## 4. Cart Item Model (`CartItem`)

State representation for items stored in `localStorage` key `achaari_cart_v1`.

```typescript
interface CartItem {
  cartKey: string;     // Composite key: `${productId}_${weight}`
  id: string;          // Product ID matching PRODUCTS_DATA
  name: string;        // Product display name
  weight: string;      // Selected variant jar weight
  price: number;       // Unit price in INR (verified against catalog)
  quantity: number;    // Quantity count (min 1, max 50)
  image: string;       // Thumbnail image URL
  isVeg: boolean;      // FSSAI dietary indicator
}
```

---

## 5. Coupon Rule Specification (`CouponRule`)

Supported promotional discount codes handled by `applyCoupon(code)`:

| Coupon Code | Discount Type | Value | Condition |
| :--- | :--- | :--- | :--- |
| `FIRST10` | Percentage | `10%` | Applicable on any subtotal > 0 |
| `ACHAAR50` | Flat Deduction | `₹50` | Minimum subtotal >= ₹50 |
| `GRANDMA` | Percentage | `15%` | Applicable on any subtotal > 0 |

---

## 6. Dynamic UPI QR URI Specification

Dynamic UPI payment strings comply with National Payments Corporation of India (NPCI) UPI Deep Linking Spec:

```text
upi://pay?pa={STORE_CONFIG.upiId}&pn={STORE_CONFIG.storeName}&am={grandTotal}&cu=INR&tn={orderRef}
```

- `pa`: Payee Virtual Payment Address (VPA)
- `pn`: Payee business display name
- `am`: Exact calculated invoice amount in INR
- `cu`: Currency code (strictly `INR`)
- `tn`: Transaction note containing order reference slug
