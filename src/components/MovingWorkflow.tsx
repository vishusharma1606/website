import React, { useEffect, useState, type MouseEvent } from 'react';
import { WORKFLOW_STAGES } from '../data/advisoryData';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  PauseIcon,
  PlayIcon,
} from './Icons';

interface MovingWorkflowProps {
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export const MovingWorkflow: React.FC<MovingWorkflowProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const current = WORKFLOW_STAGES[activeIndex];
  const fillPercent = (activeIndex / (WORKFLOW_STAGES.length - 1)) * 100;

  return (
    <section id="workflow" className="section workflow-section">
      <div className="shell">
        <div className="section-heading-row reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow">Moving Advisory Workflow</p>
            <h2>From First Call to Official Certificate — A Transparent, Guided Flow</h2>
            <p className="section-intro">
              Watch how every filing, incorporation, or audit moves step-by-step through our Advocate &amp; CA pipeline with zero guesswork.
            </p>
          </div>

          <button
            type="button"
            className="workflow-toggle-btn"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? 'Pause workflow animation' : 'Play workflow animation'}
          >
            {isPlaying ? <PauseIcon className="icon-xs" /> : <PlayIcon className="icon-xs" />}
            <span>{isPlaying ? 'Auto-Flow Active' : 'Paused — Click to Play'}</span>
          </button>
        </div>

        {/* Horizontal Moving Track */}
        <div className="workflow-track-wrapper reveal-on-scroll">
          <div className="workflow-rail" aria-hidden="true">
            <div className="workflow-rail-fill" style={{ width: `${fillPercent}%` }} />
            <div
              className={`workflow-rail-pulse ${isPlaying ? 'is-moving' : ''}`}
              style={{ left: `${fillPercent}%` }}
            />
          </div>

          <div className="workflow-nodes" role="tablist" aria-label="Advisory workflow stages">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const status =
                idx < activeIndex ? 'completed' : idx === activeIndex ? 'active' : 'pending';

              return (
                <button
                  key={stage.step}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  className={`workflow-node status-${status}`}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPlaying(false);
                  }}
                >
                  <span className="node-badge">{stage.step}</span>
                  <span className="node-text">
                    <strong>{stage.title}</strong>
                    <small>{stage.subtitle}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detail Card */}
        <div className="reveal-on-scroll">
          <div className="workflow-stage-panel" key={current.step}>
            <div className="stage-panel-main">
              <div className="stage-meta-pills">
                <span className="stage-pill">Stage {current.step}</span>
                <span className="stage-pill stage-pill-gold">{current.duration}</span>
                <span className="stage-pill stage-pill-outline">Handled by: {current.owner}</span>
              </div>

              <h3>{current.title}</h3>
              <p className="stage-description">{current.description}</p>

              <ul className="stage-actions-list">
                {current.actions.map((action) => (
                  <li key={action}>
                    <CheckCircleIcon className="icon-sm stage-check" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stage-panel-side">
              <div className="deliverable-box">
                <span className="deliverable-label">STAGE OUTCOME</span>
                <strong>{current.output}</strong>
                <p>Verified by LegalTackleAdvisor desk before moving to the next milestone.</p>
              </div>

              <div className="stage-controls">
                <div className="stage-step-dots" aria-hidden="true">
                  {WORKFLOW_STAGES.map((s, i) => (
                    <span key={s.step} className={`dot-indicator ${i === activeIndex ? 'active' : ''}`} />
                  ))}
                </div>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={(e) => onNavigate(e, 'contact')}
                >
                  <span>Start Stage 01 Now</span>
                  <ArrowRightIcon className="icon-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
