import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Patrick Pei</h1>
      <p className="title">Senior Software Engineer</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:yingjianpei2022@u.northwestern.edu">yingjianpei2022@u.northwestern.edu</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+18586665517">+1-858-666-5517</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-github"></i>
          <a href="https://github.com/peiyj" target="_blank" rel="noopener noreferrer">github.com/peiyj</a>
        </div>
        <div className="contact-item">
          <i className="fab fa-linkedin"></i>
          <a href="https://linkedin.com/in/patrickpei11" target="_blank" rel="noopener noreferrer">linkedin.com/in/patrickpei11</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 