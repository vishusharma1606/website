import React, { useEffect, useState } from 'react';
import { SERVICES_LIST } from './pages/services';
import { ArrowRightIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from './components/Icons';

interface ContactProps {
  selectedService: string;
  prefillNote: string;
}

function Contact({ selectedService, prefillNote }: ContactProps) {
  const mapAddress = encodeURIComponent(
    'Opp Metro Pillar No. 564, Meerut Road, Ghaziabad, Uttar Pradesh, India'
  );

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: selectedService || 'General Consultation',
    message: prefillNote || '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (selectedService || prefillNote) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService || prev.service,
        message: prefillNote || prev.message,
      }));
    }
  }, [selectedService, prefillNote]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          service: formData.service,
          message: formData.message,
          _subject: `New ${formData.service} enquiry from ${formData.name || 'website visitor'}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send enquiry');
      }

      setFormData({
        name: '',
        mobile: '',
        email: '',
        service: 'General Consultation',
        message: '',
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="shell">
        <div className="section-heading reveal-on-scroll">
          <p className="eyebrow">Contact LegalTackleAdvisor</p>
          <h2>Let&rsquo;s Make Your Next Filing or Registration Simple</h2>
          <p className="section-intro">
            Share your requirement below and our Advocate &amp; CA desk will connect with clear next steps.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-card reveal-on-scroll">
            <div className="contact-form-intro">
              <span className="stage-pill stage-pill-gold">STAGE 01 INTAKE</span>
              <h3>Tell Us About Your Requirement</h3>
              <p>Fast callback within 24 hours &bull; Transparent consultation</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Full Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Mobile Number</span>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Service Needed</span>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="General Consultation">General Consultation</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                <span>Requirement Details</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share brief details about your filing, registration, or compliance query..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              {submitStatus === 'success' && (
                <p className="form-status success">
                  Thank you! Your enquiry has been sent to our advisory team.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="form-status error">
                  Sorry, your enquiry could not be sent right now. Please email{' '}
                  <a href="mailto:legaltackleadvisor@gmail.com">legaltackleadvisor@gmail.com</a> directly.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg full-width"
                disabled={submitStatus === 'sending'}
              >
                <span>{submitStatus === 'sending' ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                <ArrowRightIcon className="icon-sm" />
              </button>
            </form>
          </div>

          <div className="contact-sidebar reveal-on-scroll">
            <div className="contact-details-card">
              <div className="contact-detail-item">
                <span className="detail-icon">
                  <PhoneIcon className="icon-sm" />
                </span>
                <div>
                  <small>Direct Phone</small>
                  <a href="tel:+918375052108">+91 8375052108</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="detail-icon">
                  <MailIcon className="icon-sm" />
                </span>
                <div>
                  <small>Official Email</small>
                  <a href="mailto:legaltackleadvisor@gmail.com">legaltackleadvisor@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="detail-icon">
                  <MapPinIcon className="icon-sm" />
                </span>
                <div>
                  <small>Office Address</small>
                  <p>Opp Metro Pillar No. 564, Meerut Road, Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="detail-icon">
                  <InstagramIcon className="icon-sm" />
                </span>
                <div>
                  <small>Social Updates</small>
                  <a
                    href="https://www.instagram.com/legaltackle?igsh=Z2s4cWRxOTdyeTht"
                    target="_blank"
                    rel="noreferrer"
                    className="social-inline-link"
                  >
                    Follow @legaltackle on Instagram &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="map-card">
              <iframe
                title="LegalTackleAdvisor Office Location"
                src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
