import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';
import { educationEntries } from '../data/education';

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="section-inner">
        <FadeIn>
          <SectionHeading
            label="Background"
            title="Education."
          />
        </FadeIn>

        <div className="education-list">
          {educationEntries.map((entry, index) => (
            <FadeIn key={entry.id} delay={index * 60}>
              <article className="education-block liquid-glass">
                <div className="liquid-glass-content">
                  <h3>{entry.school}</h3>
                  <p className="education-detail">{entry.detail}</p>
                  <p className="education-location">{entry.location}</p>
                  <p className="education-note">{entry.note}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
