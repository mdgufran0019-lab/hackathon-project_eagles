// ============================================================
// STRUCTURED MOCK DATABASE OF GOVERNMENT SCHEMES
// RAG Knowledge Base - Verified, Grounded Data Only
// ============================================================

export interface GovernmentScheme {
  id: string;
  name: string;
  nameHi: string; // Hindi name
  ministry: string;
  category: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  documents: string[];
  applicationProcess: string[];
  website: string;
  helpline: string;
  lastUpdated: string;
  tags: string[];
}

export const schemesDatabase: GovernmentScheme[] = [
  {
    id: "pmay",
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    nameHi: "प्रधानमंत्री आवास योजना",
    ministry: "Ministry of Housing and Urban Affairs",
    category: "Housing",
    description:
      "PMAY aims to provide affordable housing to the urban and rural poor. Under this scheme, financial assistance is provided for construction or enhancement of houses to eligible beneficiaries.",
    eligibility: [
      "Annual household income up to ₹18 lakh (depending on category)",
      "Beneficiary family should not own a pucca house in any part of India",
      "EWS category: Annual income up to ₹3 lakh",
      "LIG category: Annual income between ₹3-6 lakh",
      "MIG-I: Annual income between ₹6-12 lakh",
      "MIG-II: Annual income between ₹12-18 lakh",
    ],
    benefits: [
      "Subsidy of up to ₹2.67 lakh on home loan interest (EWS/LIG)",
      "Subsidy of up to ₹2.35 lakh for MIG-I",
      "Subsidy of up to ₹2.30 lakh for MIG-II",
      "Financial assistance of ₹1.20 lakh for house construction in rural areas",
    ],
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Property documents",
      "Bank account details",
      "Photograph",
      "Caste certificate (if applicable)",
    ],
    applicationProcess: [
      "Visit the official PMAY website or nearest Common Service Centre (CSC)",
      "Fill in the online application form with required details",
      "Upload necessary documents",
      "Submit the application and note the reference number",
      "Application will be verified by the urban local body",
    ],
    website: "https://pmaymis.gov.in",
    helpline: "1800-11-3377",
    lastUpdated: "2024-12-01",
    tags: ["housing", "subsidy", "home loan", "urban", "rural", "construction"],
  },
  {
    id: "pmjdy",
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    nameHi: "प्रधानमंत्री जन धन योजना",
    ministry: "Ministry of Finance",
    category: "Financial Inclusion",
    description:
      "PMJDY is a national mission for financial inclusion to ensure access to financial services like banking, savings, deposit accounts, remittance, credit, insurance, and pension.",
    eligibility: [
      "Any Indian citizen aged 10 years and above",
      "No minimum balance requirement",
      "Those without any bank account can open an account",
    ],
    benefits: [
      "Zero balance savings account with RuPay debit card",
      "Accidental insurance cover of ₹2 lakh",
      "Life insurance cover of ₹30,000 (for accounts opened before 26 Jan 2015)",
      "Overdraft facility of up to ₹10,000 for eligible accounts",
      "Direct Benefit Transfer (DBT) for government schemes",
    ],
    documents: [
      "Aadhaar Card or any valid ID proof",
      "Passport size photograph",
      "Address proof (if Aadhaar not available)",
    ],
    applicationProcess: [
      "Visit the nearest bank branch or Banking Correspondent",
      "Fill in the account opening form",
      "Submit KYC documents",
      "Account will be opened immediately",
    ],
    website: "https://pmjdy.gov.in",
    helpline: "1800-11-0001",
    lastUpdated: "2024-11-15",
    tags: ["banking", "financial inclusion", "insurance", "savings", "debit card"],
  },
  {
    id: "pmkisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    nameHi: "प्रधानमंत्री किसान सम्मान निधि",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    description:
      "PM-KISAN provides income support of ₹6,000 per year to all landholding farmer families across the country in three equal installments of ₹2,000 each.",
    eligibility: [
      "All landholding farmer families with cultivable land",
      "Both husband and wife cannot claim separately",
      "Institutional landholders are excluded",
      "Former and present holders of constitutional posts are excluded",
      "Serving or retired government employees (excluding MTS/Class IV) are excluded",
      "Income tax payers in previous assessment year are excluded",
    ],
    benefits: [
      "₹6,000 per year in three installments of ₹2,000 each",
      "Direct transfer to bank account via DBT",
      "Installments credited in April-July, August-November, December-March",
    ],
    documents: [
      "Aadhaar Card",
      "Land ownership documents",
      "Bank account details",
      "Mobile number linked with Aadhaar",
    ],
    applicationProcess: [
      "Register through the PM-KISAN portal or nearest CSC",
      "Provide Aadhaar number, bank account, and land details",
      "Verification done by state/district level authorities",
      "After verification, installments are credited directly to bank account",
    ],
    website: "https://pmkisan.gov.in",
    helpline: "155261",
    lastUpdated: "2024-12-10",
    tags: ["agriculture", "farmer", "income support", "direct transfer", "kisan"],
  },
  {
    id: "ayushman",
    name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
    nameHi: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
    ministry: "Ministry of Health and Family Welfare",
    category: "Healthcare",
    description:
      "AB-PMJAY provides health insurance coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization to over 12 crore poor and vulnerable families.",
    eligibility: [
      "Families identified based on SECC 2011 database (rural) and occupational criteria (urban)",
      "No restriction on family size, age, or gender",
      "Pre-existing diseases covered from day one",
      "Covers rural families with deprivation criteria (D1 to D7)",
      "Covers urban worker families in identified occupational categories",
    ],
    benefits: [
      "Health insurance cover of ₹5 lakh per family per year",
      "Covers 1,929 procedures across 27 specialties",
      "Cashless and paperless treatment at empaneled hospitals",
      "Coverage includes pre and post hospitalization expenses",
      "No cap on family size - all members covered",
    ],
    documents: [
      "Aadhaar Card",
      "Ration Card / SECC data verification",
      "Any government ID proof",
      "Mobile number",
    ],
    applicationProcess: [
      "Check eligibility on the AB-PMJAY website or mera.pmjay.gov.in",
      "Visit nearest Ayushman Bharat Kendra or CSC",
      "Verify identity using Aadhaar",
      "Get Ayushman card generated",
      "Use the card at any empaneled hospital for cashless treatment",
    ],
    website: "https://pmjay.gov.in",
    helpline: "14555",
    lastUpdated: "2024-12-05",
    tags: ["health", "insurance", "hospital", "treatment", "cashless", "medical"],
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    nameHi: "प्रधानमंत्री सुरक्षा बीमा योजना",
    ministry: "Ministry of Finance",
    category: "Insurance",
    description:
      "PMSBY offers accidental death and disability insurance cover at a very affordable premium of ₹20 per year for people aged 18-70 years with a bank account.",
    eligibility: [
      "Age between 18 to 70 years",
      "Must have a savings bank account",
      "Must give consent for auto-debit of premium",
      "One PMSBY account per person",
    ],
    benefits: [
      "₹2 lakh for accidental death",
      "₹2 lakh for total and irrecoverable disability (both eyes or both hands/feet)",
      "₹1 lakh for partial disability (one eye or one hand/foot)",
      "Annual premium of only ₹20",
    ],
    documents: [
      "Aadhaar Card",
      "Bank account details",
      "Nominee details",
    ],
    applicationProcess: [
      "Apply through your bank (via net banking, mobile app, or branch visit)",
      "Fill in the enrollment form",
      "Give auto-debit consent for annual premium of ₹20",
      "Coverage period: June 1 to May 31 each year",
    ],
    website: "https://jansuraksha.gov.in",
    helpline: "1800-180-1111",
    lastUpdated: "2024-10-20",
    tags: ["insurance", "accident", "death", "disability", "premium"],
  },
  {
    id: "mudra",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    nameHi: "प्रधानमंत्री मुद्रा योजना",
    ministry: "Ministry of Finance",
    category: "Entrepreneurship",
    description:
      "PMMY provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises for income-generating activities. Loans are offered under three categories: Shishu, Kishore, and Tarun.",
    eligibility: [
      "Any Indian citizen with a business plan for non-farm income generating activity",
      "Small/micro enterprises, manufacturers, traders, shopkeepers, vendors",
      "No collateral required for loans up to ₹10 lakh",
      "Shishu: Loans up to ₹50,000",
      "Kishore: Loans from ₹50,001 to ₹5 lakh",
      "Tarun: Loans from ₹5,00,001 to ₹10 lakh",
    ],
    benefits: [
      "Loans without collateral up to ₹10 lakh",
      "Available through banks, NBFCs, and MFIs",
      "MUDRA card for working capital needs",
      "No processing fee for Shishu loans",
      "Women entrepreneurs get priority",
    ],
    documents: [
      "Identity proof (Aadhaar, Voter ID, PAN)",
      "Address proof",
      "Business plan or project report",
      "Passport size photographs",
      "Quotation for machinery/equipment (if applicable)",
      "Category certificate (SC/ST/OBC if applicable)",
    ],
    applicationProcess: [
      "Approach any bank, NBFC, or MFI with your business plan",
      "Fill in the MUDRA loan application form",
      "Submit required documents",
      "Bank will assess the application and sanction the loan",
      "You can also apply through the Udyamimitra portal",
    ],
    website: "https://mudra.org.in",
    helpline: "1800-180-1111",
    lastUpdated: "2024-11-28",
    tags: ["loan", "business", "entrepreneur", "micro enterprise", "self-employment"],
  },
  {
    id: "ujjwala",
    name: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    nameHi: "प्रधानमंत्री उज्ज्वला योजना",
    ministry: "Ministry of Petroleum and Natural Gas",
    category: "Energy",
    description:
      "PMUY provides free LPG connections to women from Below Poverty Line (BPL) households to replace unclean cooking fuels with clean LPG fuel.",
    eligibility: [
      "Women from BPL households",
      "Age of applicant should be 18 years or above",
      "Applicant should not already have an LPG connection in the household",
      "Household should be listed in SECC-2011 data or belong to identified categories",
      "SC/ST households, Pradhan Mantri Awas Yojana beneficiaries, forest dwellers, and tea/ex-tea garden tribes eligible",
    ],
    benefits: [
      "Free LPG connection",
      "Financial support of ₹1,600 per connection",
      "Free first refill and stove provided",
      "EMI facility for purchase of stove and first refill",
    ],
    documents: [
      "Aadhaar Card",
      "BPL ration card / SECC list",
      "Bank account details",
      "Passport size photograph",
    ],
    applicationProcess: [
      "Visit nearest LPG distributor",
      "Fill in the application form (KYC form)",
      "Submit required documents",
      "LPG connection will be issued after verification",
    ],
    website: "https://pmuy.gov.in",
    helpline: "1906",
    lastUpdated: "2024-09-15",
    tags: ["LPG", "cooking gas", "women", "BPL", "clean fuel", "energy"],
  },
  {
    id: "sukanya",
    name: "Sukanya Samriddhi Yojana (SSY)",
    nameHi: "सुकन्या समृद्धि योजना",
    ministry: "Ministry of Finance",
    category: "Savings & Girl Child",
    description:
      "SSY is a government-backed savings scheme for the girl child. It offers attractive interest rates and tax benefits to encourage parents to build a fund for their daughter's future education and marriage.",
    eligibility: [
      "Girl child below 10 years of age at time of account opening",
      "Only biological or legal parents/guardians can open the account",
      "Maximum two accounts for two girl children per family",
      "Third account allowed in case of twins/triplets",
    ],
    benefits: [
      "Current interest rate: 8.2% per annum (subject to quarterly revision)",
      "Tax benefits under Section 80C of Income Tax Act",
      "Interest earned is tax-free",
      "Minimum deposit: ₹250 per year",
      "Maximum deposit: ₹1.5 lakh per year",
      "Account matures after 21 years from opening or marriage of girl after 18",
      "Partial withdrawal of 50% allowed after girl turns 18 for education",
    ],
    documents: [
      "Birth certificate of girl child",
      "ID proof of parent/guardian (Aadhaar, PAN, Voter ID)",
      "Address proof",
      "Passport size photographs of guardian and child",
    ],
    applicationProcess: [
      "Visit nearest post office or authorized bank",
      "Fill in the SSY account opening form",
      "Submit birth certificate and KYC documents",
      "Make the initial deposit (minimum ₹250)",
      "Account passbook will be issued",
    ],
    website: "https://www.india.gov.in/sukanya-samriddhi-yojna",
    helpline: "1800-266-6868",
    lastUpdated: "2024-12-01",
    tags: ["girl child", "savings", "education", "marriage", "tax benefit", "investment"],
  },
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    nameHi: "प्रधानमंत्री फसल बीमा योजना",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    description:
      "PMFBY provides comprehensive insurance coverage against crop failure due to natural calamities, pests, and diseases, ensuring financial support to farmers.",
    eligibility: [
      "All farmers including sharecroppers and tenant farmers growing notified crops",
      "Both loanee and non-loanee farmers can avail",
      "Mandatory for loanee farmers (can opt out with written declaration)",
      "Voluntary for non-loanee farmers",
    ],
    benefits: [
      "Premium rate: 2% for Kharif, 1.5% for Rabi, 5% for commercial/horticulture crops",
      "Remaining premium paid by Central and State Government",
      "Coverage against natural calamities, pests, and diseases",
      "Post-harvest losses covered for up to 14 days",
      "Localized calamity claims within 72 hours",
    ],
    documents: [
      "Aadhaar Card",
      "Land records / tenancy agreement",
      "Bank account details",
      "Sowing certificate from agriculture officer",
    ],
    applicationProcess: [
      "Apply through bank, CSC, or PMFBY portal before cut-off date",
      "Submit crop sowing details and land records",
      "Pay the farmer's share of premium",
      "In case of crop loss, intimate within 72 hours through helpline or app",
    ],
    website: "https://pmfby.gov.in",
    helpline: "1800-180-1551",
    lastUpdated: "2024-11-20",
    tags: ["crop insurance", "farmer", "agriculture", "natural calamity", "premium"],
  },
  {
    id: "scholarship",
    name: "National Scholarship Portal (NSP) - Central Sector Scheme",
    nameHi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
    ministry: "Ministry of Education",
    category: "Education",
    description:
      "The National Scholarship Portal provides a one-stop solution for various scholarship schemes offered by Central and State governments for students from economically weaker sections.",
    eligibility: [
      "Students belonging to EWS with family income below ₹8 lakh per annum",
      "Must have secured above 80th percentile in Class 12 examination",
      "For Post-Matric scholarships: Students of SC/ST/OBC/Minority communities",
      "Regular full-time students of recognized institutions",
    ],
    benefits: [
      "₹10,000 per annum for graduation (first three years)",
      "₹20,000 per annum for post-graduation",
      "Additional benefits vary by specific scholarship scheme",
      "Direct transfer to student's bank account",
    ],
    documents: [
      "Aadhaar Card",
      "Income certificate",
      "Mark sheets / certificates",
      "Bank account details",
      "Institution verification certificate",
      "Caste/community certificate (if applicable)",
      "Disability certificate (if applicable)",
    ],
    applicationProcess: [
      "Register on the National Scholarship Portal (scholarships.gov.in)",
      "Login and fill in the scholarship application form",
      "Upload required documents",
      "Get the application verified by the institution",
      "Track application status on the portal",
    ],
    website: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    lastUpdated: "2024-12-08",
    tags: ["scholarship", "education", "student", "financial aid", "SC", "ST", "OBC"],
  },
];

