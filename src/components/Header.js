import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import profilePhoto from '../assets/images/patrickpei.jpeg';

const Header = ({ darkMode, toggleTheme }) => {
  const { language, toggleLanguage, t } = useLanguage();

  // Helper function to render text with bold formatting
  const renderFormattedText = (text) => {
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1>{t('greeting')}</h1>
        <div className="toggle-buttons">
          <button 
            className="language-toggle" 
            onClick={toggleLanguage} 
            aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
            title={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
          >
            <span className="language-icon">🌐</span>
            <span className="language-label">{language === 'en' ? t('chinese') : t('english')}</span>
          </button>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
            <span className="theme-label">{darkMode ? t('light') : t('dark')}</span>
          </button>
        </div>
      </div>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-photo">
            <img src={profilePhoto} alt="Patrick Pei" className="profile-image" />
          </div>
          <div className="intro-text">
            <h2>{t('about')}</h2>
            <p>{renderFormattedText(t('intro'))}</p>
          </div>
        </div>
      </div>
      <div className="contact">
        <h3>📧 {language === 'en' ? 'Drop me an' : '给我发'} <a href="mailto:yingjianpei2022@u.northwestern.edu">{language === 'en' ? 'email' : '邮件'}</a>!</h3>
      </div>
    </header>
  );
};

export default Header; 