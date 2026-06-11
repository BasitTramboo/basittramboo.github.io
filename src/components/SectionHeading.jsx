function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="section-heading">
      {label && <p className="section-eyebrow">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
