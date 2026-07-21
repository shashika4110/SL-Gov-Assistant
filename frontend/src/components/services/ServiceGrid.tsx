import { ServiceCard } from '../services/ServiceCard';
import type { GovernmentService } from '../../types';
import { getLocalizedText } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './ServiceGrid.css';

interface ServiceGridProps {
  services: GovernmentService[];
  onServiceClick?: (id: string) => void;
}

export function ServiceGrid({ services, onServiceClick }: ServiceGridProps) {
  const { language } = useLanguage();

  return (
    <div className="service-grid" role="list">
      {services.map((service) => (
        <div key={service.id} role="listitem">
          <ServiceCard
            icon={service.icon}
            title={getLocalizedText(service.title, language)}
            description={getLocalizedText(service.shortDescription, language)}
            onClick={() => onServiceClick?.(service.id)}
          />
        </div>
      ))}
    </div>
  );
}
