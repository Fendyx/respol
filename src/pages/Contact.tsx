import React, { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Toast } from '../components/ui/Toast';
import './Contact.css';

export const Contact: React.FC = () => {
  // Вставь сюда свой ID с сайта Formspree
  const FORMSPREE_ID = 'mpqjrrag'; // <--- ЗАМЕНИ ЭТО НА СВОЙ ID

  // Состояние для полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{msg: string, type: 'success'|'error'} | null>(null);

  // Обработка ввода
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Реальная отправка через Formspree
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Важно, чтобы не перекидывало на сайт Formspree
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Успех!
        setToast({ msg: "Message sent successfully! We will contact you soon.", type: "success" });
        setFormData({ name: '', email: '', company: '', message: '' }); // Очистить форму
      } else {
        // Ошибка от Formspree (например, спам)
        const data = await response.json();
        setToast({ msg: data.error || "Oops! There was a problem sending your form.", type: "error" });
      }
    } catch (error) {
      // Ошибка сети
      setToast({ msg: "Network error. Please try again later.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Заголовок */}
        <div className="contact-header">
          <span className="contact-label">Get in Touch</span>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-desc">
            Our trading team is ready to answer your questions and provide quotes.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Левая колонка: Инфо */}
          <div className="contact-info-card">
            <div className="info-item">
              <h3 className="info-title"><MapPin className="info-icon" /> HQ Address</h3>
              <p className="info-text">
                Res-Pol Trading Sp. z o.o.<br />
                ul. Przemysłowa 12/4<br />
                00-123 Warsaw, Poland
              </p>
            </div>
            <div className="info-item">
              <h3 className="info-title"><Phone className="info-icon" /> Phone</h3>
              <p className="info-text">
                <a href="tel:+48221234567" className="info-link">+48 22 123 45 67</a>
              </p>
            </div>
            <div className="info-item">
              <h3 className="info-title"><Mail className="info-icon" /> Email</h3>
              <p className="info-text">
                <a href="mailto:office@res-pol.pl" className="info-link">office@res-pol.pl</a>
              </p>
            </div>
            <div className="info-item">
              <h3 className="info-title"><Clock className="info-icon" /> Hours</h3>
              <p className="info-text">
                Mon - Fri: 8:00 - 17:00<br />
                Sat - Sun: Closed
              </p>
            </div>
          </div>

          {/* Правая колонка: Форма */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="form-grid">
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="form-input" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="form-input" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Company (Optional)</label>
                <input 
                  type="text" 
                  name="company" 
                  className="form-input" 
                  placeholder="Your Company Ltd."
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  required 
                  className="form-textarea" 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Всплывающее уведомление */}
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