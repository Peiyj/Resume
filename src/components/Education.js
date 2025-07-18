import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      school: "Northwestern University",
      website: "https://www.northwestern.edu/",
      degreeKey: "mastersDegree",
      date: "September 2020 - June 2021",
      location: "Evanston, IL",
      gpa: "4.0/4.0"
    },
    {
      school: "University of California, San Diego",
      website: "https://ucsd.edu/",
      degreeKey: "bachelorsDegree", 
      date: "September 2016 - June 2020",
      location: "La Jolla, CA",
      gpa: "3.7/4.0"
    }
  ];

  return (
    <section className="education">
      <h2>{t('education')}</h2>
      {education.map((edu, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <h3>🏫 <a href={edu.website} target="_blank" rel="noopener noreferrer">{edu.school}</a></h3>
            <span className="date">📅 {edu.date}</span>
            <span className="location">📍 {edu.location}</span>
          </div>
          <h4>📚 {t(edu.degreeKey)}</h4>
          <p className="gpa">GPA: {edu.gpa}</p>
        </div>
      ))}
    </section>
  );
};

export default Education; 