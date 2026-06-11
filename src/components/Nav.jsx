import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = ['home', ...NAV_ITEMS.map((item) => item.id)];

function getActiveSection(ratios) {
  const visible = SECTION_IDS
    .map((id, index) => ({ id, ratio: ratios.get(id) ?? 0, index }))
    .filter((section) => section.ratio > 0)
    .sort((a, b) => {
      if (b.ratio !== a.ratio) return b.ratio - a.ratio;
      return b.index - a.index;
    });

  return visible[0]?.id ?? 'home';
}

function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ratios = new Map(SECTION_IDS.map((id) => [id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });
        setActiveSection(getActiveSection(ratios));
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="site-nav liquid-glass" aria-label="Main navigation">
        <div className="liquid-glass-content site-nav-inner">
          <a
            href="#home"
            className={`nav-brand ${activeSection === 'home' ? 'active' : ''}`}
            aria-current={activeSection === 'home' ? 'true' : undefined}
          >
            Basit Tramboo
          </a>
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
        </div>
      </nav>
    </header>
  );
}

export default Nav;
