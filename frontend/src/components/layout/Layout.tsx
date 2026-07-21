import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import './Layout.css';

export function Layout() {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main className="layout__main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
