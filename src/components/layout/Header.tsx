import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ Import this
import './Header.css';

export const Header: React.FC = () => {
  const { i18n, t } = useTranslation(); // ✅ Get i18n instance
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden'; 
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      window.history.pushState({ mobileMenuOpen: true }, '');
      
      const handlePopState = () => {
        setIsMobileMenuOpen(false);
      };
      
      window.addEventListener('popstate', handlePopState);
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [isMobileMenuOpen]);

  // ✅ Function to change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    setIsLangOpen(false);
    localStorage.setItem('i18nextLng', lng); // ✅ Persist selection
  };

  const navLinks = [
    { name: t('header.home'), href: "/" },
    { name: t('header.about'), href: "#about" },
    { name: t('header.products'), href: "#products" },
    { name: t('header.logistics'), href: "#markets" },
    { name: t('header.contact'), href: "/contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  // ✅ Get current language code (en or pl)
  const currentLang = i18n.language?.split('-')[0] || 'en';

  return (
    <header className={`header-root ${isScrolled || isMobileMenuOpen ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={handleNavClick}>
          <div className="logo-icon">R</div>
          <span className="logo-text">Res-Pol</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="desktop-actions">
          <div className="lang-dropdown-wrapper">
            <button 
              className="lang-btn" 
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{currentLang.toUpperCase()}</span> {/* ✅ Dynamic language */}
              <ChevronDown size={14} style={{ opacity: 0.5 }} />
            </button>
            
            {isLangOpen && (
              <div className="lang-menu">
                <button 
                  className={`lang-item ${currentLang === 'en' ? 'active' : ''}`} 
                  onClick={() => changeLanguage('en')}
                >
                  English (EN)
                </button>
                <button 
                  className={`lang-item ${currentLang === 'pl' ? 'active' : ''}`} 
                  onClick={() => changeLanguage('pl')}
                >
                  Polski (PL)
                </button>
              </div>
            )}
          </div>

          <Link to="/contact" className="header-contact-btn">
            {t('header.contact')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <div className="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={handleBackdropClick}>
          <div className="mobile-menu-wrapper" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="mobile-actions">
              <div className="mobile-lang-buttons">
                <button 
                  className={`lang-btn mobile-lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  <Globe size={16} /> EN
                </button>
                <button 
                  className={`lang-btn mobile-lang-btn ${currentLang === 'pl' ? 'active' : ''}`}
                  onClick={() => changeLanguage('pl')}
                >
                  PL
                </button>
              </div>
              
              <Link to="/contact" className="header-contact-btn mobile-contact-btn" onClick={handleNavClick}>
                {t('header.contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}