import { Link } from 'react-router-dom';

import { Button } from '../components/ui/Button';

import { useLanguage } from '../hooks/useLanguage';

import { getTranslation } from '../i18n/translations';

import './About.css';



const featureIcons = ['💬', '🏛️', '🌐', '🔍', '❓', '📱'];



export function AboutPage() {

  const { language } = useLanguage();

  const t = getTranslation(language);



  return (

    <div className="page">

      <header className="page-header">

        <div className="container">

          <h1 className="page-header__title">{t.about.title}</h1>

          <p className="page-header__subtitle">{t.about.subtitle}</p>

        </div>

      </header>



      <div className="page-content container about">

        <section className="about__section" aria-labelledby="mission-heading">

          <h2 id="mission-heading" className="about__heading">{t.about.missionTitle}</h2>

          <p className="about__text">{t.about.missionText}</p>

        </section>



        <div className="about__grid">

          <section className="about__card" aria-labelledby="problem-heading">

            <h2 id="problem-heading" className="about__card-title">

              <span aria-hidden="true">😕</span> {t.about.problemTitle}

            </h2>

            <p className="about__text">{t.about.problemText}</p>

          </section>



          <section className="about__card about__card--highlight" aria-labelledby="solution-heading">

            <h2 id="solution-heading" className="about__card-title">

              <span aria-hidden="true">✨</span> {t.about.solutionTitle}

            </h2>

            <p className="about__text">{t.about.solutionText}</p>

          </section>

        </div>



        <section className="about__section" aria-labelledby="features-heading">

          <h2 id="features-heading" className="about__heading">{t.about.featuresTitle}</h2>

          <div className="about__features">

            {t.about.featureItems.map((item, index) => (

              <div key={item} className="about__feature">

                <span className="about__feature-icon" aria-hidden="true">

                  {featureIcons[index] ?? '✓'}

                </span>

                <span>{item}</span>

              </div>

            ))}

          </div>

        </section>



        <section className="about__section" aria-labelledby="tech-heading">

          <h2 id="tech-heading" className="about__heading">{t.about.techTitle}</h2>

          <p className="about__text">{t.about.techText}</p>

          <div className="about__tech-stack">

            {['React', 'TypeScript', 'Vite', 'React Router', 'React Markdown'].map((tech) => (

              <span key={tech} className="about__tech-badge">{tech}</span>

            ))}

          </div>

        </section>



        <section className="about__section" aria-labelledby="future-heading">

          <h2 id="future-heading" className="about__heading">{t.about.futureTitle}</h2>

          <p className="about__text">{t.about.futureText}</p>

          <ul className="about__future-list">

            {t.about.futureItems.map((item) => (

              <li key={item}>{item}</li>

            ))}

          </ul>

        </section>



        <section className="about__disclaimer" aria-labelledby="disclaimer-heading">

          <h2 id="disclaimer-heading" className="about__disclaimer-title">

            {t.about.disclaimerTitle}

          </h2>

          <p>{t.about.disclaimerText}</p>

        </section>



        <div className="about__cta">

          <Link to="/chat">

            <Button variant="primary" size="lg">{t.home.startChat}</Button>

          </Link>

        </div>

      </div>

    </div>

  );

}

