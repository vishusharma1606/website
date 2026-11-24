import type React from 'react';
import type { ServiceItem } from '../../data/advisoryData';
import {
  AccountingServicesPage,
  accountingServicesData,
} from './AccountingServicesPage';
import { AuditAssurancePage, auditAssuranceData } from './AuditAssurancePage';
import {
  CompanyIncorporationPage,
  companyIncorporationData,
} from './CompanyIncorporationPage';
import { DscRocPage, dscRocData } from './DscRocPage';
import {
  FirmRegistrationsPage,
  firmRegistrationsData,
} from './FirmRegistrationsPage';
import {
  GstRegistrationPage,
  gstRegistrationData,
} from './GstRegistrationPage';
import { ItrFilingPage, itrFilingData } from './ItrFilingPage';
import {
  TrademarkLogoPage,
  trademarkLogoData,
} from './TrademarkLogoPage';

export interface ServicePageProps {
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export interface ServicePageEntry {
  data: ServiceItem;
  Component: React.FC<ServicePageProps>;
}

export const SERVICE_PAGES: ServicePageEntry[] = [
  { data: itrFilingData, Component: ItrFilingPage },
  { data: gstRegistrationData, Component: GstRegistrationPage },
  { data: companyIncorporationData, Component: CompanyIncorporationPage },
  { data: firmRegistrationsData, Component: FirmRegistrationsPage },
  { data: trademarkLogoData, Component: TrademarkLogoPage },
  { data: auditAssuranceData, Component: AuditAssurancePage },
  { data: accountingServicesData, Component: AccountingServicesPage },
  { data: dscRocData, Component: DscRocPage },
];

export const SERVICES_LIST: ServiceItem[] = SERVICE_PAGES.map((entry) => entry.data);

export function getServicePageBySlug(slug: string | null): ServicePageEntry | null {
  if (!slug) return null;
  return SERVICE_PAGES.find((entry) => entry.data.slug === slug) ?? null;
}
