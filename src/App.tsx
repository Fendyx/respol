import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Лайаут (Шапка и Подвал)
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Страницы
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Хедер будет виден на всех страницах */}
        <Header />
        
        {/* Контент меняется в зависимости от URL */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        
        {/* Футер тоже виден везде */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;