import { useEffect, useState, type MouseEvent } from 'react';
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

function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [selectedService, setSelectedService] = useState('');
  const [prefillNote, setPrefillNote] = useState('');

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.history.pushState(null, '', `#${targetId}`);
  };

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    scrollToSection(targetId);
  };

  const handleSelectServiceForEnquiry = (serviceTitle: string, note = '') => {
    setSelectedService(serviceTitle);
    setPrefillNote(note);
    scrollToSection('contact');
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
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
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
  }, []);

  return (
    <div className="app-root" id="top">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <Hero onNavigate={handleNavigate} />
        <MarqueeStrip />
        <MovingWorkflow onNavigate={handleNavigate} />
        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />
        <ComplianceFinder onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />
        <About />
        <Testimonials />
        <Contact selectedService={selectedService} prefillNote={prefillNote} />
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <strong>LegalTackleAdvisor</strong>
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
