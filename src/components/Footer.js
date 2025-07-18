import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:yingjianpei2022@u.northwestern.edu">{t('email')}</a>
        <a href="/patrick_resume.pdf" target="_blank" rel="noopener noreferrer">{t('resume')}</a>
        <a href="https://linkedin.com/in/patrickpei11" target="_blank" rel="noopener noreferrer">{t('linkedin')}</a>
        <a href="https://github.com/peiyj" target="_blank" rel="noopener noreferrer">{t('github')}</a>
      </div>
    </footer>
  );
};

export default Footer; 