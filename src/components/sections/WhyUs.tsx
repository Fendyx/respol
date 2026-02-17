import React from 'react';
import { ShieldCheck, Globe2, Truck, BarChart3 } from "lucide-react";
import { useTranslation } from 'react-i18next';
import './WhyUs.css';

export const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: ShieldCheck,
      title: t('whyUs.features.reliableSupply')
    },
    {
      icon: Globe2,
      title: t('whyUs.features.globalPartnerships')
    },
    {
      icon: Truck,
      title: t('whyUs.features.efficientLogistics')
    },
    {
      icon: BarChart3,
      title: t('whyUs.features.flexibleTrading')
    }
  ];

  return (
    <section className="why-us-section">
      {/* Abstract Background Shapes */}
      <div className="bg-glow bg-glow-white" />
      <div className="bg-glow bg-glow-accent" />

      <div className="why-us-container">
        <div className="why-us-header">
          <h2 className="why-us-title">{t('whyUs.title')}</h2>
          <p className="why-us-subtitle">
            {t('whyUs.subtitle')}
          </p>
        </div>

        <div className="why-us-grid">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon-box">
                <feature.icon size={24} />
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}