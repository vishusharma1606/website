import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const companyIncorporationData: ServiceItem = {
  id: 'incorporation',
  slug: 'company-incorporation',
  title: 'Company Incorporation',
  category: 'incorporation',
  categoryLabel: 'Business Setup',
  shortDesc:
    'Start-up and corporate entity formation with documentation, approval support, and guidance.',
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
      answer:
        'A minimum of 2 directors and 2 shareholders (can be the same individuals) are required. For a solo founder, an OPC needs just 1 director.',
    },
    {
      question: 'Are PAN, TAN, and EPFO/ESIC included?',
      answer:
        'Yes, SPICe+ integrated incorporation automatically allots your Company PAN, TAN, and EPFO/ESIC registrations along with the COI.',
    },
    {
      question: 'What happens after incorporation?',
      answer:
        'We also guide you on bank account opening, first auditor appointment (ADT-1), and INC-20A commencement of business filing.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const CompanyIncorporationPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={companyIncorporationData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
