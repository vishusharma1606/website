export type ServiceCategory = 'all' | 'tax' | 'incorporation' | 'compliance';

export interface ServiceItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  shortDesc: string;
  turnaround: string;
  badge: string;
  deliverables: string[];
  documents: string[];
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
    title: 'ITR Filing',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'Accurate income tax return filing for individuals, professionals, and businesses with timely support.',
    turnaround: '24 – 48 Hours',
    badge: 'ITR-1 to ITR-7',
    deliverables: [
      'AIS, TIS & Form 26AS reconciliation',
      'Capital gains, salary & business income computation',
      'Tax-saving optimization under Old vs New Regime',
      'E-verification & ITR-V acknowledgement delivery',
    ],
    documents: ['PAN & Aadhaar', 'Form 16 / Salary Slips', 'Bank Statements (FY)', 'Investment & Loan Proofs'],
  },
  {
    id: 'gst',
    title: 'GST Registration & Returns',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'GST enrollment, return filing, reconciliation, and ongoing compliance support.',
    turnaround: '3 – 7 Working Days',
    badge: 'GSTR-1 / 3B / 9',
    deliverables: [
      'New GSTIN application & ARN tracking',
      'Monthly / Quarterly GSTR-1 & GSTR-3B filings',
      'GSTR-2B input tax credit (ITC) reconciliation',
      'Notice reply & GST amendment support',
    ],
    documents: ['PAN & Aadhaar of Proprietor/Partners', 'Business Address Proof & NOC', 'Electricity Bill', 'Bank Cancelled Cheque'],
  },
  {
    id: 'incorporation',
    title: 'Company Incorporation',
    category: 'incorporation',
    categoryLabel: 'Business Setup',
    shortDesc: 'Start-up and corporate entity formation with documentation, approval support, and guidance.',
    turnaround: '7 – 10 Working Days',
    badge: 'Pvt Ltd / OPC / Sec 8',
    deliverables: [
      'Company name reservation (SPICe+ Part A)',
      'DIN & Class-3 DSC for directors',
      'MOA, AOA drafting & ROC submission',
      'Certificate of Incorporation, PAN & TAN',
    ],
    documents: ['Directors PAN & Aadhaar', 'Passport Photos', 'Bank Statement / Utility Bill', 'Registered Office Rent Agreement & NOC'],
  },
  {
    id: 'firm',
    title: 'Firm Registrations',
    category: 'incorporation',
    categoryLabel: 'Business Setup',
    shortDesc: 'Partnership, proprietorship, LLP, and other firm registration services with full legal assistance.',
    turnaround: '3 – 7 Working Days',
    badge: 'LLP / Partnership / MSME',
    deliverables: [
      'Partnership Deed / LLP Agreement drafting',
      'Udyam (MSME) & Shop & Establishment registration',
      'Firm PAN application & current account docs',
      'Registrar of Firms / MCA filing support',
    ],
    documents: ['Partners KYC (PAN, Aadhaar)', 'Business Name & Capital Ratio', 'Office Address Proof', 'Passport Size Photos'],
  },
  {
    id: 'trademark',
    title: 'Trademark / Logo',
    category: 'compliance',
    categoryLabel: 'ROC & Legal IP',
    shortDesc: 'Trademark search, registration and logo protection to safeguard your brand identity.',
    turnaround: '1 – 2 Days (TM Filing)',
    badge: 'Brand & IP Protection',
    deliverables: [
      'Comprehensive public TM search across classes',
      'Form TM-A filing for wordmark or logo',
      'Immediate ™ symbol usage authorization',
      'Examination report & objection reply support',
    ],
    documents: ['Logo Artwork (if device mark)', 'Applicant KYC / COI', 'MSME Certificate (for 50% govt fee rebate)', 'Signed Power of Attorney (TM-48)'],
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'Statutory and internal audit support with clean financial reporting and compliance discipline.',
    turnaround: 'Tailored Schedule',
    badge: 'Statutory & Tax Audit',
    deliverables: [
      'Statutory audit under Companies Act',
      'Tax audit u/s 44AB (Form 3CA/3CB-3CD)',
      'Internal controls & ledger verification',
      'Clean audit reports for banks & stakeholders',
    ],
    documents: ['Trial Balance & Financial Statements', 'Purchase/Sales Registers', 'Bank Statements & Loan Schedules', 'GST & TDS Returns'],
  },
  {
    id: 'accounting',
    title: 'Accounting Services',
    category: 'tax',
    categoryLabel: 'Tax & Audit',
    shortDesc: 'Bookkeeping, financial statements, payroll handling, and business financial advisory.',
    turnaround: 'Monthly / Quarterly',
    badge: 'Books & Payroll',
    deliverables: [
      'Day-to-day Tally / Zoho / Excel bookkeeping',
      'Monthly Profit & Loss & Balance Sheet',
      'TDS deduction, challan & quarterly returns',
      'Vendor reconciliation & cash-flow tracking',
    ],
    documents: ['Sales & Purchase Invoices', 'Bank Statements', 'Expense Vouchers', 'Employee Payroll Sheet'],
  },
  {
    id: 'dsc-roc',
    title: 'DSC & ROC',
    category: 'compliance',
    categoryLabel: 'ROC & Legal IP',
    shortDesc: 'Digital signature procurement and Registrar of Companies filings for smooth corporate compliance.',
    turnaround: 'Same Day (DSC) / Per MCA',
    badge: 'MCA Annual Filings',
    deliverables: [
      'Class-3 Digital Signature Certificate (with USB token)',
      'Annual filings: AOC-4, MGT-7 & DIR-3 KYC',
      'Director appointment/resignation (DIR-12)',
      'Registered office & share capital changes',
    ],
    documents: ['Applicant PAN & Aadhaar', 'Mobile & Email for Video KYC', 'Board Resolution & Financial Statements', 'Company CIN Details'],
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
