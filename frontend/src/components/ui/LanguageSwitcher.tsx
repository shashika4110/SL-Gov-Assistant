import type { Language } from '../../types';
import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
  language: Language;
  onChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'si', label: 'සිංහල', flag: '🇱🇰' },
  { code: 'ta', label: 'தமிழ்', flag: '🇱🇰' },
];

export function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  return (
    <div className="lang-switcher" role="group" aria-label="Select language">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-switcher__btn ${language === lang.code ? 'lang-switcher__btn--active' : ''}`}
          onClick={() => onChange(lang.code)}
          aria-pressed={language === lang.code}
          aria-label={`Switch to ${lang.label}`}
          type="button"
        >
          <span aria-hidden="true">{lang.flag}</span>
          <span className="lang-switcher__label">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
