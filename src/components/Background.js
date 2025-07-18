import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Background = () => {
  const { t } = useLanguage();

  // Helper function to render text with bold formatting
  const renderFormattedText = (text) => {
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <section className="background">
      <h2>{t('background')}</h2>
      <p>{renderFormattedText(t('backgroundText1'))}</p>
      <p>{renderFormattedText(t('backgroundText2'))}</p>
      <p>{renderFormattedText(t('backgroundText3'))}</p>
    </section>
  );
};

export default Background; 