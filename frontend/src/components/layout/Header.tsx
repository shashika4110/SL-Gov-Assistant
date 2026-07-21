import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useLanguage } from '../../hooks/useLanguage';
import { useAuth } from '../../context/AuthContext';
import { getTranslation } from '../../i18n/translations';
import './Header.css';

const navItems = [
  { path: '/', key: 'home' as const },
  { path: '/chat', key: 'chat' as const },
  { path: '/services', key: 'services' as const },
  { path: '/offices', key: 'offices' as const },
  { path: '/faqs', key: 'faqs' as const },
  { path: '/about', key: 'about' as const },
  { path: '/contact', key: 'contact' as const },
];

export function Header() {
  const { language, setLanguage } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const t = getTranslation(language);
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label={t.appName}>
          <span className="header__logo-icon" aria-hidden="true">🇱🇰</span>
          <div className="header__logo-text">
            <span className="header__logo-title">SL Gov Assistant</span>
            <span className="header__logo-sub">{t.appTagline}</span>
          </div>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`header__nav-link ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'header__nav-link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          {isAuthenticated ? (
            <div className="header__auth">
              <span className="header__user-name">{user?.name}</span>
              <button type="button" className="header__auth-btn" onClick={handleLogout}>
                {t.auth.logout}
              </button>
            </div>
          ) : (
            <Link to="/login" className="header__auth-btn header__auth-btn--primary" onClick={() => setMenuOpen(false)}>
              {t.auth.loginButton}
            </Link>
          )}
          <LanguageSwitcher language={language} onChange={setLanguage} />
          <button
            className="header__menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <span className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
