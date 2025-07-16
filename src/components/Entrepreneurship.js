import React from 'react';

const Entrepreneurship = () => {
  const entrepreneurship = [
    {
      company: "Solemate",
      position: "Founding Engineer",
      location: "La Jolla, CA",
      date: "Nov 2018 – Nov 2019",
      achievements: [
        {
          title: "iOS App Development:",
          description: "Developed the Solemate iOS App using Swift and Objective C for 1.8K daily active patients who have ankle injuries."
        },
        {
          title: "Adaptive UI Design:",
          description: "Designed adaptive UI with CSS to display the rehabilitation data and send it to their doctors using Firestore and ML kit."
        },
        {
          title: "Technologies:",
          description: "Chart.js, JavaScript, HTML, CSS, Swift, Firebase"
        }
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-rocket"></i>
        Entrepreneurship
      </h2>

      {entrepreneurship.map((project, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div className="company-info">
              <h3 className="company">{project.company}</h3>
              <p className="position">{project.position}</p>
              <p className="location">{project.location}</p>
            </div>
            <div className="date">{project.date}</div>
          </div>
          <ul className="achievements">
            {project.achievements.map((achievement, achIndex) => (
              <li key={achIndex}>
                <strong>{achievement.title}</strong> {achievement.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Entrepreneurship; 