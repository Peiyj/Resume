import React from 'react';

const Internships = () => {
  const internships = [
    {
      company: "Samsara",
      position: "Software Engineer Intern",
      location: "San Francisco, CA",
      date: "Jun 2021 – Oct 2021",
      achievements: [
        {
          title: "Config Pusher System (CPS):",
          description: "Developed patterns for batching requests leveraging fan-in pattern and Go routine to improve load stability, boosted route transition and server request success rate 2-4x (worst case) and 10-20x (best case)."
        },
        {
          title: "Batch Manager:",
          description: "Designed a batch manager to consolidate requests by leveraging in-memory queue, slashing CPS service P99 latency by 90%."
        },
        {
          title: "Technologies:",
          description: "GoLang, MongoDB, React, AWS, PostgreSQL, Docker"
        }
      ]
    },
    {
      company: "Coursera Inc.",
      position: "Software Engineer Intern",
      location: "Mountain View, CA",
      date: "Jan 2021 – Mar 2021",
      achievements: [
        {
          title: "Membership Service Migration:",
          description: "Led the migration from Scala to Java, phasing out 6 legacy APIs, deprecating ~1.1K lines of code."
        },
        {
          title: "Roster Service:",
          description: "Implemented a Roster Service in Java for managing program memberships, handling ~300K requests per day while decreasing response time by 47%, with 95% unit test coverage."
        },
        {
          title: "Technologies:",
          description: "Java, Scala, JavaScript, TypeScript, MongoDB, HTML, CSS"
        }
      ]
    },
    {
      company: "Roche",
      position: "Software Engineer Intern",
      location: "Tucson, AZ",
      date: "Jun 2019 – Sep 2019",
      achievements: [
        {
          title: "Backlog Management UI:",
          description: "Utilized JavaFX to develop a user interface for backlog management, improving project manager efficiency by 50%."
        },
        {
          title: "CI/CD Pipeline:",
          description: "Automated the CI/CD pipeline for Advanced Staining Data, transitioning from MS TFS to Github action."
        },
        {
          title: "Technologies:",
          description: "Ember.js, Ember Data, Handlebars, Node.js, Java"
        }
      ]
    },
    {
      company: "C2 Group",
      position: "Software Engineer Intern",
      location: "San Diego, CA",
      date: "Jun 2018 – Sep 2018",
      achievements: [
        {
          title: "Vehicle Sensor Enhancement:",
          description: "Collaborated on enhancing underground vehicle sensor accuracy using C++, increasing precision from 70% to 90%."
        },
        {
          title: "Image Processing Optimization:",
          description: "Optimized image processing speed by 80% by using multithreading and the fan-out pattern in C++."
        },
        {
          title: "Technologies:",
          description: "Python, C++, Angular, Node.js, Java, TypeScript, JavaScript"
        }
      ]
    },
    {
      company: "UCSD Medical Center",
      position: "Software Engineer Intern",
      location: "La Jolla, CA",
      date: "Mar 2018 – Jun 2018",
      achievements: [
        {
          title: "Real-time Data Application:",
          description: "Developed a Python application to gather real-time data, reducing electricity usage by 4% through ML analysis."
        },
        {
          title: "Technologies:",
          description: "Python, C++, React, MongoDB, Docker, Angular.js"
        }
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-laptop-code"></i>
        Internship Experience
      </h2>

      {internships.map((internship, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div className="company-info">
              <h3 className="company">{internship.company}</h3>
              <p className="position">{internship.position}</p>
              <p className="location">{internship.location}</p>
            </div>
            <div className="date">{internship.date}</div>
          </div>
          <ul className="achievements">
            {internship.achievements.map((achievement, achIndex) => (
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

export default Internships; 