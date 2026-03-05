import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
import Email from './pages/Email/Email';
import NotFound from './pages/NotFound/NotFound';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppInner() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
    document.documentElement.setAttribute('dir', lang === 'en' ? 'rtl' : 'ltr');
    document.body.classList.toggle('rtl', lang === 'en');
  };

  return (
    <>
      <ScrollToTop />
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/email" element={<Email lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/services/:sub" element={<Services lang={lang} />} />
          <Route path="/projects" element={<Projects lang={lang} />} />
          <Route path="/clients" element={<Clients lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer lang={lang} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;
