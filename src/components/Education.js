import React from 'react';

const Education = () => {
  const education = [
    {
      school: "Northwestern University",
      degree: "Master of Science in Computer Engineering",
      date: "Sep 2020 – Dec 2021"
    },
    {
      school: "University of California, San Diego",
      degree: "Bachelor of Science in Computer Engineering",
      date: "Sep 2016 – Jun 2020"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-graduation-cap"></i>
        Education
      </h2>

      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <div className="school-info">
              <h3 className="school">{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
            </div>
            <div className="date">{edu.date}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education; 