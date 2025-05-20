function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="experience-entry">
        <h3>
          Software Development Engineer – Freolabs Creative Solutions Pvt. Ltd.
          <span>Sep 2016 – Aug 2024</span>
        </h3>
        <p>Bangalore, India</p>
        <ul>
          <li>
            <strong>Sapience Agri – Internal BI & Operations Platform</strong><br />
            Built and deployed an internal automation system, reducing manual operations by 40% and improving decision-making by 30%.
            Containerized the backend using Docker and Nginx, deployed on EC2.
            Integrated SES, SNS, and EventBridge for alerts and workflows, and monitored infrastructure with CloudWatch.
          </li>
          <li>
            <strong>OneStepUp – Career Assessment Mobile App</strong><br />
            Led app development to digitize assessments, reducing result turnaround by 70% and serving over 5,000 monthly users.
            Built and maintained backend using Node.js; collaborated cross-functionally with product, design, and QA teams.
            Achieved over 99% crash-free sessions with Crashlytics; automated communication via SES and SNS.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
