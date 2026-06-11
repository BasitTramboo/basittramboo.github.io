import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Nav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const active = sectionIds.find((id) => visibleSections.has(id));
        if (active) {
          setActiveSection(active);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul>
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : undefined}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
