import React from 'react';

const Education = () => {
  const education = [
    {
      school: "Northwestern University",
      degree: "Master of Science in Computer Engineering",
      date: "September 2020 - June 2021",
      location: "Evanston, IL",
      gpa: "4.0/4.0"
    },
    {
      school: "University of California, San Diego",
      degree: "Bachelor of Science in Computer Engineering", 
      date: "September 2016 - June 2020",
      location: "La Jolla, CA",
      gpa: "3.7/4.0"
    }
  ];

  return (
    <section className="education">
      <h2>🎓 Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <h3>🏫 {edu.school}</h3>
            <span className="date">📅 {edu.date}</span>
            <span className="location">📍 {edu.location}</span>
          </div>
          <h4>📚 {edu.degree}</h4>
          <p className="gpa">GPA: {edu.gpa}</p>
        </div>
      ))}
    </section>
  );
};

export default Education; 