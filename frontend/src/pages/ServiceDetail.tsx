import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation, getLocalizedText } from '../i18n/translations';
import { getServiceById } from '../data/services';
import './ServiceDetail.css';

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = getTranslation(language);
  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const lt = (text: { en: string; si: string; ta: string }) =>
    getLocalizedText(text, language);

  return (
    <div className="page">
      <header className="service-detail__header">
        <div className="container">
          <Link to="/services" className="service-detail__back">
            ← {t.services.backToServices}
          </Link>
          <div className="service-detail__hero">
            <span className="service-detail__icon" aria-hidden="true">{service.icon}</span>
            <div>
              <h1 className="service-detail__title">{lt(service.title)}</h1>
              <p className="service-detail__short">{lt(service.shortDescription)}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="page-content container service-detail__content">
        <section className="service-detail__section" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="service-detail__section-title">
            {t.services.overview}
          </h2>
          <p className="service-detail__text">{lt(service.overview)}</p>
        </section>

        <section className="service-detail__section" aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="service-detail__section-title">
            {t.services.requiredDocuments}
          </h2>
          <ul className="service-detail__list">
            {service.requiredDocuments.map((doc, i) => (
              <li key={i}>{lt(doc)}</li>
            ))}
          </ul>
        </section>

        <section className="service-detail__section" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="service-detail__section-title">
            {t.services.steps}
          </h2>
          <ol className="service-detail__steps">
            {service.steps.map((step, i) => (
              <li key={i} className="service-detail__step">
                <div className="service-detail__step-num" aria-hidden="true">{i + 1}</div>
                <div>
                  <h3 className="service-detail__step-title">{lt(step.title)}</h3>
                  <p className="service-detail__step-desc">{lt(step.description)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="service-detail__section" aria-labelledby="time-heading">
          <h2 id="time-heading" className="service-detail__section-title">
            {t.services.processingTime}
          </h2>
          <p className="service-detail__text service-detail__highlight">{lt(service.processingTime)}</p>
        </section>

        <section className="service-detail__section" aria-labelledby="notes-heading">
          <h2 id="notes-heading" className="service-detail__section-title">
            {t.services.importantNotes}
          </h2>
          <ul className="service-detail__notes">
            {service.importantNotes.map((note, i) => (
              <li key={i}>{lt(note)}</li>
            ))}
          </ul>
        </section>

        <div className="service-detail__actions">
          {service.officialLink && (
            <a href={service.officialLink} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                {t.services.officialWebsite} ↗
              </Button>
            </a>
          )}
          <Link to={`/chat?q=${encodeURIComponent(`How do I apply for ${service.title.en}?`)}`}>
            <Button variant={service.officialLink ? 'secondary' : 'primary'} size="lg">
              {t.home.startChat}
            </Button>
          </Link>
        </div>

        <p className="service-detail__disclaimer">{t.chat.verifyNote}</p>
      </div>
    </div>
  );
}
