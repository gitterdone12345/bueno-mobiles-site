export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  priceReduction?: number;
  yearBuilt: number | string;
  sqft: number;
  beds: string;
  baths: number;
  community: string;
  seniorCommunity: boolean;
  features: string[];
  amenities: string[];
  tags: string[];
  photos: string[];
  photoDir: string;
  zillowUrl?: string;
  leaseToOwn?: boolean;
  description: string;
  lotRentNote: string;
}

export const listings: Listing[] = [
  {
    id: "5922-cackler-ln",
    address: "5922 Cackler Ln #83",
    city: "Citrus Heights",
    state: "CA",
    zip: "95621",
    price: 229885,
    priceReduction: 10000,
    yearBuilt: 2025,
    sqft: 1344,
    beds: "2-3",
    baths: 2,
    community: "55+ Senior Community",
    seniorCommunity: true,
    features: [
      "Stainless steel Energy Star appliances",
      "Granite counters in kitchen and both baths",
      "Large kitchen island",
      "Spacious laundry room (side-by-side washer/dryer)",
      "40ft covered carport (2+ vehicles)",
      "Covered sunset-facing front porch",
      "Large lot with shed space",
      "Factory 7-year limited warranty",
    ],
    amenities: ["Clubhouse", "Security gate", "Pool", "Library", "Common grounds"],
    tags: ["New 2025", "Price Reduced", "55+"],
    photos: [
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145627.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145648.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145701.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145714.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145727.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145737.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145749.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145759.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145831.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145845.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145904.jpg",
      "/listings/5922-cackler-ln/Screenshot 2026-02-13 145922.jpg",
    ],
    photoDir: "/listings/5922-cackler-ln",
    zillowUrl:
      "https://www.zillow.com/homedetails/5922-Cackler-Ln-83-Citrus-Heights-CA-95621/449349761_zpid/",
    description:
      "Brand new 2025 double-wide manufactured home in a gated 55+ senior community. This spacious home features granite counters, stainless steel Energy Star appliances, and a large kitchen island. Enjoy the covered sunset-facing front porch and 40ft carport. Backed by a factory 7-year limited warranty.",
    lotRentNote:
      "Monthly lot/space rent paid to community (not included in price). Covers clubhouse, security gate, pool, library access.",
  },
  {
    id: "8357-cedarwood-ln",
    address: "8357 Cedarwood Ln",
    city: "Citrus Heights",
    state: "CA",
    zip: "95610",
    price: 224000,
    priceReduction: 5000,
    yearBuilt: 2025,
    sqft: 1344,
    beds: "2 + den",
    baths: 2,
    community: "Big Oak Mobile Home Park",
    seniorCommunity: true,
    features: [
      "Central island with granite counters",
      "Stainless steel appliances",
      "Vinyl flooring throughout (carpet in one bedroom)",
      "Covered carport",
      "Low-maintenance landscaping",
      "Versatile den (office/hobby room)",
      "Estimated mortgage ~$1,361/mo (not including lot rent)",
    ],
    amenities: [
      "Clubhouse",
      "Pool",
      "Recreation facilities",
      "Walking greenbelts",
      "Near shopping and transit",
    ],
    tags: ["New 2025", "Price Reduced", "55+"],
    photos: [
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 115824.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 115855.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 115909.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 115928.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 115941.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 120001.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 120032.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 120050.jpg",
      "/listings/8357-cedarwood-ln/Screenshot 2026-02-13 120110.jpg",
    ],
    photoDir: "/listings/8357-cedarwood-ln",
    zillowUrl:
      "https://www.zillow.com/homedetails/8357-Cedarwood-Ln-Citrus-Heights-CA-95610/250745073_zpid/",
    description:
      "New 2025 manufactured home in Big Oak Mobile Home Park, a vibrant 55+ community. Features an open floor plan with central island, granite counters, and a versatile den that can serve as an office or hobby room. Walking greenbelts and recreation facilities right at your doorstep.",
    lotRentNote:
      "Monthly lot rent paid to Big Oak Mobile Home Park (not included in price). Confirm current amount with community.",
  },
  {
    id: "140-paulette-way",
    address: "140 Paulette Way",
    city: "Antioch",
    state: "CA",
    zip: "",
    price: 49900,
    yearBuilt: "1967 (renovated)",
    sqft: 1060,
    beds: "2",
    baths: 2,
    community: "Vista Diablo MHP",
    seniorCommunity: true,
    leaseToOwn: true,
    features: [
      "Large master bedroom with walk-in closet",
      "Master bath with walk-in shower",
      "Hall bath with tub/shower combo",
      "Open kitchen with wall oven & counter cooktop",
      "Refrigerator included",
      "Abundant cabinetry with built-in wall hutch",
      "Washer & dryer included",
      "Faux blinds throughout",
      "Modern updated flooring",
      "Semi-furnished",
      "Newly landscaped front & side",
      "Fresh exterior paint",
      "Upgraded fencing",
      "Covered carport with concrete driveway",
      "Enclosed yard/garden area",
      "Clean secure roof",
      "Upgraded plumbing",
    ],
    amenities: [
      "Beautiful clubhouse",
      "Active social calendar",
      "Pool tables & ping pong",
      "Organized events",
    ],
    tags: ["Renovated", "Lease to Own", "55+", "Near BART"],
    photos: [
      "/listings/140-paulette-way/IMG_0002.JPG",
      "/listings/140-paulette-way/IMG_0003.JPG",
      "/listings/140-paulette-way/IMG_0004.JPG",
      "/listings/140-paulette-way/IMG_0005.JPG",
      "/listings/140-paulette-way/IMG_0006.JPG",
      "/listings/140-paulette-way/IMG_0007.JPG",
      "/listings/140-paulette-way/IMG_0008.JPG",
      "/listings/140-paulette-way/IMG_0013.JPG",
      "/listings/140-paulette-way/IMG_0016.JPG",
      "/listings/140-paulette-way/IMG_0017.JPG",
      "/listings/140-paulette-way/IMG_0019.JPG",
      "/listings/140-paulette-way/IMG_0020.JPG",
      "/listings/140-paulette-way/IMG_0021.JPG",
      "/listings/140-paulette-way/IMG_0022.JPG",
      "/listings/140-paulette-way/IMG_0023.JPG",
      "/listings/140-paulette-way/IMG_0025.JPG",
      "/listings/140-paulette-way/IMG_0026.JPG",
      "/listings/140-paulette-way/IMG_0027.JPG",
      "/listings/140-paulette-way/IMG_0032.JPG",
      "/listings/140-paulette-way/IMG_0033.JPG",
      "/listings/140-paulette-way/IMG_0034.JPG",
      "/listings/140-paulette-way/IMG_0036.JPG",
      "/listings/140-paulette-way/IMG_0039.JPG",
    ],
    photoDir: "/listings/140-paulette-way",
    description:
      "Beautifully renovated home in Vista Diablo MHP, a welcoming 55+ community just 5 minutes from BART. This turn-key home was fully updated approximately 7 years ago with modern flooring, fresh paint, upgraded plumbing, and new fencing. Lease-to-own option available — $49,900 OBO.",
    lotRentNote:
      "Monthly lot rent paid to Vista Diablo MHP (not included in price).",
  },
  {
    id: "new-manufactured-home",
    address: "Custom Placement",
    city: "Sacramento Area",
    state: "CA",
    zip: "",
    price: 0,
    yearBuilt: 2025,
    sqft: 0,
    beds: "2-4",
    baths: 2,
    community: "Your Choice of Community or Private Land",
    seniorCommunity: false,
    features: [
      "Brand new factory-built home",
      "Choose your floor plan and finishes",
      "Energy Star appliances included",
      "Modern open layouts available",
      "Single-wide and double-wide options",
      "Factory warranty included",
      "Delivery and setup coordinated",
      "Financing options available",
    ],
    amenities: [],
    tags: ["New Build", "Customizable", "Financing Available"],
    photos: [],
    photoDir: "",
    description:
      "Looking for a brand new manufactured home? We offer new factory-built homes that can be placed in a mobile home community or on your own land anywhere in the Sacramento area. Choose from a variety of floor plans, sizes, and finishes. We handle delivery, setup, and permitting. Contact us to discuss your options and get a personalized quote.",
    lotRentNote:
      "Lot rent varies by community. For private land placement, no lot rent applies.",
  },
];
