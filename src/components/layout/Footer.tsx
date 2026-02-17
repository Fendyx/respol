import React from 'react';
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="footer-container">
        
        {/* Main Grid */}
        <div className="footer-grid">
          
          {/* 1. Brand */}
          <div className="footer-brand">
            <div className="brand-wrapper">
              <div className="brand-logo-box">R</div>
              <span className="brand-name">Res-Pol</span>
            </div>
            <p className="brand-desc">
              {t('footer.brand.description')}
            </p>
          </div>

          {/* 2. Company Links */}
          <div>
            <h4 className="footer-col-title">{t('footer.columns.company')}</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">{t('footer.links.home')}</Link></li>
              <li><a href="#about" className="footer-link">{t('footer.links.about')}</a></li>
              <li><a href="#products" className="footer-link">{t('footer.links.products')}</a></li>
              <li><a href="#logistics" className="footer-link">{t('footer.links.logistics')}</a></li>
              <li><Link to="/contact" className="footer-link">{t('footer.links.contact')}</Link></li>
            </ul>
          </div>

          {/* 3. Legal Links */}
          <div>
            <h4 className="footer-col-title">{t('footer.columns.legal')}</h4>
            <ul className="footer-links">
              <li><Link to="/privacy" className="footer-link">{t('footer.links.privacy')}</Link></li>
              <li><Link to="/terms" className="footer-link">{t('footer.links.terms')}</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="footer-col-title">{t('footer.columns.contact')}</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:+48221234567" className="footer-link">+48 22 123 45 67</a>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:office@res-pol.pl" className="footer-link">info@res-pol.pl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}