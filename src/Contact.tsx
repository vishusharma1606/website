import { useState } from 'react';

function Contact() {
  const mapAddress = encodeURIComponent('14, Meerut Rd, Harbans Nagar, Ghukna, Noida, Ghaziabad, Uttar Pradesh 201001, India');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus('sending');

    try {
      // TODO: replace with your real email before deploying
      const response = await fetch('https://formsubmit.co/ajax/your-email@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          _subject: `New enquiry from ${formData.name || 'website visitor'}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Unable to send enquiry');
      }

      setFormData({ name: '', mobile: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="section contact reveal-on-scroll" id="contact">
      <div className="section-heading contact-heading">
        <p className="eyebrow">Contact us</p>
        <h2>Let's make your next filing, registration, or compliance step simple.</h2>
        <p className="contact-subheading">If you have any questions or suggestions, please feel free to reach out to us.</p>
      </div>

      <div className="contact-form-card reveal-on-scroll">
        <div className="contact-form-intro">
          <p className="eyebrow">Enquiry form</p>
          <h3>Tell us about your requirement</h3>
          <p>Share your details and we'll get back to you with the right guidance.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Mobile
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
          </label>
          {submitStatus === 'success' && (
            <p className="form-status success">Thank you! Your enquiry has been sent to the owner.</p>
          )}
          {submitStatus === 'error' && (
            <p className="form-status error">Sorry, your enquiry could not be sent. Please email your-email@gmail.com directly.</p>
          )}
          <button type="submit" className="btn btn-primary" disabled={submitStatus === 'sending'}>
            {submitStatus === 'sending' ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <div className="contact-card contact-grid reveal-on-scroll">
        <div className="contact-details">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 8375052108</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>your-email@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Office</h3>
            <p>14, Meerut Rd, Harbans Nagar, Ghukna, Noida, Ghaziabad, Uttar Pradesh 201001, India</p>
          </div>
          <div className="contact-item social-item">
            <h3>Follow us</h3>
            <a
              href="https://www.instagram.com/legaltackleadvisor"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Visit Instagram"
            >
              <span aria-hidden="true">IG</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="map-card">
          <iframe
            title="Office Location"
            src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
