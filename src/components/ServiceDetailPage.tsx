import React, { useEffect, useState } from 'react';
import type { ServiceItem } from '../data/advisoryData';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ClockIcon,
  PhoneIcon,
  ShieldIcon,
} from './Icons';

interface ServiceDetailPageProps {
  service: ServiceItem;
  allServices?: ServiceItem[];
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  allServices = [],
  onNavigateHome,
  onNavigateService,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    setActiveStep(0);
    setOpenFaq(0);
    setSubmitStatus('idle');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      message: `I would like assistance with ${service.title}.`,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.id, service.title]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % service.processSteps.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [service.id, service.processSteps.length]);

  const otherServices = allServices.filter((s) => s.id !== service.id);
  const progressPct = (activeStep / Math.max(1, service.processSteps.length - 1)) * 100;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/legaltackleadvisor@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          service: service.title,
          message: formData.message,
          _subject: `Service Page Enquiry (${service.title}) from ${formData.name || 'visitor'}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed');
      }

      setFormData({ name: '', mobile: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="service-page-wrap">
      {/* Service Hero */}
      <section className="service-page-hero">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <button type="button" className="crumb-link" onClick={() => onNavigateHome('top')}>
              Home
            </button>
            <span aria-hidden="true">/</span>
            <button type="button" className="crumb-link" onClick={() => onNavigateHome('services')}>
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span className="crumb-current">{service.title}</span>
          </nav>

          <div className="service-hero-grid">
            <div>
              <div className="modal-badges">
                <span className="stage-pill stage-pill-gold">{service.categoryLabel}</span>
                <span className="stage-pill">{service.badge}</span>
                <span className="stage-pill stage-pill-outline">
                  <ClockIcon className="icon-xs" />
                  <span>{service.turnaround}</span>
                </span>
              </div>

              <h1>{service.heroHeadline}</h1>
              <p className="service-hero-overview">{service.overview}</p>

              <div className="hero-actions">
                <a
                  href="#service-enquiry"
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('service-enquiry')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Start {service.title}</span>
                  <ArrowRightIcon className="icon-sm" />
                </a>
                <a href="tel:+918375052108" className="btn btn-secondary btn-lg">
                  <PhoneIcon className="icon-sm" />
                  <span>Call +91 8375052108</span>
                </a>
              </div>
            </div>

            <aside className="service-who-card">
              <div className="who-card-head">
                <ShieldIcon className="icon-sm who-icon" />
                <strong>Who Should Opt for {service.title}?</strong>
              </div>
              <ul className="who-list">
                {service.whoShouldApply.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon className="icon-sm stage-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Moving Step-by-Step Process for This Service */}
      <section className="section service-process-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">{service.title} Execution Flow</p>
            <h2>Step-by-Step Moving Workflow</h2>
            <p className="section-intro">
              Every {service.title} engagement follows a predictable 4-stage execution track supervised by our CA &amp; Legal desk.
            </p>
          </div>

          <div className="workflow-track-wrapper" style={{ marginTop: '2rem' }}>
            <div className="workflow-rail" aria-hidden="true">
              <div className="workflow-rail-fill" style={{ width: `${progressPct}%` }} />
              <div className="workflow-rail-pulse is-moving" style={{ left: `${progressPct}%` }} />
            </div>

            <div className="workflow-nodes">
              {service.processSteps.map((step, idx) => {
                const status =
                  idx < activeStep ? 'completed' : idx === activeStep ? 'active' : 'pending';
                return (
                  <button
                    key={step.step}
                    type="button"
                    className={`workflow-node status-${status}`}
                    onClick={() => setActiveStep(idx)}
                  >
                    <span className="node-badge">{step.step}</span>
                    <span className="node-text">
                      <strong>{step.title}</strong>
                      <small>{step.detail}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables, Documents & Direct Form */}
      <section className="section service-details-section">
        <div className="shell service-details-grid">
          <div className="service-specs-col">
            <div className="spec-card">
              <p className="eyebrow">Scope Included</p>
              <h3>What We Deliver</h3>
              <ul className="spec-list">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <CheckCircleIcon className="icon-sm stage-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spec-card spec-card-docs">
              <p className="eyebrow">Checklist</p>
              <h3>Documents Required</h3>
              <ul className="spec-list">
                {service.documents.map((doc) => (
                  <li key={doc}>
                    <span className="doc-bullet" aria-hidden="true">&bull;</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spec-card">
              <p className="eyebrow">Common Questions</p>
              <h3>{service.title} FAQs</h3>
              <div className="faq-list">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        type="button"
                        className="faq-question"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                        <span>{faq.question}</span>
                        <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && <p className="faq-answer">{faq.answer}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="contact-form-card service-enquiry-sticky" id="service-enquiry">
            <div className="contact-form-intro">
              <span className="stage-pill stage-pill-gold">DIRECT SERVICE ENQUIRY</span>
              <h3>Get Started With {service.title}</h3>
              <p>Typical turnaround: {service.turnaround}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                />
              </label>

              <label>
                <span>Mobile Number</span>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.mobile}
                  onChange={(e) => setFormData((p) => ({ ...p, mobile: e.target.value }))}
                />
              </label>

              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                />
              </label>

              <label>
                <span>Requirement Details</span>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                />
              </label>

              {submitStatus === 'success' && (
                <p className="form-status success">
                  Thank you! Your {service.title} enquiry has been sent to our advisory team.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="form-status error">
                  Could not send automatically. Please email{' '}
                  <a href="mailto:legaltackleadvisor@gmail.com">legaltackleadvisor@gmail.com</a>.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg full-width"
                disabled={submitStatus === 'sending'}
              >
                <span>{submitStatus === 'sending' ? 'Submitting...' : `Request ${service.title} Callback`}</span>
                <ArrowRightIcon className="icon-sm" />
              </button>
            </form>
          </aside>
        </div>
      </section>

      {/* Switch to Other Services */}
      <section className="section other-services-section">
        <div className="shell">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">Explore All Services</p>
              <h2>Other Tax &amp; Legal Services</h2>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigateHome('services')}
            >
              <ChevronLeftIcon className="icon-sm" />
              <span>Back to Home</span>
            </button>
          </div>

          <div className="other-services-grid">
            {otherServices.map((other) => (
              <button
                key={other.id}
                type="button"
                className="other-service-pill"
                onClick={() => onNavigateService(other.slug)}
              >
                <div>
                  <small>{other.categoryLabel}</small>
                  <strong>{other.title}</strong>
                </div>
                <ArrowRightIcon className="icon-xs" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
