import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const auditAssuranceData: ServiceItem = {
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
      answer:
        'Yes. Every registered Private Limited / OPC company must get its accounts audited annually by a practicing Chartered Accountant regardless of turnover.',
    },
    {
      question: 'When is Tax Audit u/s 44AB applicable?',
      answer:
        'Generally when business turnover crosses prescribed limits (Rs. 1 Cr, or Rs. 10 Cr if 95%+ digital transactions) or professional receipts exceed Rs. 50 Lakhs.',
    },
    {
      question: 'Do your audit reports carry UDIN verification?',
      answer:
        'Yes, all audit certificates and reports issued by our CA team are duly registered with ICAI UDIN.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const AuditAssurancePage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={auditAssuranceData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
