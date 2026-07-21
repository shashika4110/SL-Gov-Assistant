import { useLanguage } from '../../hooks/useLanguage';
import { getTranslation } from '../../i18n/translations';
import './Footer.css';

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">🇱🇰</span>
          <div>
            <p className="footer__title">{t.appName}</p>
            <p className="footer__tagline">{t.appTagline}</p>
          </div>
        </div>
        <p className="footer__disclaimer">
          {t.about.disclaimerText}
        </p>
        <p className="footer__copy">
          © {year} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
