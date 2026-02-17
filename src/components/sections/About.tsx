import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './About.css';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const { t } = useTranslation();

  // ✅ Define feature keys individually
  const featureKeys = [
    'about.features.0',
    'about.features.1',
    'about.features.2',
    'about.features.3'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          
          <div className="about-content">
            <span className="about-label">{t('about.label')}</span>
            
            <h2 className="about-heading">
              {t('about.heading')}
            </h2>
            
            <p className="about-description">
              {t('about.description')}
            </p>
            
            <div className="features-grid">
              {featureKeys.map((key, i) => (
                <div key={i} className="feature-item">
                  <CheckCircle2 className="feature-icon" />
                  <span className="feature-text">{t(key)}</span>
                </div>
              ))}
            </div>
            
            <div className="about-cta-mobile">
              <Link to="/contact" className="cta-button">{t('about.ctaButton')}</Link>
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <div className="blob blob-accent" />
            <div className="blob blob-primary" />
            
            <img 
              src="/images/about.png"
              alt="Res-Pol Logistics" 
              className="about-img"
            />
            
            <div className="floating-card">
              <p className="card-title">{t('about.statsCard.title')}</p>
              <p className="card-text">{t('about.statsCard.text')}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}