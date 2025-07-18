import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Background from './components/Background';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Entrepreneurship from './components/Entrepreneurship';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // Load saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.body.classList.remove('dark-theme');
    } else {
      // Default to dark mode if no preference is saved
      setDarkMode(true);
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <LanguageProvider>
      <div className="container">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Background />
        <Experience />
        <Entrepreneurship />
        <Education />
        <Skills />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App; 