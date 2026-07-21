import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation } from '../i18n/translations';
import './NotFound.css';

export function NotFoundPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <div className="page not-found">
      <div className="not-found__content">
        <span className="not-found__code" aria-hidden="true">404</span>
        <h1 className="not-found__title">{t.notFound.title}</h1>
        <p className="not-found__message">{t.notFound.message}</p>
        <Link to="/">
          <Button variant="primary" size="lg">{t.notFound.backHome}</Button>
        </Link>
      </div>
    </div>
  );
}
