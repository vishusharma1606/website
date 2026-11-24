import React from 'react';
import { TEAM_MEMBERS } from './data/advisoryData';
import { CheckCircleIcon, ShieldIcon } from './components/Icons';

const PILLARS = [
  {
    title: 'Fast response & clear next steps',
    desc: 'Move from questions to action quickly with responsive communication and practical advice.',
  },
  {
    title: 'End-to-end execution',
    desc: 'From registration to monthly returns to annual ROC compliance, one cohesive team manages your journey.',
  },
  {
    title: 'Transparent & predictable process',
    desc: 'Simple explanations, realistic timelines, and dependable follow-through for every filing.',
  },
];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="shell">
        <div className="about-layout">
          <div className="about-copy reveal-on-scroll">
            <p className="eyebrow">About LegalTackleAdvisor</p>
            <h2>Professional Advisory With a Calm, Client-First Approach</h2>
            <p className="section-intro">
              LegalTackleAdvisor is a dedicated tax, audit, and legal support firm helping individuals,
              startups, and enterprises handle registrations, statutory filings, and legal documentation
              with precision.
            </p>

            <ul className="about-checklist">
              <li>
                <CheckCircleIcon className="icon-sm stage-check" />
                <span>Reliable support for ITR, GST, and statutory audit compliance</span>
              </li>
              <li>
                <CheckCircleIcon className="icon-sm stage-check" />
                <span>Clear guidance for company incorporation and firm registrations</span>
              </li>
              <li>
                <CheckCircleIcon className="icon-sm stage-check" />
                <span>Professional handling of DSC, ROC filings, and trademark protection</span>
              </li>
              <li>
                <CheckCircleIcon className="icon-sm stage-check" />
                <span>Dedicated Advocate &amp; Chartered Accountant oversight on every matter</span>
              </li>
            </ul>

            <div className="pillars-grid">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="pillar-card">
                  <ShieldIcon className="icon-sm pillar-icon" />
                  <div>
                    <strong>{pillar.title}</strong>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-showcase reveal-on-scroll">
            <div className="team-header">
              <span className="stage-pill stage-pill-gold">LEADERSHIP DESK</span>
              <h3>Meet Our Advisory Team</h3>
              <p>Experienced Advocates and Chartered Accountants guiding your business legally and financially.</p>
            </div>

            <div className="team-cards">
              {TEAM_MEMBERS.map((member) => (
                <article key={member.name} className="executive-card">
                  <div className="exec-avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <div className="exec-body">
                    <div className="exec-title-row">
                      <h4>{member.name}</h4>
                      <span className="exec-role-pill">{member.role}</span>
                    </div>
                    <p>{member.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
