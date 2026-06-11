function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience-entry">
        <h3>
          Senior Full Stack Developer – CGI
          <span>Feb 2026 – Present</span>
        </h3>
        <p>Canada</p>
        <ul>
          <li>
            Building cloud-first, cloud-native systems for enterprise clients as part of CGI's
            engineering team in Canada.
          </li>
          <li>
            Design and develop scalable, event-driven microservices and APIs using Node.js, Go on AWS to support high-volume, business-critical workflows.
          </li>
          <li>
            Build and maintain React frontends with Material-UI, integrating complex backend data into performant, intuitive user experiences.
          </li>
          <li>
            Own end-to-end delivery with Docker, GitHub Actions CI/CD, and automated testing (Jest, Cypress), ensuring reliable, secure, and observable production releases in an Agile environment.
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>
          Senior Software Development Engineer – Freolabs Creative Solutions
          <span>Apr 2022 – Aug 2024</span>
        </h3>
        <p>Bangalore, India</p>
        <ul>
          <li>
            Tech lead across services and three product surfaces; mentored teams and partnered with
            cross-functional stakeholders (business, design, data) to drive roadmap and delivery.
          </li>
          <li>
            Delivered BI and planning features — 15+ executive reports, dashboards, PO PDF/email,
            inventory planning, and budget management — cutting report time by 60%, reducing BI
            discrepancies by 30%, and shrinking PO cycle time by over 95% (from 1–2 hours to under
            5 minutes) for 200+ POs/month.
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>
          Software Development Engineer II – Freolabs Creative Solutions
          <span>Jul 2019 – Mar 2022</span>
        </h3>
        <p>Bangalore, India</p>
        <ul>
          <li>
            Led BI architecture and data pipelines for strategic planning and executive dashboards.
          </li>
          <li>
            Built historical-trend algorithms and standardized BI modules; designed and containerized
            services (Node.js, Docker) and integrated cloud automations (EC2, SES, SNS).
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>
          Software Development Engineer, Backend – Freolabs Creative Solutions
          <span>Jan 2018 – Jun 2019</span>
        </h3>
        <p>Bangalore, India</p>
        <ul>
          <li>
            Extended a monolith to support new capabilities; integrated core cloud services and
            improved release automation.
          </li>
          <li>
            Digitized manual workflows, boosting data accuracy by 25% and saving ~15 hours/week in
            operations effort.
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>
          Software Development Engineer, Android – Freolabs Creative Solutions
          <span>Sep 2016 – Dec 2017</span>
        </h3>
        <p>Bangalore, India</p>
        <ul>
          <li>
            Solo Android developer; shipped 2 apps across 3 releases and integrated 10+ REST endpoints
            end-to-end.
          </li>
          <li>
            Reduced API integration defects by 40% via standardized contracts, retries, and error
            handling; improved time-to-first-interaction by 20% through network and caching
            optimizations.
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>
          Software Engineering Intern – EasterEgg Pte Ltd
          <span>Jan 2016 – Mar 2016</span>
        </h3>
        <p>Bangalore, India</p>
        <ul>
          <li>
            Developed the vendor-facing Android application for an e-commerce platform, enabling
            real-time order and inventory management for partner sellers.
          </li>
          <li>
            Contributed to core product development and tech strategy; worked in an agile environment
            with sprint planning, code reviews, and REST API integration.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
