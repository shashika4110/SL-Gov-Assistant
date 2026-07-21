import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation, getLocalizedText } from '../i18n/translations';
import { governmentServices } from '../data/services';
import { faqs } from '../data/faqs';
import './Home.css';

const features = [
  { icon: '🤖', key: 'feature1' as const },
  { icon: '🌐', key: 'feature2' as const },
  { icon: '📋', key: 'feature3' as const },
  { icon: '📱', key: 'feature4' as const },
];

export function HomePage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getTranslation(language);
  const popularServices = governmentServices.slice(0, 6);
  const previewFaqs = faqs.slice(0, 4);

  return (
    <div className="page home">
      <section className="home__hero" aria-labelledby="hero-title">
        <div className="container home__hero-inner">
          <div className="home__hero-badge" aria-hidden="true">🇱🇰</div>
          <h1 id="hero-title" className="home__hero-title">
            {t.home.heroTitle}
          </h1>
          <p className="home__hero-subtitle">{t.home.heroSubtitle}</p>
          <div className="home__hero-actions">
            <Link to="/chat">
              <Button variant="primary" size="lg">
                {t.home.startChat}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg">
                {t.home.browseServices}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="home__features container" aria-labelledby="features-title">
        <h2 id="features-title" className="section-title home__section-title">
          {t.home.featuresTitle}
        </h2>
        <div className="home__features-grid">
          {features.map(({ icon, key }) => (
            <article key={key} className="home__feature-card">
              <span className="home__feature-icon" aria-hidden="true">{icon}</span>
              <h3 className="home__feature-title">
                {t.home[`${key}Title`]}
              </h3>
              <p className="home__feature-desc">
                {t.home[`${key}Desc`]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="home__services container" aria-labelledby="services-title">
        <div className="home__services-header">
          <h2 id="services-title" className="section-title">
            {t.home.popularServices}
          </h2>
          <Link to="/services" className="home__view-all">
            {t.home.viewAll} →
          </Link>
        </div>
        <ServiceGrid
          services={popularServices}
          onServiceClick={(id) => navigate(`/services/${id}`)}
        />
      </section>

      <section className="home__faqs container" aria-labelledby="faqs-title">
        <div className="home__services-header">
          <h2 id="faqs-title" className="section-title">
            {t.home.faqTitle}
          </h2>
          <Link to="/faqs" className="home__view-all">
            {t.home.viewAllFaqs} →
          </Link>
        </div>
        <div className="home__faq-list">
          {previewFaqs.map((faq) => (
            <article key={faq.id} className="home__faq-card">
              <h3 className="home__faq-question">
                {getLocalizedText(faq.question, language)}
              </h3>
              <p className="home__faq-answer">
                {getLocalizedText(faq.answer, language)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
