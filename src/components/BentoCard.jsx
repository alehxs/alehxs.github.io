import './BentoCard.css';

function BentoCard({ children, gridArea, className = '', variant = 'default' }) {
  return (
    <div
      className={`bento-card bento-card--${variant} ${className}`}
      style={gridArea ? { gridArea } : {}}
    >
      {children}
    </div>
  );
}

export default BentoCard;
