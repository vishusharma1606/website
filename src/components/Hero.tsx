import React, { useEffect, useState, type MouseEvent } from 'react';
import { HERO_TRACKS } from '../data/advisoryData';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, ShieldIcon } from './Icons';

interface HeroProps {
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const currentTrack = HERO_TRACKS[trackIndex];

  useEffect(() => {
    if (isHovering) return;

    const timer = window.setInterval(() => {
      setActiveStep((prev) => {
        if (prev < currentTrack.steps.length - 1) {
          return prev + 1;
        }
        setTrackIndex((t) => (t + 1) % HERO_TRACKS.length);
        return 0;
      });
    }, 1850);

    return () => window.clearInterval(timer);
  }, [currentTrack.steps.length, isHovering]);

  const progressPct = ((activeStep + 1) / currentTrack.steps.length) * 100;

  return (
    <section className="hero-section">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb hero-orb-gold" />
        <div className="hero-orb hero-orb-navy" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="shell hero-grid">
        <div className="hero-copy reveal-on-scroll">
          <div className="eyebrow-pill">
            <span className="pulse-dot" aria-hidden="true" />
            <span>TRUSTED TAX, AUDIT &amp; CORPORATE LEGAL ADVISORY</span>
          </div>

          <h1>
            Precision Tax &amp; Legal Advisory for{' '}
            <span className="text-gradient">Every Stage of Growth</span>
          </h1>

          <p className="hero-lead">
            Legal Tackle Advisor delivers dependable assistance for individuals, startups, and growing
            businesses — combining Chartered Accountants and Senior Advocates for accurate filings,
            seamless company incorporation, and stress-free statutory compliance.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn btn-primary btn-lg"
              onClick={(e) => onNavigate(e, 'contact')}
            >
              <span>Book a Free Consultation</span>
              <ArrowRightIcon className="icon-sm" />
            </a>
            <a
              href="#workflow"
              className="btn btn-secondary btn-lg"
              onClick={(e) => onNavigate(e, 'workflow')}
            >
              <span>See Moving Workflow</span>
            </a>
          </div>

          <div className="hero-trust-row">
            <div className="trust-metric">
              <ShieldIcon className="icon-sm trust-icon" />
              <div>
                <strong>Advocates &amp; CA Desk</strong>
                <span>Verified statutory execution</span>
              </div>
            </div>
            <div className="trust-metric">
              <ClockIcon className="icon-sm trust-icon" />
              <div>
                <strong>24-Hour Turnaround</strong>
                <span>Fast callback &amp; clear pricing</span>
              </div>
            </div>
          </div>
        </div>

        <aside
          className="hero-tracker-card reveal-on-scroll"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          aria-label="Live interactive advisory workflow preview"
        >
          <div className="tracker-header">
            <div>
              <span className="tracker-kicker">LIVE ADVISORY PIPELINE</span>
              <h2>{currentTrack.clientType}</h2>
            </div>
            <span className="tracker-code">{currentTrack.caseCode}</span>
          </div>

          <div className="tracker-tabs" role="tablist" aria-label="Case tracks">
            {HERO_TRACKS.map((track, idx) => (
              <button
                key={track.id}
                type="button"
                role="tab"
                aria-selected={idx === trackIndex}
                className={`tracker-tab ${idx === trackIndex ? 'active' : ''}`}
                onClick={() => {
                  setTrackIndex(idx);
                  setActiveStep(0);
                }}
              >
                {track.label}
              </button>
            ))}
          </div>

          <div className="tracker-progress-wrap">
            <div className="tracker-progress-meta">
              <span>Stage {activeStep + 1} of {currentTrack.steps.length}</span>
              <span>Est. {currentTrack.eta}</span>
            </div>
            <div className="tracker-progress-bar">
              <div className="tracker-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div className="tracker-steps">
            {currentTrack.steps.map((step, idx) => {
              const state =
                idx < activeStep ? 'done' : idx === activeStep ? 'active' : 'upcoming';

              return (
                <button
                  key={step.title}
                  type="button"
                  className={`tracker-step state-${state}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className="step-node">
                    {state === 'done' ? (
                      <CheckCircleIcon className="icon-sm" />
                    ) : (
                      <span>0{idx + 1}</span>
                    )}
                  </span>
                  <span className="step-copy">
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </span>
                  <span className="step-status-pill">
                    {state === 'done' ? 'Done' : state === 'active' ? 'In Progress' : 'Queued'}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
      </div>
    </section>
  );
};
