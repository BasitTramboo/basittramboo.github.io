import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="section-inner">
        <FadeIn>
          <SectionHeading
            label="Work"
            title="Selected projects."
            subtitle="Cloud-native systems, AI pipelines, and research — built end to end."
          />
        </FadeIn>

        <div className="feature-list">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 60}>
              <article className={`feature-block liquid-glass ${project.featured ? 'feature-block-highlight' : ''}`}>
                <div className="liquid-glass-content">
                  {project.featured && <span className="feature-label">Featured</span>}
                  <h3 className="feature-title">{project.title}</h3>
                  <p className="feature-desc">{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="link-cta"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
