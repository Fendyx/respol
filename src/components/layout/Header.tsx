import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import './Header.css';

export const Header: React.FC = () => {
  const { i18n, t } = useTranslation();
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
    setIsMobileMenuOpen(false); // ✅ Auto-close menu when language changes
    localStorage.setItem('i18nextLng', lng);
  };

  // ✅ Separate routes from anchor links
  const navLinks = [
    { name: t('header.home'), href: "/", isRoute: true },
    { name: t('header.about'), href: "#about", isRoute: false },
    { name: t('header.products'), href: "#products", isRoute: false },
    { name: t('header.logistics'), href: "#markets", isRoute: false },
    { name: t('header.contact'), href: "/contact", isRoute: true },
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
            link.isRoute ? (
              <Link key={link.name} to={link.href} className="nav-link" onClick={handleNavClick}>
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            )
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
              <span>{currentLang.toUpperCase()}</span>
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

        {/* Mobile Actions - Language + Burger */}
        <div className="mobile-actions-right">
          {/* ✅ Mobile Language Toggle (Visible without menu) */}
          <button
            className="mobile-lang-toggle"
            onClick={() => changeLanguage(currentLang === 'en' ? 'pl' : 'en')}
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="mobile-lang-code">{currentLang.toUpperCase()}</span>
          </button>

          {/* Mobile Toggle (Burger) */}
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
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={handleBackdropClick}>
          <div className="mobile-menu-wrapper" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="mobile-nav-link"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>
            
            <div className="mobile-actions">
              {/* Language in menu (optional, for clarity) */}
              <div className="mobile-lang-section">
                <p className="mobile-lang-label">Language / Język</p>
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