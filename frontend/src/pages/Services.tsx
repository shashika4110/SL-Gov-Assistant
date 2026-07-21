import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/ui/SearchBar';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation } from '../i18n/translations';
import { governmentServices, searchServices } from '../data/services';
import './Services.css';

export function ServicesPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [query, setQuery] = useState('');
  const filtered = query ? searchServices(query) : governmentServices;

  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t.services.title}</h1>
          <p className="page-header__subtitle">{t.services.subtitle}</p>
        </div>
      </header>

      <div className="page-content container">
        <div className="services__search">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder={t.services.searchPlaceholder}
            ariaLabel={t.services.searchPlaceholder}
          />
        </div>

        {filtered.length > 0 ? (
          <ServiceGrid
            services={filtered}
            onServiceClick={(id) => navigate(`/services/${id}`)}
          />
        ) : (
          <div className="empty-state" role="status">
            <div className="empty-state__icon" aria-hidden="true">🔍</div>
            <p>{t.services.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}
