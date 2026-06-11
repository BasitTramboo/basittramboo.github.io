import FadeIn from './FadeIn';
import SectionHeading from './SectionHeading';

const links = [
  {
    label: 'Email',
    value: 'basit.tramboo@gmail.com',
    href: 'mailto:basit.tramboo@gmail.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/basittramboo',
    href: 'https://www.linkedin.com/in/basittramboo/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/BasitTramboo',
    href: 'https://github.com/BasitTramboo',
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <FadeIn>
          <SectionHeading
            label="Connect"
            title="Let's talk."
            subtitle="Open to conversations about engineering, cloud architecture, and collaboration."
          />
        </FadeIn>

        <FadeIn delay={80}>
          <div className="contact-links liquid-glass">
            <div className="liquid-glass-content">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="contact-link"
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;
