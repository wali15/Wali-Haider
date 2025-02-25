import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Resume from './components/pages/Resume';
import { useState, useEffect } from 'react';
import Certifications from './components/sections/Certifications';
import PdfViewer from './components/pages/PdfViewer';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, if not found use 'dark' as default
    return localStorage.getItem('theme') || 'dark'
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/pdf-viewer/:pdfUrl" element={<PdfViewer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 