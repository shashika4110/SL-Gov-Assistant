import { Card } from '../ui/Card';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export function ServiceCard({ icon, title, description, onClick }: ServiceCardProps) {
  return (
    <Card hover onClick={onClick} as="article" className="service-card">
      <div className="service-card__icon" aria-hidden="true">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      <span className="service-card__arrow" aria-hidden="true">→</span>
    </Card>
  );
}
