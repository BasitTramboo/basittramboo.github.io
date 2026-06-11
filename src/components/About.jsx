import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="section-inner">
        <FadeIn>
          <SectionHeading
            label="Profile"
            title="8+ years building reliable products"
          />
        </FadeIn>
        <FadeIn delay={80}>
          <div className="prose liquid-glass">
            <div className="liquid-glass-content">
              <p>
                I'm a Senior Full Stack Developer at CGI in Canada, with a Master's in Applied
                Computer Science from Dalhousie University. I specialize in scalable, cloud-native
                software systems that solve real-world problems with efficiency and performance.
              </p>
              <p>
                I've progressed from solo Android development to tech lead roles, delivering
                full-stack products, BI platforms, and mobile apps used by thousands of users.
                Proficient in JavaScript, Java, Go, and Python, with hands-on experience in React,
                React Native, Node.js, and Spring Boot.
              </p>
              <p>
                I work across AWS, Azure, and GCP with Docker, Kubernetes, and CI/CD pipelines,
                from RAG systems and generative AI to serverless event-driven workflows. I thrive
                in agile teams, mentor engineers, and ship reliable software at scale.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;
