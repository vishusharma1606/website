import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const gstRegistrationData: ServiceItem = {
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
      answer:
        'With Aadhaar authentication and clean premise documents, GSTIN is typically approved in 3 to 7 working days.',
    },
    {
      question: 'Do you handle nil GST returns too?',
      answer:
        'Yes. Even with zero sales in a month, filing Nil GSTR-1 and GSTR-3B on time prevents daily late fees—we manage both active and nil filings.',
    },
    {
      question: 'Can you update address or add trade name in existing GST?',
      answer:
        'Yes, we handle core and non-core GST amendments, partner updates, and GST cancellation/revocation applications.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const GstRegistrationPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={gstRegistrationData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
