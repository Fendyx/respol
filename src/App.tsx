import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Лайаут (Шапка и Подвал)
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Страницы
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

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
          </Routes>
        </main>
        
        {/* Футер тоже виден везде */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;