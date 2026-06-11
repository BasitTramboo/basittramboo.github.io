function Hero() {
  return (
    <section id="home" className="hero">
      <div className="section-inner">
        <div className="hero-inner liquid-glass">
          <div className="liquid-glass-content">
            <p className="hero-eyebrow liquid-pill">Senior Full Stack Developer · CGI Canada</p>
            <h1 className="hero-headline">Basit Tramboo</h1>
            <p className="hero-subhead">Cloud-native systems. Built to scale.</p>
            <p className="hero-desc">
              Full-stack engineering across React, Node.js, Go, and AWS — from event-driven
              microservices and RAG platforms to production CI/CD.
            </p>
            <div className="hero-links">
              <a href="#projects" className="link-cta">View projects</a>
              <a href="#contact" className="link-cta link-cta-muted">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
