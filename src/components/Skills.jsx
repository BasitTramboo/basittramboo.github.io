import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

const skillGroups = [
  { title: 'Languages', skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Golang'] },
  { title: 'Frameworks', skills: ['React', 'React Native', 'Node.js', 'Express.js', 'Spring Boot'] },
  { title: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'DynamoDB'] },
  { title: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] },
  { title: 'Tools', skills: ['Git & GitHub', 'VS Code', 'IntelliJ', 'Postman', 'JIRA'] },
  { title: 'Practices', skills: ['Agile', 'TDD', 'REST APIs', 'OAuth / JWT', 'Microservices', 'Generative AI / RAG'] },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <FadeIn>
          <SectionHeading
            label="Expertise"
            title="Skills & technologies."
          />
        </FadeIn>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 50}>
              <div className="skill-group liquid-glass">
                <div className="liquid-glass-content">
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
