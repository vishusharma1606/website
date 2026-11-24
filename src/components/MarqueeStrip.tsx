import React from 'react';

const PRACTICE_ITEMS = [
  'ITR Filing (ITR-1 to ITR-7)',
  'GST Registration & Returns',
  'Private Limited & LLP Incorporation',
  'ROC Annual Compliance (AOC-4 / MGT-7)',
  'Statutory & Tax Audit',
  'Trademark & Logo Protection',
  'Class-3 DSC Procurement',
  'Accounting, TDS & Payroll',
  'Udyam MSME & Firm Registration',
];

export const MarqueeStrip: React.FC = () => {
  const repeated = [...PRACTICE_ITEMS, ...PRACTICE_ITEMS];

  return (
    <div className="marquee-band" aria-label="Core advisory services ticker">
      <div className="marquee-track">
        {repeated.map((item, idx) => (
          <span key={`${item}-${idx}`} className="marquee-item">
            <span className="marquee-dot" aria-hidden="true" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
