import React from 'react';
import { ArrowRight, Flame, Leaf, Ship } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './Products.css';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  const areas = [
    {
      title: t('products.areas.coal.title'),
      icon: Flame,
      description: t('products.areas.coal.description'),
      image: "https://images.unsplash.com/photo-1629151003510-85fdd1d88263?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29hbHxlbnwwfHwwfHx8Mg%3D%3D",
      badgeColor: "#111827"
    },
    {
      title: t('products.areas.fertilizers.title'),
      icon: Leaf,
      description: t('products.areas.fertilizers.description'),
      image: "https://media.licdn.com/dms/image/v2/D4E12AQG6lkNGZcDpSQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678139124883?e=2147483647&v=beta&t=o8JsMwbqxpOsYig8Y8hshTprMiwVZDJjFQJo9e1NIHw",
      badgeColor: "#005f3a"
    },
    {
      title: t('products.areas.logistics.title'),
      icon: Ship,
      description: t('products.areas.logistics.description'),
      image: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badgeColor: "#2563eb"
    }
  ];

  return (
    <section id="products" className="business-section">
      <div className="business-container">
        
        {/* Header */}
        <div className="business-header">
          <span className="business-label">{t('products.label')}</span>
          <h2 className="business-title">{t('products.title')}</h2>
          <p className="business-subtitle">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="business-grid">
          {areas.map((area, index) => (
            <div key={index} className="area-card">
              
              {/* Image Header */}
              <div className="area-image-wrapper">
                <div className="area-overlay" />
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="area-img"
                />
                {/* Badge with Icon */}
                <div 
                  className="area-icon-badge" 
                  style={{ backgroundColor: area.badgeColor }}
                >
                  <area.icon size={20} />
                </div>
              </div>
              
              {/* Content */}
              <div className="area-content">
                <h3 className="area-card-title">
                  {area.title}
                </h3>
                <p className="area-desc">
                  {area.description}
                </p>
                
                <div>
                  <button className="learn-more-btn">
                    {t('products.learnMore')} <ArrowRight className="btn-arrow" />
                  </button>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}