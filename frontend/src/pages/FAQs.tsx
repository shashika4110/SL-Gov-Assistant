import { useState } from 'react';
import { SearchBar } from '../components/ui/SearchBar';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation, getLocalizedText } from '../i18n/translations';
import { faqs, searchFAQs } from '../data/faqs';
import './FAQs.css';

export function FAQsPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  const filtered = query ? searchFAQs(query) : faqs;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t.faqs.title}</h1>
          <p className="page-header__subtitle">{t.faqs.subtitle}</p>
        </div>
      </header>

      <div className="page-content container faqs">
        <div className="faqs__search">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder={t.faqs.searchPlaceholder}
            ariaLabel={t.faqs.searchPlaceholder}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="faqs__list" role="list">
            {filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <article key={faq.id} className={`faqs__item ${isOpen ? 'faqs__item--open' : ''}`} role="listitem">
                  <button
                    className="faqs__question"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    type="button"
                  >
                    <span>{getLocalizedText(faq.question, language)}</span>
                    <span className="faqs__chevron" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faqs__answer" role="region">
                      <p>{getLocalizedText(faq.answer, language)}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state" role="status">
            <div className="empty-state__icon" aria-hidden="true">❓</div>
            <p>{t.faqs.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}
