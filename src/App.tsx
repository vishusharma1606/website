import { useCallback, useEffect, useState, type MouseEvent } from 'react';
import About from './About';
import Contact from './Contact';
import Testimonials from './Testimonials';
import { ComplianceFinder } from './components/ComplianceFinder';
import { Hero } from './components/Hero';
import { PhoneIcon } from './components/Icons';
import { MarqueeStrip } from './components/MarqueeStrip';
import { MovingWorkflow } from './components/MovingWorkflow';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { SERVICES_LIST, getServicePageBySlug } from './pages/services';

function getServiceSlugFromHash(hash: string): string | null {
  const match = hash.match(/^#\/services\/([^/?#]+)/);
  return match ? match[1] : null;
}

function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [selectedService, setSelectedService] = useState('');
  const [prefillNote, setPrefillNote] = useState('');
  const [serviceSlug, setServiceSlug] = useState<string | null>(() =>
    getServiceSlugFromHash(window.location.hash)
  );
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);

  const activeServiceEntry = getServicePageBySlug(serviceSlug);
  const activeService = activeServiceEntry?.data ?? null;
  const ActiveServicePage = activeServiceEntry?.Component ?? null;

  useEffect(() => {
    const handleHashChange = () => {
      const slug = getServiceSlugFromHash(window.location.hash);
      setServiceSlug(slug);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (activeService) {
      document.title = `${activeService.title} — LegalTackleAdvisor`;
    } else {
      document.title = 'LegalTackleAdvisor — Tax, Audit & Legal Advisory';
    }
  }, [activeService]);

  const scrollToSection = useCallback(
    (targetId: string) => {
      if (activeService) {
        setServiceSlug(null);
        setPendingScrollId(targetId);
        window.history.pushState(null, '', `#${targetId}`);
        return;
      }

      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.pushState(null, '', `#${targetId}`);
    },
    [activeService]
  );

  useEffect(() => {
    if (!activeService && pendingScrollId) {
      const id = pendingScrollId;
      setPendingScrollId(null);
      window.requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [activeService, pendingScrollId]);

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    scrollToSection(targetId);
  };

  const handleOpenServicePage = (slug: string) => {
    window.location.hash = `#/services/${slug}`;
    setServiceSlug(slug);
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string, note = '') => {
    setSelectedService(serviceTitle);
    setPrefillNote(note);
    scrollToSection('contact');
  };

  useEffect(() => {
    if (activeService) return;

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
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeService]);

  useEffect(() => {
    if (activeService) {
      setActiveSection('services');
      return;
    }

    const sectionIds = ['top', 'workflow', 'services', 'finder', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeService]);

  return (
    <div className="app-root" id="top">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {ActiveServicePage ? (
          <ActiveServicePage
            allServices={SERVICES_LIST}
            onNavigateHome={(sectionId = 'top') => scrollToSection(sectionId)}
            onNavigateService={handleOpenServicePage}
          />
        ) : (
          <>
            <Hero onNavigate={handleNavigate} />
            <MarqueeStrip />
            <MovingWorkflow onNavigate={handleNavigate} />
            <ServicesSection
              onOpenServicePage={handleOpenServicePage}
              onSelectServiceForEnquiry={handleSelectServiceForEnquiry}
            />
            <ComplianceFinder onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />
            <About />
            <Testimonials />
            <Contact selectedService={selectedService} prefillNote={prefillNote} />
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="LegalTackleAdvisor crest"
                className="footer-logo"
              />
              <strong>LegalTackleAdvisor</strong>
            </div>
            <p>
              Private advisory firm helping individuals, startups, and businesses with ITR, GST,
              incorporation, audit, DSC, ROC, and legal compliance.
            </p>
          </div>
          <div className="footer-meta">
            <span>&copy; {new Date().getFullYear()} LegalTackleAdvisor. All rights reserved.</span>
            <a
              href="#top"
              className="footer-top-link"
              onClick={(e) => handleNavigate(e, 'top')}
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </footer>

      <a
        href="tel:+918375052108"
        className="floating-contact"
        aria-label="Call LegalTackleAdvisor on +91 8375052108"
      >
        <PhoneIcon className="icon-sm" />
        <span>Call Advisor</span>
      </a>
    </div>
  );
}

export default App;
