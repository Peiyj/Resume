import React from 'react';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-top">
        <h1>Hey there!</h1>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
      <div className="intro">
        <h2>Me!</h2>
        <p>I'm <strong>Patrick Pei</strong>, a <strong>senior software engineer</strong> with a passion for building <strong>distributed systems</strong> & creating impactful solutions</p>
      </div>
      <div className="contact">
        <h3>Drop me a line <a href="mailto:yingjianpei2022@u.northwestern.edu">yingjianpei2022@u.northwestern.edu</a></h3>
      </div>
    </header>
  );
};

export default Header; 