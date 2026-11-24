import React from 'react';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import type { ServiceItem } from '../../data/advisoryData';

export const firmRegistrationsData: ServiceItem = {
  id: 'firm',
  slug: 'firm-registrations',
  title: 'Firm Registrations',
  category: 'incorporation',
  categoryLabel: 'Business Setup',
  shortDesc:
    'Partnership, proprietorship, LLP, and other firm registration services with full legal assistance.',
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
      answer:
        'LLP provides limited liability protection and corporate credibility with MCA registration, while a traditional Partnership is simpler and faster to start. We help you pick the right fit.',
    },
    {
      question: 'Can I open a current bank account with these registrations?',
      answer:
        'Yes. Banks typically ask for two business proofs—such as Udyam MSME + GST or Shop & Establishment / Partnership Deed + PAN—all of which we arrange.',
    },
    {
      question: 'Do you handle Udyam MSME registration separately too?',
      answer: 'Yes, we assist with standalone Udyam MSME registration and updates.',
    },
  ],
};

interface PageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const FirmRegistrationsPage: React.FC<PageProps> = ({
  allServices,
  onNavigateHome,
  onNavigateService,
}) => (
  <ServiceDetailPage
    service={firmRegistrationsData}
    allServices={allServices}
    onNavigateHome={onNavigateHome}
    onNavigateService={onNavigateService}
  />
);
