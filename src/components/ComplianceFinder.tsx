import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircleIcon } from './Icons';

interface ComplianceFinderProps {
  onSelectServiceForEnquiry: (serviceTitle: string, prefillNote?: string) => void;
}

type EntityType = 'individual' | 'startup' | 'proprietorship' | 'llp';
type GoalType = 'register' | 'tax' | 'audit' | 'brand';

interface RoadmapResult {
  headline: string;
  recommendedService: string;
  timeline: string;
  checklist: string[];
}

const ENTITIES: { id: EntityType; label: string; sub: string }[] = [
  { id: 'individual', label: 'Individual / Salaried', sub: 'Personal ITR, Freelancers, Capital Gains' },
  { id: 'startup', label: 'Startup / Pvt Ltd', sub: 'Incorporated or launching a company' },
  { id: 'proprietorship', label: 'Proprietorship / Shop', sub: 'SMEs, Traders, Consultants' },
  { id: 'llp', label: 'LLP / Partnership', sub: 'Multi-partner firms & practices' },
];

const GOALS: { id: GoalType; label: string }[] = [
  { id: 'register', label: 'New Registration' },
  { id: 'tax', label: 'ITR & GST Filing' },
  { id: 'audit', label: 'ROC & Audit' },
  { id: 'brand', label: 'Trademark & IP' },
];

function getRoadmap(entity: EntityType, goal: GoalType): RoadmapResult {
  if (goal === 'brand') {
    return {
      headline: 'Brand Name & Logo Protection Roadmap',
      recommendedService: 'Trademark / Logo',
      timeline: '1–2 Days Filing (™ Rights)',
      checklist: [
        'Public trademark search across relevant Nice classes',
        'TM-48 authorization & MSME rebate check (50% lower govt fee)',
        'Form TM-A submission for wordmark or device logo',
        'Ongoing tracking for examination reports & registration certificate',
      ],
    };
  }

  if (goal === 'register') {
    if (entity === 'startup') {
      return {
        headline: 'Private Limited / OPC Incorporation Plan',
        recommendedService: 'Company Incorporation',
        timeline: '7–10 Working Days',
        checklist: [
          'SPICe+ Part A name approval & DIN/Class-3 DSC issuance',
          'MOA, AOA drafting & ROC submission',
          'Certificate of Incorporation, PAN, TAN & EPFO/ESIC allotment',
          'Post-incorporation INC-20A commencement & bank setup support',
        ],
      };
    }
    return {
      headline: 'Firm, LLP & MSME Registration Plan',
      recommendedService: 'Firm Registrations',
      timeline: '3–7 Working Days',
      checklist: [
        'Partnership Deed / LLP Agreement drafting by Advocate',
        'PAN, Udyam MSME & Shop/Establishment registration',
        'GSTIN enrollment if crossing threshold or selling interstate',
        'Bank current-account KYC pack preparation',
      ],
    };
  }

  if (goal === 'audit') {
    if (entity === 'individual' || entity === 'proprietorship') {
      return {
        headline: 'Books Review & Tax Audit Readiness',
        recommendedService: 'Audit & Assurance',
        timeline: 'Scheduled per FY / Turnover',
        checklist: [
          'Ledger & bank statement reconciliation by CA desk',
          'Applicability check u/s 44AB / 44AD presumptive taxation',
          'GST GSTR-2B vs books mismatch resolution',
          'Form 3CB-3CD audit report & timely ITR filing',
        ],
      };
    }
    return {
      headline: 'Annual ROC & Statutory Audit Compliance',
      recommendedService: 'DSC & ROC',
      timeline: 'Annual Statutory Cycle',
      checklist: [
        'Statutory Audit & Financial Statement preparation',
        'AOC-4 (Financials) & MGT-7 / MGT-7A (Annual Return) filing',
        'Director DIR-3 KYC & active Class-3 DSC renewal',
        'Board minutes & statutory register maintenance',
      ],
    };
  }

  // Default: tax
  if (entity === 'individual') {
    return {
      headline: 'Personal Income Tax (ITR) Optimization',
      recommendedService: 'ITR Filing',
      timeline: '24–48 Hours',
      checklist: [
        'AIS, TIS & Form 26AS cross-verification',
        'Old vs New Tax Regime comparison for maximum legal savings',
        'Capital gains, rental & freelance income reporting',
        'E-verification & refund status tracking',
      ],
    };
  }

  return {
    headline: 'Business GST & Tax Compliance Package',
    recommendedService: 'GST Registration & Returns',
    timeline: 'Monthly / Quarterly Cycle',
    checklist: [
      'GSTR-1 & GSTR-3B timely preparation and filing',
      'Input Tax Credit (GSTR-2B) reconciliation to prevent notices',
      'Monthly bookkeeping, TDS challans & quarterly returns',
      'Annual business ITR & GSTR-9 support',
    ],
  };
}

export const ComplianceFinder: React.FC<ComplianceFinderProps> = ({
  onSelectServiceForEnquiry,
}) => {
  const [entity, setEntity] = useState<EntityType>('startup');
  const [goal, setGoal] = useState<GoalType>('register');

  const roadmap = getRoadmap(entity, goal);
  const entityLabel = ENTITIES.find((e) => e.id === entity)?.label ?? '';
  const goalLabel = GOALS.find((g) => g.id === goal)?.label ?? '';

  return (
    <section id="finder" className="section finder-section">
      <div className="shell">
        <div className="finder-box reveal-on-scroll">
          <div className="finder-controls">
            <p className="eyebrow">Interactive Compliance Planner</p>
            <h2>Build Your Custom Compliance Roadmap in 2 Clicks</h2>
            <p className="finder-lead">
              Select your business structure and requirement below to see your exact filing steps and timeline.
            </p>

            <div className="finder-group">
              <span className="finder-label">1. Who are you?</span>
              <div className="finder-entity-grid">
                {ENTITIES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`finder-choice ${entity === item.id ? 'active' : ''}`}
                    onClick={() => setEntity(item.id)}
                  >
                    <strong>{item.label}</strong>
                    <small>{item.sub}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="finder-group">
              <span className="finder-label">2. What do you need help with?</span>
              <div className="finder-goal-row">
                {GOALS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className={`filter-pill ${goal === g.id ? 'active' : ''}`}
                    onClick={() => setGoal(g.id)}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="finder-result" key={`${entity}-${goal}`}>
            <div className="finder-result-head">
              <span className="stage-pill stage-pill-gold">{roadmap.timeline}</span>
              <span className="finder-tag">Recommended: {roadmap.recommendedService}</span>
            </div>

            <h3>{roadmap.headline}</h3>

            <ul className="finder-checklist">
              {roadmap.checklist.map((step) => (
                <li key={step}>
                  <CheckCircleIcon className="icon-sm stage-check" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn-primary btn-lg full-width"
              onClick={() =>
                onSelectServiceForEnquiry(
                  roadmap.recommendedService,
                  `Entity Type: ${entityLabel} | Requirement: ${goalLabel} (${roadmap.headline})`
                )
              }
            >
              <span>Send This Roadmap to an Advisor</span>
              <ArrowRightIcon className="icon-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
