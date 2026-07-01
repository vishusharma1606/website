import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Business Owner, Tech Startup',
      quote: 'LegalTackleAdvisor made our company registration seamless. Professional, quick, and clear guidance throughout. Highly recommended!',
      initials: 'RK'
    },
    {
      name: 'Priya Sharma',
      title: 'Freelance Consultant',
      quote: 'Filing my ITR was stress-free with their support. They explained everything clearly and got it done on time. Excellent service.',
      initials: 'PS'
    },
    {
      name: 'Amit Patel',
      title: 'Startup Founder',
      quote: 'From GST registration to ROC filings—everything was handled professionally. They saved me so much time and worry.',
      initials: 'AP'
    }
  ];

  return (
    <section className="section testimonials reveal-on-scroll">
      <div className="section-heading">
        <p className="eyebrow">What clients say</p>
        <h2>Trusted by entrepreneurs and professionals across industries</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <article key={index} className="testimonial-card reveal-on-scroll">
            <div className="testimonial-header">
              <div className="testimonial-avatar">{testimonial.initials}</div>
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-stars">★★★★★</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
