import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const dscRocData: ServiceItem = {
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
      answer:
        'Once Aadhaar/PAN KYC and quick video verification are completed, a Class-3 DSC is typically approved the same day.',
    },
    {
      question: 'What happens if ROC annual filings or DIR-3 KYC are delayed?',
      answer:
        'Late MCA filings attract Rs. 100 per day additional fee (and Rs. 5,000 flat penalty for late DIR-3 KYC). Our proactive alerts help you avoid penalties completely.',
    },
    {
      question: 'Do you support MCA V3 portal filings for LLPs as well?',
      answer: 'Yes, we handle Form 8, Form 11, and Form 3/4 LLP amendments on the MCA V3 portal.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const DscRocPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={dscRocData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
