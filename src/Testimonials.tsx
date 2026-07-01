function Testimonials() {
  const reviews = [
    {
      name: 'Rohit Verma',
      role: 'Startup founder',
      text: 'Fast and clear support for our company registration. Everything was handled professionally.',
    },
    {
      name: 'Priya Malhotra',
      role: 'Freelance consultant',
      text: 'Reliable ITR and GST filing every year. They explain everything in simple terms.',
    },
    {
      name: 'Sanjay Gupta',
      role: 'Small business owner',
      text: 'Helped us with ROC compliance without any delays. Highly recommended.',
    },
  ];

  return (
    <section className="section testimonials reveal-on-scroll">
      <div className="section-heading">
        <p className="eyebrow">Client stories</p>
        <h2>What our clients say</h2>
      </div>
      <div className="cards-grid">
        {reviews.map((r) => (
          <article className="card reveal-on-scroll" key={r.name}>
            <p>"{r.text}"</p>
            <h3>{r.name}</h3>
            <p style={{ color: '#64748b', margin: 0 }}>{r.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
