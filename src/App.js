import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Background from './components/Background';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Entrepreneurship from './components/Entrepreneurship';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-theme');
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
    <div className="container">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Background />
      <Skills />
      <Experience />
      <Entrepreneurship />
      <Education />
      <Footer />
    </div>
  );
}

export default App; 