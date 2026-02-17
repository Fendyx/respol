import React, { useState, FormEvent } from 'react';
import { Phone, Mail, Send } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Toast } from '../components/ui/Toast';
import './Contact.css';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const FORMSPREE_ID = 'mpqjrrag';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{msg: string, type: 'success'|'error'} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setToast({ msg: t('contact.form.success'), type: "success" });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        const data = await response.json();
        setToast({ msg: data.error || t('contact.form.error'), type: "error" });
      }
    } catch (error) {
      setToast({ msg: t('contact.form.networkError'), type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <span className="contact-label">{t('contact.label')}</span>
          <h1 className="contact-title">{t('contact.title')}</h1>
          <p className="contact-desc">
            {t('contact.description')}
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Contact Info */}
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <div className="info-content">
                <h3 className="info-subtitle">{t('contact.info.phone.title')}</h3>
                <a href="tel:+48221234567" className="info-link">+48 22 123 45 67</a>
                <p className="info-text">{t('contact.info.phone.text')}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail className="info-icon" />
              </div>
              <div className="info-content">
                <h3 className="info-subtitle">{t('contact.info.email.title')}</h3>
                <a href="mailto:office@res-pol.pl" className="info-link">office@res-pol.pl</a>
                <p className="info-text">{t('contact.info.email.text')}</p>
              </div>
            </div>

            <div className="info-divider" />

            <div className="info-note">
              <p>{t('contact.info.note')}</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="form-grid">
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder={t('contact.form.namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="form-input" 
                    placeholder={t('contact.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t('contact.form.company')}</label>
                <input 
                  type="text" 
                  name="company" 
                  className="form-input" 
                  placeholder={t('contact.form.companyPlaceholder')}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('contact.form.message')}</label>
                <textarea 
                  name="message" 
                  required 
                  className="form-textarea" 
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                <Send className="btn-icon" size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.msg} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
};