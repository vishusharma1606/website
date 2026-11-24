import React, { useEffect, useState, type MouseEvent } from 'react';
import { InstagramIcon, MailIcon, MoonIcon, PhoneIcon, SunIcon } from './Icons';

interface NavbarProps {
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const NAV_ITEMS = [
  { id: 'top', label: 'Home' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'services', label: 'Services' },
  { id: 'finder', label: 'Compliance Tool' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onToggleTheme,
  onNavigate,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(pct);
      setScrolled(scrollTop > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMenuOpen(false);
    onNavigate(event, targetId);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="info-strip">
        <div className="shell info-strip-inner">
          <div className="info-left">
            <a href="mailto:legaltackleadvisor@gmail.com" className="info-chip">
              <MailIcon className="icon-xs" />
              <span>legaltackleadvisor@gmail.com</span>
            </a>
            <span className="sep" aria-hidden="true">|</span>
            <a href="tel:+918375052108" className="info-chip">
              <PhoneIcon className="icon-xs" />
              <span>+91 8375052108</span>
            </a>
          </div>
          <div className="info-right">
            <span className="info-tag">Ghaziabad &bull; Delhi NCR</span>
            <a
              href="https://www.instagram.com/legaltackle?igsh=Z2s4cWRxOTdyeTht"
              target="_blank"
              rel="noreferrer"
              aria-label="LegalTackleAdvisor on Instagram"
              className="social-pill"
            >
              <InstagramIcon className="icon-xs" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="topbar">
        <div className="shell topbar-inner">
          <a
            href="#top"
            className="brand"
            onClick={(e) => handleLinkClick(e, 'top')}
          >
            <span className="brand-mark">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="LegalTackleAdvisor logo"
                className="brand-logo"
              />
            </span>
            <span className="brand-text">
              <strong>Legal Tackle Advisor</strong>
              <small>Tax &bull; Audit &bull; Corporate Legal</small>
            </span>
          </a>

          <div className="nav-right-controls">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Night mode'}
              title={theme === 'dark' ? 'Switch to Day mode' : 'Switch to Night mode'}
            >
              {theme === 'dark' ? (
                <>
                  <SunIcon className="icon-xs" />
                  <span>Day</span>
                </>
              ) : (
                <>
                  <MoonIcon className="icon-xs" />
                  <span>Night</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active-link' : ''}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Book Consultation
            </a>
          </nav>
        </div>

        <div className="scroll-progress-track" aria-hidden="true">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>
    </header>
  );
};
