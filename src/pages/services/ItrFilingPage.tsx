import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const itrFilingData: ServiceItem = {
  id: 'itr',
  slug: 'itr-filing',
  title: 'ITR Filing',
  category: 'tax',
  categoryLabel: 'Tax & Audit',
  shortDesc:
    'Accurate income tax return filing for individuals, professionals, and businesses with timely support.',
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
      answer:
        'Our CA team selects the exact form (ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, or ITR-6) based on your salary, capital gains, business, or entity type.',
    },
    {
      question: 'Can you file revised or belated returns?',
      answer:
        'Yes, we handle belated returns, revised returns, and ITR-U updated return filings along with tax challan computation.',
    },
    {
      question: 'How long does filing take after sharing documents?',
      answer:
        'Most individual and professional ITR filings are prepared and submitted within 24 to 48 hours of receiving complete documents.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const ItrFilingPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={itrFilingData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
