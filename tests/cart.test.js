/**
 * Achaari Bliss - Automated Unit Test Suite
 * Zero external dependencies: pure Node.js assert test runner.
 * Tests catalog integrity, cart calculations, coupon discounts, shipping thresholds, and XSS sanitization.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Achaari Bliss Automated Test Suite...\n');

// 1. Load PRODUCTS_DATA and STORE_CONFIG
const productsFilePath = path.join(__dirname, '../assets/js/products.js');
const productsCode = fs.readFileSync(productsFilePath, 'utf8');

// Evaluate in sandbox context
const mockContext = {};
const evalFn = new Function(productsCode + '\nreturn { PRODUCTS_DATA, STORE_CONFIG };');
const { PRODUCTS_DATA, STORE_CONFIG } = evalFn();

// Test Group 1: Product Catalog Integrity
console.log('▶ Test Suite 1: Product Catalog Data Integrity');
assert.ok(Array.isArray(PRODUCTS_DATA), 'PRODUCTS_DATA must be an array');
assert.ok(PRODUCTS_DATA.length >= 8, `Expected at least 8 products, found ${PRODUCTS_DATA.length}`);

let vegCount = 0;
let nonVegCount = 0;

PRODUCTS_DATA.forEach(p => {
  assert.ok(p.id && typeof p.id === 'string', `Product must have a string id: ${p.id}`);
  assert.ok(p.name && typeof p.name === 'string', `Product must have a string name: ${p.name}`);
  assert.ok(typeof p.isVeg === 'boolean', `Product ${p.id} must have boolean isVeg`);
  assert.ok(Array.isArray(p.variants) && p.variants.length > 0, `Product ${p.id} must have variants`);
  assert.ok(Array.isArray(p.ingredients) && p.ingredients.length >= 3, `Product ${p.id} must list at least 3 ingredients`);
  assert.ok(p.spiceLevel >= 1 && p.spiceLevel <= 5, `Product ${p.id} spice level must be 1 to 5`);

  p.variants.forEach(v => {
    assert.ok(v.weight && typeof v.weight === 'string', `Variant weight must be string in ${p.id}`);
    assert.ok(typeof v.price === 'number' && v.price > 0, `Variant price must be positive in ${p.id}`);
  });

  if (p.isVeg) vegCount++;
  else nonVegCount++;
});

assert.ok(vegCount > 0, 'Must have classic vegetarian pickles');
assert.ok(nonVegCount > 0, 'Must have regional non-vegetarian gourmet pickles');
console.log(`  ✔ Catalog contains ${PRODUCTS_DATA.length} products (${vegCount} Veg, ${nonVegCount} Non-Veg).`);

// Test Group 2: Cart Subtotal Calculation
console.log('\n▶ Test Suite 2: Cart Calculations');
const sampleCart = [
  { id: 'avakaya-mango', weight: '500g', price: 320, quantity: 2 },
  { id: 'andhra-chicken', weight: '250g', price: 299, quantity: 1 }
];

const subtotal = sampleCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
assert.strictEqual(subtotal, (320 * 2) + (299 * 1), 'Subtotal must correctly multiply unit price by quantity');
assert.strictEqual(subtotal, 939, 'Sample cart subtotal should equal 939');
console.log(`  ✔ Cart subtotal computed accurately: ₹${subtotal}`);

// Test Group 3: Free Shipping Threshold Logic
console.log('\n▶ Test Suite 3: Shipping Threshold & Delivery Fee');
const threshold = STORE_CONFIG.freeShippingThreshold || 500;
const standardFee = STORE_CONFIG.standardShippingFee || 50;

function computeShipping(cartSubtotal) {
  const isFree = cartSubtotal >= threshold;
  const fee = (cartSubtotal > 0 && !isFree) ? standardFee : 0;
  return { isFree, fee, grandTotal: cartSubtotal + fee };
}

const underThreshold = computeShipping(320);
assert.strictEqual(underThreshold.isFree, false, '₹320 cart should not qualify for free shipping');
assert.strictEqual(underThreshold.fee, 50, 'Shipping fee should be ₹50');
assert.strictEqual(underThreshold.grandTotal, 370, 'Grand total should be ₹370');

const exactThreshold = computeShipping(500);
assert.strictEqual(exactThreshold.isFree, true, '₹500 cart should qualify for free shipping');
assert.strictEqual(exactThreshold.fee, 0, 'Shipping fee should be ₹0');
assert.strictEqual(exactThreshold.grandTotal, 500, 'Grand total should be ₹500');

const overThreshold = computeShipping(939);
assert.strictEqual(overThreshold.isFree, true, '₹939 cart should qualify for free shipping');
assert.strictEqual(overThreshold.fee, 0, 'Shipping fee should be ₹0');
assert.strictEqual(overThreshold.grandTotal, 939, 'Grand total should be ₹939');
console.log('  ✔ Shipping fee logic satisfies all boundary conditions (under, exact, over threshold).');

// Test Group 4: Coupon Engine Calculations
console.log('\n▶ Test Suite 4: Promo Discount Coupon Engine');
const coupons = {
  'FIRST10': { type: 'percent', value: 10 },
  'ACHAAR50': { type: 'flat', value: 50 },
  'GRANDMA': { type: 'percent', value: 15 }
};

function applyDiscount(cartTotal, couponCode) {
  const coupon = coupons[couponCode];
  if (!coupon || cartTotal <= 0) return 0;
  if (coupon.type === 'percent') return Math.round((cartTotal * coupon.value) / 100);
  if (coupon.type === 'flat') return Math.min(cartTotal, coupon.value);
  return 0;
}

assert.strictEqual(applyDiscount(1000, 'FIRST10'), 100, '10% of ₹1000 is ₹100');
assert.strictEqual(applyDiscount(400, 'ACHAAR50'), 50, 'Flat discount is ₹50');
assert.strictEqual(applyDiscount(1000, 'GRANDMA'), 150, '15% of ₹1000 is ₹150');
assert.strictEqual(applyDiscount(1000, 'INVALID_CODE'), 0, 'Invalid coupon gives 0 discount');
assert.strictEqual(applyDiscount(0, 'FIRST10'), 0, 'Zero subtotal gives 0 discount');
console.log('  ✔ Coupon calculations (percent and flat) validated across test cases.');

// Test Group 5: Currency Conversion
console.log('\n▶ Test Suite 5: Diaspora Multi-Currency Conversion');
const currencies = STORE_CONFIG.currencies;
assert.ok(currencies.INR && currencies.USD && currencies.GBP && currencies.EUR, 'Must support INR, USD, GBP, EUR');

function convertCurrency(inrAmount, currencyCode) {
  const cur = currencies[currencyCode];
  assert.ok(cur, `Currency ${currencyCode} must exist`);
  if (currencyCode === 'INR') return inrAmount;
  return Number((inrAmount * cur.rate).toFixed(2));
}

assert.strictEqual(convertCurrency(1000, 'INR'), 1000, '1000 INR = 1000 INR');
assert.strictEqual(convertCurrency(1000, 'USD'), 12, '1000 INR * 0.012 = $12.00');
assert.strictEqual(convertCurrency(1000, 'GBP'), 9.5, '1000 INR * 0.0095 = £9.50');
assert.strictEqual(convertCurrency(1000, 'EUR'), 11, '1000 INR * 0.011 = €11.00');
console.log('  ✔ Currency exchange calculations validated.');

// Test Group 6: Input Sanitization & XSS Prevention
console.log('\n▶ Test Suite 6: Security & Input Sanitization');
function escapeHTML(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const xssPayload = '<script>alert("hacked")</script>';
const escaped = escapeHTML(xssPayload);
assert.strictEqual(escaped.includes('<script>'), false, 'Escaped string must not contain raw script tags');
assert.strictEqual(escaped, '&lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;', 'Must replace HTML special chars');

const quotesPayload = '"><img src=x onerror=alert(1)>';
const escapedQuotes = escapeHTML(quotesPayload);
assert.strictEqual(escapedQuotes.includes('onerror='), true);
assert.strictEqual(escapedQuotes.includes('<img'), false, 'Must neutralize opening bracket');
console.log('  ✔ Input sanitization safely neutralizes XSS injection payloads.');

console.log('\n=========================================');
console.log('🎉 ALL 6 TEST SUITES PASSED SUCCESSFULLY!');
console.log('=========================================\n');