// ============================================================
// RAG RETRIEVAL ENGINE
// ============================================================

export function searchSchemes(query: string): GovernmentScheme[] {
  const normalizedQuery = query.toLowerCase().trim();
  const queryTerms = normalizedQuery.split(/\s+/).filter(t => t.length > 2);

  const scored = schemesDatabase.map((scheme) => {
    let score = 0;
    const searchableText = [
      scheme.name,
      scheme.nameHi,
      scheme.description,
      scheme.category,
      ...scheme.tags,
      ...scheme.eligibility,
      ...scheme.benefits,
    ]
      .join(" ")
      .toLowerCase();

    for (const term of queryTerms) {
      if (searchableText.includes(term)) {
        score += 1;
      }
      // Exact tag match gets bonus
      if (scheme.tags.some((tag) => tag.toLowerCase().includes(term))) {
        score += 2;
      }
      // Category match gets bonus
      if (scheme.category.toLowerCase().includes(term)) {
        score += 3;
      }
      // Name match gets highest bonus
      if (scheme.name.toLowerCase().includes(term)) {
        score += 4;
      }
    }

    return { scheme, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.scheme);
}

// PII Detection - Rule-based validation layer
export function containsPII(text: string): { hasPII: boolean; types: string[] } {
  const piiPatterns: { name: string; pattern: RegExp }[] = [
    { name: "Aadhaar Number", pattern: /\b\d{4}\s?\d{4}\s?\d{4}\b/ },
    { name: "PAN Number", pattern: /\b[A-Z]{5}\d{4}[A-Z]\b/ },
    { name: "Phone Number", pattern: /\b(?:\+91|91|0)?[6-9]\d{9}\b/ },
    { name: "Email Address", pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/ },
    { name: "Bank Account", pattern: /\b\d{9,18}\b/ },
    { name: "Credit Card", pattern: /\b(?:\d{4}[-\s]?){3}\d{4}\b/ },
  ];

  const detectedTypes: string[] = [];
  for (const { name, pattern } of piiPatterns) {
    if (pattern.test(text)) {
      detectedTypes.push(name);
    }
  }

  return { hasPII: detectedTypes.length > 0, types: detectedTypes };
}

// Supported languages for display
export const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "ur", name: "Urdu", nativeName: "اردو" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ" },
];
