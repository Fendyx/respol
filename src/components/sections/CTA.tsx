import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './CTA.css';

export const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          
          {/* Decorative gradients */}
          <div className="cta-bg-gradient" />
          <div className="cta-blob cta-blob-top" />
          <div className="cta-blob cta-blob-bottom" />
          
          <div className="cta-content">
            <h2 className="cta-title">
              {t('cta.title')}
            </h2>
            <p className="cta-text">
              {t('cta.text')}
            </p>
            
            <Link to="/contact" className="cta-button">
              {t('cta.button')} <ArrowRight className="cta-btn-icon" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}