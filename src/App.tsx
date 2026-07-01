import { useEffect, type MouseEvent } from 'react';
import Contact from './Contact';
import About from './About';

function App() {
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.history.pushState(null, '', `#${targetId}`);
  };
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell" id="top">
      <header className="topbar reveal-on-scroll">
        <div className="topbar-inner">
          <div className="brand">LegalTackleAdvisor</div>
          <nav className="nav-links">
            <a href="#top" onClick={(event) => handleSectionClick(event, 'top')}>Home</a>
            <a href="#services" onClick={(event) => handleSectionClick(event, 'services')}>Services</a>
            <a href="#about" onClick={(event) => handleSectionClick(event, 'about')}>About</a>
            <a href="#contact" onClick={(event) => handleSectionClick(event, 'contact')}>Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero reveal-on-scroll">
        <div className="hero-copy reveal-on-scroll">
          <p className="eyebrow">Trusted tax & legal advisory</p>
          <h1>Reliable tax and legal support for every stage of your business</h1>
          <p>
            LegalTackleAdvisor delivers dependable assistance for individuals, startups, and growing businesses with accurate filings, timely compliance, and practical legal guidance.
          </p>
          <div className="hero-actions reveal-on-scroll">
            <a href="#contact" className="btn btn-primary" onClick={(event) => handleSectionClick(event, 'contact')}>Book a consultation</a>
            <a href="#services" className="btn btn-secondary" onClick={(event) => handleSectionClick(event, 'services')}>Explore services</a>
          </div>
          <div className="hero-badges reveal-on-scroll">
            <span>GST</span>
            <span>ITR</span>
            <span>Audit</span>
            <span>ROC</span>
            <span>Company formation</span>
            <span>DSC</span>
          </div>
        </div>
        <div className="hero-panel reveal-on-scroll">
          <div className="hero-panel-card">
            <p>GST & Tax</p>
            <h3>Seamless filing, return management and tax support</h3>
          </div>
          <div className="hero-panel-card">
            <p>Registrations & ROC</p>
            <h3>Company incorporation, firm registration, DSC and ROC filings</h3>
          </div>
        </div>
      </section>

      <section className="section help-strip reveal-on-scroll">
        <div className="help-strip-inner">
          <p>Need help with filings, registrations, or compliance?</p>
          <div className="help-strip-actions">
            <span>Fast response • Clear pricing • Legal expertise</span>
            <a href="#contact" className="btn btn-secondary" onClick={(event) => handleSectionClick(event, 'contact')}>Talk to an advisor</a>
          </div>
        </div>
      </section>

      <section className="section quick-access reveal-on-scroll">
        <div className="quick-grid">
          <article className="quick-card reveal-on-scroll">
            <h3>Quick consultation</h3>
            <p>Send your details and we’ll contact you with a clear next step.</p>
            <a href="#contact" className="quick-link" onClick={(event) => handleSectionClick(event, 'contact')}>Contact now</a>
          </article>
          <article className="quick-card reveal-on-scroll">
            <h3>Company incorporation</h3>
            <p>Register your firm quickly with expert support for documents and filings.</p>
            <a href="#services" className="quick-link" onClick={(event) => handleSectionClick(event, 'services')}>Learn more</a>
          </article>
          <article className="quick-card reveal-on-scroll">
            <h3>GST & ITR support</h3>
            <p>Get fast help for GST registration, returns, and income tax filing.</p>
            <a href="#services" className="quick-link" onClick={(event) => handleSectionClick(event, 'services')}>Get started</a>
          </article>
          <article className="quick-card reveal-on-scroll">
            <h3>Compliance reminder</h3>
            <p>Stay ahead of deadlines with ongoing ROC, DSC, and legal compliance support.</p>
            <a href="#contact" className="quick-link" onClick={(event) => handleSectionClick(event, 'contact')}>Request help</a>
          </article>
        </div>
      </section>

      <About />

      <section className="section reveal-on-scroll">
        <div className="section-heading">
          <p className="eyebrow">Why clients trust us</p>
          <h2>Practical legal and tax support that feels clear, calm, and dependable</h2>
        </div>
        <div className="features-grid">
          <article className="feature-card">
            <h3>Fast response</h3>
            <p>We help you move quickly from questions to action with responsive communication and clear next steps.</p>
          </article>
          <article className="feature-card">
            <h3>End-to-end guidance</h3>
            <p>From registration to filing to ongoing compliance, we support the full journey with consistency.</p>
          </article>
          <article className="feature-card">
            <h3>Transparent process</h3>
            <p>You get simple explanations, realistic timelines, and dependable follow-through for every matter.</p>
          </article>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-heading">
          <p className="eyebrow">Our services</p>
          <h2>Practical support for registrations, compliance, filings, and business growth</h2>
          <p className="section-intro">
            From day-to-day compliance to business setup and documentation, we provide clear, dependable support tailored to your goals.
          </p>
        </div>
        <div className="cards-grid">
          <article className="card reveal-on-scroll">
            <h3>ITR Filing</h3>
            <p>Accurate income tax return filing for individuals, professionals, and businesses with timely support.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>GST Registration & Returns</h3>
            <p>GST enrollment, return filing, reconciliation, and ongoing compliance support.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Company Incorporation</h3>
            <p>Start-up and corporate entity formation with documentation, approval support, and guidance.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Firm Registrations</h3>
            <p>Partnership, proprietorship, LLP, and other firm registration services with full legal assistance.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Trademark / Logo</h3>
            <p>Trademark search, registration and logo protection to safeguard your brand identity.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Audit & Assurance</h3>
            <p>Statutory and internal audit support with clean financial reporting and compliance discipline.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>Accounting Services</h3>
            <p>Bookkeeping, financial statements, payroll handling, and business financial advisory.</p>
          </article>
          <article className="card reveal-on-scroll">
            <h3>DSC & ROC</h3>
            <p>Digital signature procurement and Registrar of Companies filings for smooth corporate compliance.</p>
          </article>
        </div>
      </section>

      <Contact />

      <footer className="footer">
        <p>© 2026 LegalTackleAdvisor. We are a private advisory firm helping clients with tax, audit, DSC, ROC and compliance work.</p>
      </footer>

      <a href="tel:+9183750528" className="floating-contact" aria-label="Call LegalTackleAdvisor">
        Call now
      </a>
    </div>
  );
}

export default App;
