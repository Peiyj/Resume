import React from 'react';
import profilePhoto from '../assets/images/patrickpei.jpeg';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-top">
        <h1>👋 Hey there!</h1>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
          <span className="theme-label">{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
      <div className="intro">
        <div className="intro-content">
          <div className="intro-photo">
            <img src={profilePhoto} alt="Patrick Pei" className="profile-image" />
          </div>
          <div className="intro-text">
            <h2>🚀 About Me!</h2>
            <p>I'm <strong>Patrick Pei</strong>, a <strong>senior software engineer</strong> with a passion for building <strong>distributed systems</strong> & creating impactful solutions 💡</p>
          </div>
        </div>
      </div>
      <div className="contact">
        <h3>📧 Drop me an <a href="mailto:yingjianpei2022@u.northwestern.edu">email</a>!</h3>
      </div>
    </header>
  );
};

export default Header; 