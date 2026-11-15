/**
 * Achaari Bliss - Product Catalog Data
 * Zero-Cost Architecture: No database required, completely free static data layer.
 * Includes both Traditional Vegetarian and Regional Non-Vegetarian Gourmet Pickles.
 */

const PRODUCTS_DATA = [
  // --- CLASSIC VEGETARIAN PICKLES ---
  {
    id: "avakaya-mango",
    name: "Royal Andhra Avakaya Mango",
    regionalName: "ఆవకాయ మామిడికాయ పచ్చడి",
    category: "classic-veg",
    isVeg: true,
    tagline: "Authentic fiery raw mango pickle cured with mustard powder and garlic cloves.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 4,
    spiceLabel: "Extra Fiery 🔥",
    bestseller: true,
    rating: 4.9,
    reviewsCount: 342,
    shelfLife: "12 Months",
    oilType: "Cold-Pressed Wood Churned Sesame Oil",
    pairsWith: ["Steaming Sona Masoori Rice & Hot Ghee", "Curd Rice", "Dal Tadka"],
    ingredients: [
      "Crisp Raw Mango Cubes",
      "Guntur Red Chilli Powder",
      "Yellow Mustard Seed Powder",
      "Garlic Cloves",
      "Fenugreek Powder",
      "Rock Salt",
      "Pure Cold-Pressed Sesame Oil"
    ],
    highlights: ["Sun-Dried for 7 Days", "Hand-ground Spices", "No Added Vinegar or Preservatives"],
    variants: [
      { weight: "250g", price: 175, originalPrice: 199, label: "Trial Jar" },
      { weight: "500g", price: 320, originalPrice: 380, label: "Family Favorite", popular: true },
      { weight: "1kg", price: 590, originalPrice: 720, label: "Best Value (Save 18%)" }
    ]
  },
  {
    id: "nimbu-khatta-meetha",
    name: "Sun-Cured Khatta-Meetha Lemon",
    regionalName: "खट्टा मीठा नींबू का अचार",
    category: "sweet-tangy",
    isVeg: true,
    tagline: "Slow-aged thin-skinned juicy lemons infused with black salt, ajwain, and organic jaggery.",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 1,
    spiceLabel: "Mild & Tangy 🍋",
    bestseller: true,
    rating: 4.8,
    reviewsCount: 219,
    shelfLife: "24 Months (Ages like fine wine)",
    oilType: "100% Oil-Free Digestive Recipe",
    pairsWith: ["Aloo Parathas", "Ajwain Puri", "Moong Dal Khichdi"],
    ingredients: [
      "Thin-Skinned Kagzi Lemons",
      "Organic Desi Jaggery",
      "Himalayan Rock Salt",
      "Carom Seeds (Ajwain)",
      "Cumin Seeds (Jeera)",
      "Kashmiri Mild Pepper",
      "Black Cardamom"
    ],
    highlights: ["Oil-Free & Gut Friendly", "Aged in Traditional Ceramic Martabans", "Naturally Preserved with Citrus Acid & Jaggery"],
    variants: [
      { weight: "250g", price: 150, originalPrice: 180, label: "Trial Jar" },
      { weight: "500g", price: 280, originalPrice: 340, label: "Family Favorite", popular: true },
      { weight: "1kg", price: 520, originalPrice: 650, label: "Best Value" }
    ]
  },
  {
    id: "spicy-garlic-pickle",
    name: "Grandma's Desi Lahsun (Garlic)",
    regionalName: "मसालेदार लहसुन का अचार",
    category: "classic-veg",
    isVeg: true,
    tagline: "Whole plump garlic pods marinated in cracked mustard, roasted fenugreek, and mustard oil.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 3,
    spiceLabel: "Spicy & Robust 🌶️🌶️🌶️",
    bestseller: false,
    rating: 4.9,
    reviewsCount: 184,
    shelfLife: "9 Months",
    oilType: "Pungent Cold-Pressed Kachi Ghani Mustard Oil",
    pairsWith: ["Bhakri & Thecha", "Stuffed Kulcha", "Jeera Rice"],
    ingredients: [
      "Whole Indian Desi Garlic Cloves",
      "Yellow & Brown Mustard Seeds",
      "Degi Red Chilli",
      "Asafoetida (Hing)",
      "Turmeric",
      "Mustard Oil"
    ],
    highlights: ["Immunity Booster", "Raw Garlic Goodness", "Zero Artificial Flavoring"],
    variants: [
      { weight: "250g", price: 165, originalPrice: 195, label: "Trial Jar" },
      { weight: "500g", price: 310, originalPrice: 370, label: "Family Pack", popular: true },
      { weight: "1kg", price: 580, originalPrice: 700, label: "Mega Pack" }
    ]
  },
  {
    id: "gongura-pickle",
    name: "Authentic Guntur Gongura Pachadi",
    regionalName: "గోంగూర పచ్చడి",
    category: "spicy-regional",
    isVeg: true,
    tagline: "Wild sorrel leaves sautéed with fiery chillies, garlic, and golden roasted spices.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 4,
    spiceLabel: "Extra Fiery 🔥",
    bestseller: true,
    rating: 5.0,
    reviewsCount: 420,
    shelfLife: "6 Months",
    oilType: "Cold-Pressed Sesame (Gingelly) Oil",
    pairsWith: ["Hot Rice & Ghee with Raw Onions", "Dosa & Idli", "Upma"],
    ingredients: [
      "Fresh Red Stem Gongura Leaves",
      "Guntur Dry Red Chillies",
      "Garlic Pods",
      "Coriander Seeds",
      "Mustard & Cumin",
      "Rock Salt",
      "Gingelly Oil"
    ],
    highlights: ["Traditional Andhra Icon", "Rich in Iron & Vitamins", "Pounded on Granite Mortar"],
    variants: [
      { weight: "250g", price: 180, originalPrice: 210, label: "Trial Jar" },
      { weight: "500g", price: 340, originalPrice: 400, label: "Family Favorite", popular: true },
      { weight: "1kg", price: 630, originalPrice: 760, label: "Best Value" }
    ]
  },
  {
    id: "gujarati-mango-chhundo",
    name: "Sun-Melted Mango Chhundo",
    regionalName: "ગુજરાતી કેરીનો છૂંદો",
    category: "sweet-tangy",
    isVeg: true,
    tagline: "Grated green mangoes sun-cooked on terraces with sugar, cumin seeds, and cinnamon warmth.",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 1,
    spiceLabel: "Sweet & Spiced ✨",
    bestseller: false,
    rating: 4.7,
    reviewsCount: 153,
    shelfLife: "18 Months",
    oilType: "100% Oil-Free Sweet Preserve",
    pairsWith: ["Methi Thepla", "Khakhra", "Poha & Mathri"],
    ingredients: [
      "Shredded Rajapuri Green Mango",
      "Pure Cane Sugar",
      "Roasted Cumin Powder",
      "Kashmiri Chili Powder",
      "Ceylon Cinnamon",
      "Rock Salt"
    ],
    highlights: ["15-Day Terrace Sun Cure", "Pairs magically with Thepla & Paratha", "Kids' Absolute Favorite"],
    variants: [
      { weight: "250g", price: 160, originalPrice: 190, label: "Trial Jar" },
      { weight: "500g", price: 295, originalPrice: 350, label: "Family Pack", popular: true },
      { weight: "1kg", price: 540, originalPrice: 660, label: "Mega Pack" }
    ]
  },
  {
    id: "kolhapuri-red-thecha",
    name: "Kolhapuri Crushed Red Thecha",
    regionalName: "कोल्हापुरी लाल मिरचीचा ठेचा",
    category: "spicy-regional",
    isVeg: true,
    tagline: "Coarsely hand-pounded lavangi red chillies with garlic, roasted peanuts, and cumin.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 4,
    spiceLabel: "Extreme Heat 🔥🔥",
    bestseller: false,
    rating: 4.8,
    reviewsCount: 167,
    shelfLife: "4 Months (Fresh Batch Every Week)",
    oilType: "Peanut Oil Tempering",
    pairsWith: ["Jowar Bhakri", "Pithla Bhakri", "Vada Pav"],
    ingredients: [
      "Lavangi Hot Red Chillies",
      "Roasted Desi Peanuts",
      "Pounded Garlic",
      "Cumin Seeds",
      "Lemon Juice",
      "Peanut Oil"
    ],
    highlights: ["Authentic Maharashtrian Dhaba Style", "Hand-crushed on traditional Khalbatta", "Unfiltered Heat"],
    variants: [
      { weight: "250g", price: 155, originalPrice: 185, label: "Trial Jar" },
      { weight: "500g", price: 290, originalPrice: 345, label: "Standard Jar", popular: true },
      { weight: "1kg", price: 540, originalPrice: 670, label: "Bulk Pack" }
    ]
  },
  {
    id: "punjabi-mixed-pickle",
    name: "Punjabi Shahi Mix Barni",
    regionalName: "पंजाबी पचरंगा अचार",
    category: "classic-veg",
    isVeg: true,
    tagline: "Winter farm-fresh crunchy carrots, cauliflower, turnip, lotus stem, and raw mangoes.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 2,
    spiceLabel: "Medium Piquant 🌶️🌶️",
    bestseller: true,
    rating: 4.9,
    reviewsCount: 298,
    shelfLife: "12 Months",
    oilType: "Wood-Pressed Mustard Oil",
    pairsWith: ["Paneer Paratha", "Chole Bhature", "Makki Di Roti & Sarson Saag"],
    ingredients: [
      "Crunchy Winter Carrots",
      "Cauliflower Florets",
      "Lotus Stem (Kamal Kakdi)",
      "Green Chillies",
      "Mango Cubes",
      "Rai Kuria (Mustard Dal)",
      "Pure Mustard Oil"
    ],
    highlights: ["Signature Crunchy Texture", "Whole Spices Blend", "Classic Dhabe Ka Achaar"],
    variants: [
      { weight: "250g", price: 150, originalPrice: 180, label: "Trial Jar" },
      { weight: "500g", price: 275, originalPrice: 330, label: "Family Jar", popular: true },
      { weight: "1kg", price: 499, originalPrice: 620, label: "Best Value" }
    ]
  },
  {
    id: "amla-murabba-pickle",
    name: "Heirloom Spiced Amla (Gooseberry)",
    regionalName: "आंवला का तीखा-चटपटा अचार",
    category: "classic-veg",
    isVeg: true,
    tagline: "Wild forest amla steamed and cured with kalonji (nigella seeds), saunf, and aromatic spices.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 2,
    spiceLabel: "Medium Tangy 🌶️",
    bestseller: false,
    rating: 4.8,
    reviewsCount: 112,
    shelfLife: "9 Months",
    oilType: "Cold-Pressed Mustard Oil",
    pairsWith: ["Kadhi Chawal", "Dal Bati Churma", "Sada Roti"],
    ingredients: [
      "Desi Forest Amla",
      "Kalonji (Nigella Seeds)",
      "Saunf (Fennel)",
      "Fenugreek Seeds",
      "Turmeric & Chilli",
      "Pure Mustard Oil"
    ],
    highlights: ["Vitamin C Powerhouse", "Digestive Ayurvedic Blend", "Zero Preservatives"],
    variants: [
      { weight: "250g", price: 160, originalPrice: 190, label: "Trial Jar" },
      { weight: "500g", price: 299, originalPrice: 360, label: "Family Jar", popular: true },
      { weight: "1kg", price: 550, originalPrice: 680, label: "Mega Pack" }
    ]
  },

  // --- NON-VEGETARIAN GOURMET PICKLES ---
  {
    id: "andhra-chicken-pickle",
    name: "Andhra Spicy Boneless Chicken Pickle",
    regionalName: "ఆంధ్రా చికెన్ పచ్చడి (బోన్‌లెస్)",
    category: "non-veg",
    isVeg: false,
    tagline: "Tender boneless country chicken slow-roasted in ginger-garlic paste and Guntur ground spices.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 4,
    spiceLabel: "Fiery Andhra Heat 🔥🔥",
    bestseller: true,
    rating: 4.95,
    reviewsCount: 512,
    shelfLife: "4 Months (Keep Refrigerated for Peak Crunch)",
    oilType: "Pure Wood-Pressed Groundnut Oil",
    pairsWith: ["Hyderabadi Dum Biryani", "Steaming Rice with Ghee", "Rumali Roti"],
    ingredients: [
      "100% Fresh Farm Boneless Chicken Chunks",
      "Stone-Crushed Ginger & Garlic Paste",
      "Guntur Red Chilli Blend",
      "Roasted Coriander & Cumin Seeds",
      "Cloves, Cinnamon & Star Anise",
      "Cold-Pressed Groundnut Oil",
      "Fresh Lemon Extract & Sea Salt"
    ],
    highlights: ["100% Halal Certified Chicken", "Zero Water Content (Air-Dried Before Frying)", "Handcrafted in Small 5kg Batches"],
    variants: [
      { weight: "250g", price: 280, originalPrice: 320, label: "Trial Jar" },
      { weight: "500g", price: 520, originalPrice: 600, label: "Meat Lovers' Pick", popular: true },
      { weight: "1kg", price: 980, originalPrice: 1150, label: "Mega Feast Jar (Save 15%)" }
    ]
  },
  {
    id: "coastal-prawn-pickle",
    name: "Coastal Malabar Royyala Prawn Pickle",
    regionalName: "రొయ్యల పచ్చడి / ചെമ്മീൻ അച്ചാർ",
    category: "non-veg",
    isVeg: false,
    tagline: "Succulent sea prawns shallow-fried till golden, tossed in curry leaves, garlic, and tangy spices.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 3,
    spiceLabel: "Coastal Zesty & Spicy 🌶️🌶️🌶️",
    bestseller: true,
    rating: 4.9,
    reviewsCount: 388,
    shelfLife: "6 Months",
    oilType: "Wood-Pressed Gingelly (Sesame) Oil",
    pairsWith: ["Kerala Ghee Rice", "Curd Rice", "Malabar Parotta", "Coconut Rice"],
    ingredients: [
      "Deveined Wild-Caught Sea Prawns",
      "Crisp Fresh Curry Leaves",
      "Whole Sliced Garlic Pods",
      "Kashmiri & Bird's Eye Chilli Blend",
      "Cracked Mustard & Fenugreek",
      "Cold-Pressed Sesame Oil",
      "Natural Tamarind Extract"
    ],
    highlights: ["Wild-Caught Sea Prawns Only", "Infused with Fresh Coastal Curry Leaves", "Rich Umami Crust"],
    variants: [
      { weight: "250g", price: 340, originalPrice: 390, label: "Trial Jar" },
      { weight: "500g", price: 640, originalPrice: 740, label: "Seafood Lover Favorite", popular: true },
      { weight: "1kg", price: 1199, originalPrice: 1400, label: "Gourmet Mega Jar" }
    ]
  },
  {
    id: "hyderabadi-mutton-pickle",
    name: "Nizami Boneless Mutton (Gosht) Pickle",
    regionalName: "హైదరాబాదీ మటన్ పచ్చడి / गोश्त का अचार",
    category: "non-veg",
    isVeg: false,
    tagline: "Prime tender lamb cubes slow-simmered in aromatic Hyderabadi Garam Masala and pungent mustard oil.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 3,
    spiceLabel: "Rich & Royal Heat 🌶️🌶️🌶️",
    bestseller: false,
    rating: 4.88,
    reviewsCount: 246,
    shelfLife: "4 Months (Vacuum Sealed)",
    oilType: "Pure Kachi Ghani Mustard Oil",
    pairsWith: ["Jeera Pulao", "Tandoori Naan", "Khichdi & Papad"],
    ingredients: [
      "Select Prime Cut Boneless Mutton Morsels",
      "Royal Shahi Garam Masala (Mace, Nutmeg, Cardamom)",
      "Stone-Ground Ginger-Garlic Paste",
      "Degi Mirch & Turmeric",
      "Mustard Seeds & Asafoetida",
      "Cold-Pressed Mustard Oil",
      "Sea Salt & Sun-Dried Citrus"
    ],
    highlights: ["Melt-in-Mouth Slow Cooked Lamb", "Hand-trimmed Fat-Free Cuts", "Aged in Seasoned Glass Jars"],
    variants: [
      { weight: "250g", price: 390, originalPrice: 450, label: "Tasting Jar" },
      { weight: "500g", price: 740, originalPrice: 850, label: "Royal Feast Jar", popular: true },
      { weight: "1kg", price: 1390, originalPrice: 1650, label: "Connoisseur's Choice" }
    ]
  },
  {
    id: "konkani-fish-pickle",
    name: "Konkani Surmai (King Fish) Pickle",
    regionalName: "सुरमई माशाचे लोणचे / മീൻ അച്ചാർ",
    category: "non-veg",
    isVeg: false,
    tagline: "Firm King Fish steaks cut into bite-sized cubes, marinated in kokum, curry leaves, and spicy pepper.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 3,
    spiceLabel: "Tangy Kokum & Chili 🌶️🌶️🌶️",
    bestseller: false,
    rating: 4.82,
    reviewsCount: 174,
    shelfLife: "5 Months",
    oilType: "Coconut & Sesame Oil Blend",
    pairsWith: ["Boiled Rice & Fish Curry", "Appam & Stew", "Neer Dosa"],
    ingredients: [
      "Fresh Arabian Sea King Fish (Surmai)",
      "Wild Kokum Peel Extract",
      "Crushed Byadgi & Guntur Chillies",
      "Mustard Seeds & Fenugreek",
      "Fresh Green Chillies & Sliced Garlic",
      "Cold-Pressed Sesame Oil",
      "Rock Salt"
    ],
    highlights: ["Zero Bones (Clean Fillets)", "Infused with Wild Konkani Kokum", "Traditional Coastal Fisherman Recipe"],
    variants: [
      { weight: "250g", price: 320, originalPrice: 370, label: "Trial Jar" },
      { weight: "500g", price: 590, originalPrice: 690, label: "Coastal Favorite", popular: true },
      { weight: "1kg", price: 1100, originalPrice: 1320, label: "Mega Jar" }
    ]
  }
];

// Store Configuration
const STORE_CONFIG = {
  storeName: "Achaari Bliss",
  tagline: "Handcrafted Artisanal Veg & Non-Veg Pickles",
  // Seller's WhatsApp Number for completely free zero-commission ordering
  whatsappNumber: "919876543210", 
  currencySymbol: "₹",
  freeShippingThreshold: 500, // Free delivery above ₹500
  standardShippingFee: 50,
  upiId: "achaaribliss@upi", // For instant zero-fee QR payment
  supportEmail: "hello@achaaribliss.com",
  operatingHours: "Mon-Sat: 9:00 AM - 8:00 PM IST",
  location: "Kitchens in Jaipur & Hyderabad, India"
};
