import React from 'react';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Hero.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Modern logistics terminal" 
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-wrapper"
        >
          {/* Badge */}
          <div className="hero-badge">
            <span className="status-dot-wrapper">
              <span className="status-dot-ping"></span>
              <span className="status-dot"></span>
            </span>
            {t('hero.badge')}
          </div>
          
          {/* Headline - Using dangerouslySetInnerHTML for highlight spans */}
          <h1 
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
                    
          {/* Buttons */}
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              {t('hero.contactButton')} <ArrowRight size={18} className="btn-icon" />
            </Link>
            
            <Link to="/markets" className="btn btn-outline">
              {t('hero.marketsButton')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};