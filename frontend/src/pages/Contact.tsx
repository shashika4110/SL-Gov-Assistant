import { useLanguage } from '../hooks/useLanguage';
import { getTranslation, getLocalizedText } from '../i18n/translations';
import { contacts, officialLinks } from '../data/contacts';
import './Contact.css';

export function ContactPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const emergencyContacts = contacts.filter((c) => c.isEmergency);
  const departmentContacts = contacts.filter((c) => !c.isEmergency);

  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t.contact.title}</h1>
          <p className="page-header__subtitle">{t.contact.subtitle}</p>
        </div>
      </header>

      <div className="page-content container contact">
        <section className="contact__section" aria-labelledby="emergency-heading">
          <h2 id="emergency-heading" className="contact__section-title">
            🚨 {t.contact.emergencyTitle}
          </h2>
          <div className="contact__grid contact__grid--emergency">
            {emergencyContacts.map((contact) => (
              <article key={contact.id} className="contact__card contact__card--emergency">
                <h3 className="contact__name">{getLocalizedText(contact.name, language)}</h3>
                <p className="contact__desc">{getLocalizedText(contact.description, language)}</p>
                {contact.phone && (
                  <a href={`tel:${contact.phone}`} className="contact__phone">
                    {t.contact.callNow}: <strong>{contact.phone}</strong>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="contact__section" aria-labelledby="departments-heading">
          <h2 id="departments-heading" className="contact__section-title">
            🏛️ {t.contact.departmentsTitle}
          </h2>
          <div className="contact__grid">
            {departmentContacts.map((contact) => (
              <article key={contact.id} className="contact__card">
                <h3 className="contact__name">{getLocalizedText(contact.name, language)}</h3>
                <p className="contact__desc">{getLocalizedText(contact.description, language)}</p>
                <div className="contact__actions">
                  {contact.phone && (
                    <a href={`tel:${contact.phone}`} className="contact__link">
                      📞 {contact.phone}
                    </a>
                  )}
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} className="contact__link">
                      ✉️ {t.contact.sendEmail}
                    </a>
                  )}
                  {contact.website && (
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__link contact__link--primary"
                    >
                      🌐 {t.contact.visitWebsite}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact__section" aria-labelledby="links-heading">
          <h2 id="links-heading" className="contact__section-title">
            🔗 {t.contact.linksTitle}
          </h2>
          <ul className="contact__links">
            {officialLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="contact__official-link">
                  <span>{link.name}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
