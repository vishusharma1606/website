import React, { useState } from 'react';
import {
  SERVICES,
  type ServiceCategory,
  type ServiceItem,
} from '../data/advisoryData';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon } from './Icons';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

const CATEGORIES: { key: ServiceCategory; label: string }[] = [
  { key: 'all', label: 'All Services (8)' },
  { key: 'tax', label: 'Tax & Audit' },
  { key: 'incorporation', label: 'Business Setup' },
  { key: 'compliance', label: 'ROC & Legal IP' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filtered =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="section services-section">
      <div className="shell">
        <div className="section-heading-row reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow">Practice Areas</p>
            <h2>Comprehensive Tax, Registration &amp; Compliance Solutions</h2>
            <p className="section-intro">
              Click any service to inspect required documents, typical turnaround times, and exact deliverables.
            </p>
          </div>

          <div className="filter-pills" role="group" aria-label="Filter services by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`filter-pill ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid reveal-on-scroll">
          {filtered.map((service) => (
            <article
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-card-top">
                <span className="service-cat-tag">{service.categoryLabel}</span>
                <span className="service-badge-mono">{service.badge}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>

              <div className="service-card-footer">
                <span className="service-eta">
                  <ClockIcon className="icon-xs" />
                  <span>{service.turnaround}</span>
                </span>
                <button
                  type="button"
                  className="service-inspect-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  <span>Checklist</span>
                  <ArrowRightIcon className="icon-xs" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setSelectedService(null)}
        >
          <div className="modal-card modal-card-wide" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              aria-label="Close service checklist"
              onClick={() => setSelectedService(null)}
            >
              &times;
            </button>

            <div className="modal-badges">
              <span className="stage-pill">{selectedService.categoryLabel}</span>
              <span className="stage-pill stage-pill-gold">{selectedService.turnaround}</span>
            </div>

            <h3 id="service-modal-title">{selectedService.title}</h3>
            <p className="modal-desc">{selectedService.shortDesc}</p>

            <div className="modal-columns">
              <div className="modal-col">
                <h4>What We Deliver</h4>
                <ul className="modal-points">
                  {selectedService.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircleIcon className="icon-xs modal-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-col modal-col-muted">
                <h4>Documents Needed</h4>
                <ul className="modal-points">
                  {selectedService.documents.map((doc) => (
                    <li key={doc}>
                      <span className="doc-bullet" aria-hidden="true">&bull;</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForEnquiry(title);
                }}
              >
                <span>Enquire for {selectedService.title}</span>
                <ArrowRightIcon className="icon-sm" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
