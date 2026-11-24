import React, { useEffect, useState } from 'react';
import { TESTIMONIALS } from './data/advisoryData';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from './components/Icons';

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const prevSlide = () =>
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextSlide = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <section
      className="section testimonials-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="shell">
        <div className="section-heading-row reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow">Client Stories</p>
            <h2>Trusted by Founders, Professionals &amp; Growing Businesses</h2>
          </div>

          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="icon-sm" />
            </button>
            <button
              type="button"
              className="carousel-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="icon-sm" />
            </button>
          </div>
        </div>

        <div className="testimonials-grid reveal-on-scroll">
          {TESTIMONIALS.map((review, idx) => (
            <article
              key={review.name}
              className={`testimonial-card ${idx === active ? 'is-featured' : ''}`}
              onClick={() => setActive(idx)}
            >
              <div className="stars-row" aria-label="5 out of 5 rating">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon key={star} className="icon-xs star-gold" />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{review.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <strong>{review.name}</strong>
                  <span>
                    {review.service} &bull; {review.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Select testimonial">
          {TESTIMONIALS.map((r, idx) => (
            <button
              key={r.name}
              type="button"
              role="tab"
              aria-selected={idx === active}
              aria-label={`View review by ${r.name}`}
              className={`carousel-dot ${idx === active ? 'active' : ''}`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
