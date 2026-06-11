import { useInView } from '../hooks/useInView';

function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? 'visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default FadeIn;
