import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { roles } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <FadeIn>
          <SectionHeading
            label="Career"
            title="Experience."
          />
        </FadeIn>

        <div className="role-list">
          {roles.map((role, index) => (
            <FadeIn key={role.id} delay={index * 50}>
              <article className="role-block liquid-glass">
                <div className="liquid-glass-content">
                  <div className="role-header">
                    <div>
                      <h3>{role.title}</h3>
                      <p className="role-company">{role.company}</p>
                    </div>
                    <div className="role-meta">
                      <span>{role.period}</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <ul>
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li key={`${role.id}-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
