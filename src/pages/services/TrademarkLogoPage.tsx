import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const trademarkLogoData: ServiceItem = {
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
      answer:
        'You can use the ™ symbol immediately once your Form TM-A application is filed and receipt number is generated (usually within 1–2 working days).',
    },
    {
      question: 'Do startups and MSMEs get a government fee discount?',
      answer:
        'Yes! Individuals, startups, and MSME Udyam-registered businesses pay 50% lower official government fees compared to large enterprises.',
    },
    {
      question: 'What if the Trademark Registry raises an objection?',
      answer:
        'Our Advocates draft detailed legal replies to Section 9/11 examination objections and represent your matter at hearings if required.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const TrademarkLogoPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={trademarkLogoData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
