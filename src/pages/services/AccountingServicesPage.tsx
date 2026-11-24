import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const accountingServicesData: ServiceItem = {
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
      answer:
        'We work seamlessly with TallyPrime, Zoho Books, Busy, and structured Excel/cloud templates depending on your preference.',
    },
    {
      question: 'Are TDS payments and quarterly TDS returns included?',
      answer:
        'Yes, we can bundle monthly TDS challan calculation and quarterly Form 24Q/26Q filings with your monthly bookkeeping plan.',
    },
    {
      question: 'Can you clean up backlog accounts from previous months?',
      answer:
        'Yes, we regularly perform catch-up bookkeeping for pending quarters or full financial years before audit or loan applications.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const AccountingServicesPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={accountingServicesData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
