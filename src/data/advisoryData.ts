export type ServiceCategory = 'all' | 'tax' | 'incorporation' | 'compliance';

export interface ServiceProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  shortDesc: string;
  heroHeadline: string;
  overview: string;
  turnaround: string;
  badge: string;
  whoShouldApply: string[];
  processSteps: ServiceProcessStep[];
  deliverables: string[];
  documents: string[];
  faqs: ServiceFaq[];
}

export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  duration: string;
  owner: string;
  description: string;
  actions: string[];
  output: string;
}

export interface HeroCaseTrack {
  id: string;
  label: string;
  caseCode: string;
  clientType: string;
  eta: string;
  steps: {
    title: string;
    detail: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  focus: string;
}

export interface TestimonialItem {
  name: string;
  service: string;
  location: string;
  text: string;
}

export const HERO_TRACKS: HeroCaseTrack[] = [
  {
    id: 'incorporation',
    label: 'Company Setup',
    caseCode: 'LTA-INC-2026',
    clientType: 'Private Limited / LLP',
    eta: '7–10 Working Days',
    steps: [
      { title: 'Name & Structure Check', detail: 'RUN approval & entity selection' },
      { title: 'DSC & DIN Procurement', detail: 'Director KYC & digital signatures' },
      { title: 'MOA, AOA & SPICe+ Filing', detail: 'Drafted & verified by Legal/CA desk' },
      { title: 'COI, PAN & TAN Issued', detail: 'Ready for bank account opening' },
    ],
  },
  {
    id: 'gst-itr',
    label: 'GST & ITR',
    caseCode: 'LTA-TAX-2026',
    clientType: 'Businesses & Individuals',
    eta: '24–72 Hours',
    steps: [
      { title: 'Income & Invoice Intake', detail: 'Bank statements, AIS/26AS & bills' },
      { title: 'CA Reconciliation', detail: 'Input tax credit & deduction review' },
      { title: 'Portal Computation & Sign-off', detail: 'Transparent tax summary shared' },
      { title: 'Acknowledgement Filed', detail: 'ITR-V / ARN receipt delivered' },
    ],
  },
  {
    id: 'roc-audit',
    label: 'ROC & Audit',
    caseCode: 'LTA-COMP-2026',
    clientType: 'Corporate Compliance',
    eta: 'On-Schedule Statutory Filing',
    steps: [
      { title: 'Statutory Calendar Sync', detail: 'AOC-4, MGT-7 & DIR-3 KYC mapped' },
      { title: 'Books & Ledger Audit', detail: 'Voucher, tax & compliance check' },
      { title: 'Board Resolutions & Certification', detail: 'Signed by CS / CA / Advocate' },
      { title: 'MCA SRN Confirmation', detail: 'Zero-penalty compliance archive' },
    ],
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    subtitle: 'Free 15-min advisor call',
    duration: 'Same Day (Within 24h)',
    owner: 'Advocate & CA Desk',
    description:
      'Share your requirement via form, call, or WhatsApp. Our advisor evaluates your tax, registration, or compliance scope and outlines clear pricing and timelines upfront.',
    actions: [
      'Understand business model, turnover, or personal tax profile',
      'Identify applicable registrations (GST, ROC, Trademark, ITR)',
      'Share transparent fee breakdown with zero hidden charges',
    ],
    output: 'Custom Action Plan & Quote',
  },
  {
    step: '02',
    title: 'Smart Document Intake',
    subtitle: 'Guided digital checklist',
    duration: 'Day 1 – Day 2',
    owner: 'Client Onboarding Team',
    description:
      'No confusing paperwork. We send a clean, tailored checklist over email or WhatsApp and verify every PAN, Aadhaar, address proof, or financial statement before filing.',
    actions: [
      'Verify KYC, incorporation, or financial documents',
      'Resolve discrepancies before government portal submission',
      'Prepare DSC / authorization letters if required',
    ],
    output: '100% Verified Document Pack',
  },
  {
    step: '03',
    title: 'Drafting, Audit & Portal Filing',
    subtitle: 'Expert legal & CA execution',
    duration: 'Day 2 – Day 6',
    owner: 'CA Neelam Sharma & Legal Team',
    description:
      'Our Chartered Accountants and Advocates draft deeds, reconcile ledgers, prepare returns, and submit applications on Income Tax, GST, MCA, or IP India portals.',
    actions: [
      'Double-check computations, HSN/SAC codes & legal clauses',
      'Submit official filings with real-time status tracking',
      'Handle departmental queries or clarifications promptly',
    ],
    output: 'Submitted ARN / SRN / Ack',
  },
  {
    step: '04',
    title: 'Approval & Ongoing Alerts',
    subtitle: 'Certificates + deadline protection',
    duration: 'Completion & Ongoing',
    owner: 'Compliance Monitoring Desk',
    description:
      'Receive all approved certificates, filed returns, and organized compliance records—plus proactive reminders before every GST, ITR, DSC, or ROC due date.',
    actions: [
      'Deliver COI, GSTIN, ITR-V, or Trademark filing receipts',
      'Archive compliance records for loans, tenders & audits',
      'Send proactive statutory deadline reminders year-round',
    ],
    output: 'Compliance Peace of Mind',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'itr',
    slug: 'itr-filing',
    title: 'ITR Filing',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'Accurate income tax return filing for individuals, professionals, and businesses with timely support.',
    heroHeadline: 'Error-Free Income Tax Return Filing With CA Review',
    overview:
      'Whether you are a salaried employee, freelancer, trader, or incorporated business, our Chartered Accountants reconcile your AIS, TIS, and Form 26AS before computing your tax liability under both Old and New Regimes.',
    turnaround: '24 – 48 Hours',
    badge: 'ITR-1 to ITR-7',
    whoShouldApply: [
      'Salaried professionals & individuals with Form 16 or multiple incomes',
      'Freelancers, consultants & doctors opting for Section 44ADA',
      'Equity, mutual fund, F&O & property capital gains earners',
      'Proprietorships, partnership firms, LLPs & Private Limited companies',
    ],
    processSteps: [
      { step: '01', title: 'Income & AIS Sync', detail: 'Collect Form 16, bank statements & pull AIS/26AS.' },
      { step: '02', title: 'Regime & Deduction Check', detail: 'Compare Old vs New Regime for legal tax savings.' },
      { step: '03', title: 'Client Computation Sign-Off', detail: 'Share clear summary of tax payable or refund due.' },
      { step: '04', title: 'E-Filing & Verification', detail: 'Submit return on Income Tax portal & complete e-verify.' },
    ],
    deliverables: [
      'AIS, TIS & Form 26AS reconciliation',
      'Capital gains, salary & business income computation',
      'Tax-saving optimization under Old vs New Regime',
      'E-verification & ITR-V acknowledgement delivery',
    ],
    documents: [
      'PAN & Aadhaar Card',
      'Form 16 / Salary Slips & TDS Certificates',
      'All Bank Statements for the Financial Year',
      'Capital Gains / Broker P&L Statements (if applicable)',
      '80C / 80D Investment, Insurance & Home Loan Proofs',
    ],
    faqs: [
      {
        question: 'Which ITR form applies to me?',
        answer: 'Our CA team selects the exact form (ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, or ITR-6) based on your salary, capital gains, business, or entity type.',
      },
      {
        question: 'Can you file revised or belated returns?',
        answer: 'Yes, we handle belated returns, revised returns, and ITR-U updated return filings along with tax challan computation.',
      },
      {
        question: 'How long does filing take after sharing documents?',
        answer: 'Most individual and professional ITR filings are prepared and submitted within 24 to 48 hours of receiving complete documents.',
      },
    ],
  },
  {
    id: 'gst',
    slug: 'gst-registration-returns',
    title: 'GST Registration & Returns',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'GST enrollment, return filing, reconciliation, and ongoing compliance support.',
    heroHeadline: 'Seamless GST Registration, Monthly Returns & ITC Reconciliation',
    overview:
      'From obtaining a new GSTIN without portal rejections to managing monthly/quarterly GSTR-1 and GSTR-3B filings, we keep your business 100% GST compliant and safeguard your Input Tax Credit.',
    turnaround: '3 – 7 Working Days',
    badge: 'GSTR-1 / 3B / 9',
    whoShouldApply: [
      'New businesses crossing threshold limits or selling on Amazon/Flipkart',
      'Interstate goods/service suppliers & B2B vendors needing GSTIN',
      'Active businesses needing timely monthly or QRMP quarterly returns',
      'Firms facing GSTR-2B mismatches, show-cause notices, or amendments',
    ],
    processSteps: [
      { step: '01', title: 'Eligibility & HSN Mapping', detail: 'Determine Regular vs Composition scheme & SAC/HSN codes.' },
      { step: '02', title: 'TRN & Aadhaar Authentication', detail: 'Prepare application with verified premise & bank proofs.' },
      { step: '03', title: 'ARN Tracking & Query Reply', detail: 'Monitor officer review and respond to clarifications.' },
      { step: '04', title: 'GSTIN & Monthly Filing Setup', detail: 'Deliver GST Certificate & set monthly return calendar.' },
    ],
    deliverables: [
      'New GSTIN application & ARN tracking',
      'Monthly / Quarterly GSTR-1 & GSTR-3B filings',
      'GSTR-2B input tax credit (ITC) reconciliation',
      'Notice reply & GST amendment support',
    ],
    documents: [
      'PAN & Aadhaar of Proprietor / Partners / Directors',
      'Passport-size photograph & mobile/email for OTP',
      'Business Address Proof (Rent Agreement + NOC / Ownership)',
      'Latest Electricity Bill of Business Premise',
      'Cancelled Cheque / Bank Passbook Copy',
    ],
    faqs: [
      {
        question: 'How long does new GST registration take?',
        answer: 'With Aadhaar authentication and clean premise documents, GSTIN is typically approved in 3 to 7 working days.',
      },
      {
        question: 'Do you handle nil GST returns too?',
        answer: 'Yes. Even with zero sales in a month, filing Nil GSTR-1 and GSTR-3B on time prevents daily late fees—we manage both active and nil filings.',
      },
      {
        question: 'Can you update address or add trade name in existing GST?',
        answer: 'Yes, we handle core and non-core GST amendments, partner updates, and GST cancellation/revocation applications.',
      },
    ],
  },
  {
    id: 'incorporation',
    slug: 'company-incorporation',
    title: 'Company Incorporation',
    category: 'incorporation',
    categoryLabel: 'Business Setup',
    shortDesc: 'Start-up and corporate entity formation with documentation, approval support, and guidance.',
    heroHeadline: 'Launch Your Private Limited, OPC, or Section 8 Company End-to-End',
    overview:
      'Start your company on a rock-solid legal foundation. Our Advocates and Chartered Accountants manage everything from name reservation and Class-3 DSCs to MOA/AOA drafting and SPICe+ incorporation with MCA.',
    turnaround: '7 – 10 Working Days',
    badge: 'Pvt Ltd / OPC / Sec 8',
    whoShouldApply: [
      'Startups raising angel/VC funding or building scalable tech/products',
      'Solo founders seeking limited liability via One Person Company (OPC)',
      'Growing businesses upgrading from proprietorship to Private Limited',
      'Non-profit initiatives incorporating as a Section 8 Company',
    ],
    processSteps: [
      { step: '01', title: 'Structure & Name Reservation', detail: 'Verify trademark availability & reserve name via SPICe+.' },
      { step: '02', title: 'Director DSC & DIN', detail: 'Complete video KYC and procure Class-3 Digital Signatures.' },
      { step: '03', title: 'MOA, AOA & AGILE-PRO Filing', detail: 'Draft charter docs & file integrated MCA incorporation forms.' },
      { step: '04', title: 'COI, PAN & TAN Delivery', detail: 'Receive Certificate of Incorporation ready for bank opening.' },
    ],
    deliverables: [
      'Company name reservation (SPICe+ Part A)',
      'DIN & Class-3 DSC for directors',
      'MOA, AOA drafting & ROC submission',
      'Certificate of Incorporation, PAN & TAN',
    ],
    documents: [
      'PAN & Aadhaar of all Directors & Shareholders',
      'Passport-size Photographs',
      'Latest Bank Statement / Mobile / Electricity Bill (Director Address)',
      'Registered Office Utility Bill (not older than 2 months)',
      'Rent Agreement & Owner NOC for Registered Office',
    ],
    faqs: [
      {
        question: 'How many directors are required for a Private Limited company?',
        answer: 'A minimum of 2 directors and 2 shareholders (can be the same individuals) are required. For a solo founder, an OPC needs just 1 director.',
      },
      {
        question: 'Are PAN, TAN, and EPFO/ESIC included?',
        answer: 'Yes, SPICe+ integrated incorporation automatically allots your Company PAN, TAN, and EPFO/ESIC registrations along with the COI.',
      },
      {
        question: 'What happens after incorporation?',
        answer: 'We also guide you on bank account opening, first auditor appointment (ADT-1), and INC-20A commencement of business filing.',
      },
    ],
  },
  {
    id: 'firm',
    slug: 'firm-registrations',
    title: 'Firm Registrations',
    category: 'incorporation',
    categoryLabel: 'Business Setup',
    shortDesc: 'Partnership, proprietorship, LLP, and other firm registration services with full legal assistance.',
    heroHeadline: 'Fast LLP, Partnership & Proprietorship Firm Registrations',
    overview:
      'Choose the right legal entity for your trade, agency, or professional practice. We draft legally sound Partnership Deeds and LLP Agreements and secure your Udyam MSME, Shop & Establishment, and firm PAN registrations.',
    turnaround: '3 – 7 Working Days',
    badge: 'LLP / Partnership / MSME',
    whoShouldApply: [
      'Co-founders & family businesses forming a Partnership or LLP',
      'Independent traders & shop owners starting a Proprietorship',
      'MSMEs seeking Udyam certificate for loans, subsidies & tenders',
      'Consultants & service agencies needing formal bank-ready registration',
    ],
    processSteps: [
      { step: '01', title: 'Entity Selection Call', detail: 'Compare Proprietorship, Partnership, and LLP compliance.' },
      { step: '02', title: 'Legal Deed Drafting', detail: 'Advocate drafts Partnership Deed or LLP Agreement clauses.' },
      { step: '03', title: 'Portal & Registrar Filing', detail: 'Apply for LLPIN / ROF / Udyam / Shop Act & Firm PAN.' },
      { step: '04', title: 'Registration Kit Handover', detail: 'Deliver executed deed, certificates & bank KYC pack.' },
    ],
    deliverables: [
      'Partnership Deed / LLP Agreement drafting',
      'Udyam (MSME) & Shop & Establishment registration',
      'Firm PAN application & current account docs',
      'Registrar of Firms / MCA filing support',
    ],
    documents: [
      'PAN & Aadhaar of Proprietor or all Partners',
      'Proposed Firm Name & Profit-Sharing Ratio',
      'Business Address Proof & Utility Bill',
      'Rent Agreement & Landlord NOC (if rented)',
      'Passport Size Photographs of Partners',
    ],
    faqs: [
      {
        question: 'Should I register a Partnership Firm or an LLP?',
        answer: 'LLP provides limited liability protection and corporate credibility with MCA registration, while a traditional Partnership is simpler and faster to start. We help you pick the right fit.',
      },
      {
        question: 'Can I open a current bank account with these registrations?',
        answer: 'Yes. Banks typically ask for two business proofs—such as Udyam MSME + GST or Shop & Establishment / Partnership Deed + PAN—all of which we arrange.',
      },
      {
        question: 'Do you handle Udyam MSME registration separately too?',
        answer: 'Yes, we assist with standalone Udyam MSME registration and updates.',
      },
    ],
  },
  {
    id: 'trademark',
    slug: 'trademark-logo',
    title: 'Trademark / Logo',
    category: 'compliance',
    categoryLabel: 'ROC & Legal IP',
    shortDesc: 'Trademark search, registration and logo protection to safeguard your brand identity.',
    heroHeadline: 'Protect Your Brand Name, Tagline & Logo With Trademark Filing',
    overview:
      'Your brand name and logo are valuable business assets. Our legal team performs thorough IP India public searches, determines the right Nice classes, files Form TM-A, and handles examination replies.',
    turnaround: '1 – 2 Days (TM Filing)',
    badge: 'Brand & IP Protection',
    whoShouldApply: [
      'Startups, D2C brands & e-commerce sellers launching a new brand',
      'Service agencies, restaurants & clinics protecting their logo/name',
      'Businesses enrolling on Amazon Brand Registry',
      'Applicants who received an IP India Examination Report / Objection',
    ],
    processSteps: [
      { step: '01', title: 'Comprehensive TM Search', detail: 'Check conflicting marks across relevant Nice classes.' },
      { step: '02', title: 'Class & User Date Strategy', detail: 'Verify prior-use affidavits & MSME 50% govt fee rebate.' },
      { step: '03', title: 'TM-A Application Filing', detail: 'Submit application & immediately use the ™ symbol.' },
      { step: '04', title: 'Objection & Journal Tracking', detail: 'Handle examination reports through final ® registration.' },
    ],
    deliverables: [
      'Comprehensive public TM search across classes',
      'Form TM-A filing for wordmark or logo',
      'Immediate ™ symbol usage authorization',
      'Examination report & objection reply support',
    ],
    documents: [
      'Applicant PAN, Aadhaar / Certificate of Incorporation',
      'Logo Artwork in JPEG/PNG (if applying for device/logo mark)',
      'Udyam MSME Certificate (for 50% government fee discount)',
      'Signed Power of Attorney (Form TM-48)',
      'User Affidavit & Invoices (if claiming prior usage)',
    ],
    faqs: [
      {
        question: 'When can I start using the ™ symbol?',
        answer: 'You can use the ™ symbol immediately once your Form TM-A application is filed and receipt number is generated (usually within 1–2 working days).',
      },
      {
        question: 'Do startups and MSMEs get a government fee discount?',
        answer: 'Yes! Individuals, startups, and MSME Udyam-registered businesses pay 50% lower official government fees compared to large enterprises.',
      },
      {
        question: 'What if the Trademark Registry raises an objection?',
        answer: 'Our Advocates draft detailed legal replies to Section 9/11 examination objections and represent your matter at hearings if required.',
      },
    ],
  },
  {
    id: 'audit',
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'Statutory and internal audit support with clean financial reporting and compliance discipline.',
    heroHeadline: 'Statutory, Tax & Internal Audits With Rigorous Financial Discipline',
    overview:
      'Ensure accurate financial statements and full statutory compliance. Led by Chartered Accountants, we execute Companies Act statutory audits, Income Tax audits u/s 44AB, and internal control reviews.',
    turnaround: 'Tailored Schedule',
    badge: 'Statutory & Tax Audit',
    whoShouldApply: [
      'Private Limited & OPC companies requiring mandatory Statutory Audit',
      'Businesses & professionals crossing Tax Audit turnover thresholds u/s 44AB',
      'Growing firms seeking internal audits to plug leakages & strengthen controls',
      'Enterprises preparing audited financials for bank loans or tenders',
    ],
    processSteps: [
      { step: '01', title: 'Books & Scope Review', detail: 'Assess trial balance, ledgers, GST & TDS reconciliations.' },
      { step: '02', title: 'Voucher & Compliance Testing', detail: 'Verify invoices, bank trails, fixed assets & statutory dues.' },
      { step: '03', title: 'Draft Audit Observations', detail: 'Discuss adjustments & compliance notes with management.' },
      { step: '04', title: 'Signed Audit Report & UDIN', detail: 'Issue certified Financial Statements & Form 3CA/3CB-3CD.' },
    ],
    deliverables: [
      'Statutory audit under Companies Act',
      'Tax audit u/s 44AB (Form 3CA/3CB-3CD)',
      'Internal controls & ledger verification',
      'Clean audit reports for banks & stakeholders',
    ],
    documents: [
      'Trial Balance, Profit & Loss & Balance Sheet Drafts',
      'Sales, Purchase & Expense Registers / Tally Backup',
      'All Bank Statements & Loan Amortization Schedules',
      'Filed GST Returns (GSTR-1/3B) & TDS Returns (24Q/26Q)',
      'Previous Year Audited Financials & Fixed Asset Register',
    ],
    faqs: [
      {
        question: 'Is Statutory Audit mandatory even if a Pvt Ltd company has zero turnover?',
        answer: 'Yes. Every registered Private Limited / OPC company must get its accounts audited annually by a practicing Chartered Accountant regardless of turnover.',
      },
      {
        question: 'When is Tax Audit u/s 44AB applicable?',
        answer: 'Generally when business turnover crosses prescribed limits (Rs. 1 Cr, or Rs. 10 Cr if 95%+ digital transactions) or professional receipts exceed Rs. 50 Lakhs.',
      },
      {
        question: 'Do your audit reports carry UDIN verification?',
        answer: 'Yes, all audit certificates and reports issued by our CA team are duly registered with ICAI UDIN.',
      },
    ],
  },
  {
    id: 'accounting',
    slug: 'accounting-services',
    title: 'Accounting Services',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'Bookkeeping, financial statements, payroll handling, and business financial advisory.',
    heroHeadline: 'Clean Monthly Bookkeeping, TDS, Payroll & MIS Reporting',
    overview:
      'Focus on growing your business while our accounting desk keeps your books audit-ready every single month. We manage Tally/Zoho bookkeeping, vendor/customer reconciliations, TDS challans, and payroll sheets.',
    turnaround: 'Monthly / Quarterly',
    badge: 'Books & Payroll',
    whoShouldApply: [
      'Startups & SMEs that do not want the overhead of a full-time accountant',
      'Founders needing clean monthly P&L, receivables & cash-flow visibility',
      'Businesses wanting error-free TDS deduction, challans & 26Q/24Q returns',
      'Firms preparing clean books ahead of GST annual returns or year-end audits',
    ],
    processSteps: [
      { step: '01', title: 'Chart of Accounts Setup', detail: 'Configure Tally / Zoho Books & invoice capture workflow.' },
      { step: '02', title: 'Monthly Voucher Entry', detail: 'Record sales, purchases, expenses & bank reconciliations.' },
      { step: '03', title: 'TDS & Statutory Checks', detail: 'Compute monthly TDS liabilities & reconcile GST ledgers.' },
      { step: '04', title: 'Monthly MIS Pack', detail: 'Deliver P&L, Balance Sheet & receivable/payable aging reports.' },
    ],
    deliverables: [
      'Day-to-day Tally / Zoho / Excel bookkeeping',
      'Monthly Profit & Loss & Balance Sheet',
      'TDS deduction, challan & quarterly returns',
      'Vendor reconciliation & cash-flow tracking',
    ],
    documents: [
      'Monthly Sales & Purchase Invoices',
      'Bank & Credit Card Statements',
      'Cash Expense Vouchers & Bills',
      'Employee Salary & Attendance Sheet (for Payroll)',
      'TDS / GST Portal Credentials for Reconciliation',
    ],
    faqs: [
      {
        question: 'Which accounting software do you support?',
        answer: 'We work seamlessly with TallyPrime, Zoho Books, Busy, and structured Excel/cloud templates depending on your preference.',
      },
      {
        question: 'Are TDS payments and quarterly TDS returns included?',
        answer: 'Yes, we can bundle monthly TDS challan calculation and quarterly Form 24Q/26Q filings with your monthly bookkeeping plan.',
      },
      {
        question: 'Can you clean up backlog accounts from previous months?',
        answer: 'Yes, we regularly perform catch-up bookkeeping for pending quarters or full financial years before audit or loan applications.',
      },
    ],
  },
  {
    id: 'dsc-roc',
    slug: 'dsc-roc',
    title: 'DSC & ROC',
    category: 'compliance',
    categoryLabel: 'ROC & Legal IP',
    shortDesc: 'Digital signature procurement and Registrar of Companies filings for smooth corporate compliance.',
    heroHeadline: 'Fast Class-3 DSC Issuance & Zero-Penalty MCA / ROC Compliance',
    overview:
      'Keep your company active and director records compliant on the MCA portal. From same-day Class-3 Digital Signature Certificates to AOC-4, MGT-7, DIR-3 KYC, and share/director changes, we handle all ROC filings accurately.',
    turnaround: 'Same Day (DSC) / Per MCA',
    badge: 'MCA Annual Filings',
    whoShouldApply: [
      'Companies & LLPs needing annual ROC filings (AOC-4, MGT-7, Form 8 & 11)',
      'Directors needing annual DIR-3 KYC before the 30th September deadline',
      'Individuals, tenders & companies requiring Class-3 DSC with USB token',
      'Companies appointing/resigning directors, changing office or increasing capital',
    ],
    processSteps: [
      { step: '01', title: 'MCA Master Data Audit', detail: 'Check company status, pending forms & director KYC dates.' },
      { step: '02', title: 'DSC & Resolution Prep', detail: 'Procure/renew Class-3 DSC & draft Board/AGM resolutions.' },
      { step: '03', title: 'Form Preparation & Certification', detail: 'Prepare AOC-4, MGT-7, DIR-12, or INC-22 with CA/CS sign.' },
      { step: '04', title: 'SRN Filing & Compliance Archive', detail: 'Submit on MCA V3 portal & share paid challan receipts.' },
    ],
    deliverables: [
      'Class-3 Digital Signature Certificate (with USB token)',
      'Annual filings: AOC-4, MGT-7 & DIR-3 KYC',
      'Director appointment/resignation (DIR-12)',
      'Registered office & share capital changes',
    ],
    documents: [
      'Applicant PAN & Aadhaar Card',
      'Active Mobile & Email for Video KYC (for DSC)',
      'Company CIN & Audited Financial Statements',
      'Board Resolution & Notice of AGM / EGM',
      'Previous MCA Filing Challans (if applicable)',
    ],
    faqs: [
      {
        question: 'How fast can I get a Class-3 Digital Signature (DSC)?',
        answer: 'Once Aadhaar/PAN KYC and quick video verification are completed, a Class-3 DSC is typically approved the same day.',
      },
      {
        question: 'What happens if ROC annual filings or DIR-3 KYC are delayed?',
        answer: 'Late MCA filings attract Rs. 100 per day additional fee (and Rs. 5,000 flat penalty for late DIR-3 KYC). Our proactive alerts help you avoid penalties completely.',
      },
      {
        question: 'Do you support MCA V3 portal filings for LLPs as well?',
        answer: 'Yes, we handle Form 8, Form 11, and Form 3/4 LLP amendments on the MCA V3 portal.',
      },
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Adv. Arun Sharma',
    role: 'Senior Advocate',
    initials: 'AS',
    focus: 'Corporate law, statutory disputes, legal drafting & advisory representation',
  },
  {
    name: 'Adv. Vandana Sharma',
    role: 'Advocate & Legal Advisor',
    initials: 'VS',
    focus: 'Entity structuring, trademark protection, agreements & regulatory compliance',
  },
  {
    name: 'CA Neelam Sharma',
    role: 'Chartered Accountant',
    initials: 'NS',
    focus: 'Income tax, GST compliance, statutory audits, ROC filings & financial advisory',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Rohit Verma',
    service: 'Company Incorporation',
    location: 'Ghaziabad',
    text: 'Fast and clear support for our company registration. Everything was handled professionally.',
  },
  {
    name: 'Priya Malhotra',
    service: 'ITR & GST Compliance',
    location: 'Delhi NCR',
    text: 'Reliable ITR and GST filing every year. They explain everything in simple terms.',
  },
  {
    name: 'Sanjay Gupta',
    service: 'ROC & Annual Filings',
    location: 'Noida',
    text: 'Helped us with ROC compliance without any delays. Highly recommended.',
  },
];
