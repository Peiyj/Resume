import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "seniorSoftwareEngineer",
      date: "March 2024 - Present",
      location: "Mountain View, CA",
      descriptionKey: "courseraLeadDesc",
      technologies: ["Java", "gRPC", "AWS DynamoDB", "AWS Lambda", "Apache Airflow", "Terraform", "Retool", "AWS EKS", "AWS MSK", "Kafka", "PostgreSQL", "GraphQL"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineerII", 
      date: "March 2023 - March 2024",
      location: "Mountain View, CA",
      descriptionKey: "courseraSeII",
      technologies: ["Java", "Scala", "Spring Boot", "GraphQL", "Redis", "AWS Aurora", "MySQL", "Distributed Systems"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineerI",
      date: "January 2022 - March 2023",
      location: "Mountain View, CA", 
      descriptionKey: "courseraSeI",
      technologies: ["Java", "Scala", "gRPC", "GraphQL", "JavaScript", "AWS RDS", "MySQL"]
    },
    {
      company: "Samsara",
      website: "https://www.samsara.com/",
      logo: "/src/assets/logos/samsara.png",
      titleKey: "softwareEngineeringIntern",
      date: "June 2021 - October 2021",
      location: "San Francisco, CA",
      descriptionKey: "samsaraDesc",
      technologies: ["GoLang", "MongoDB", "React", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera", 
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineeringIntern",
      date: "January 2021 - March 2021",
      location: "Mountain View, CA",
      descriptionKey: "courseraInternDesc",
      technologies: ["Java", "Scala", "gRPC", "JavaScript", "TypeScript", "MongoDB", "HTML", "CSS"]
    },
    {
      company: "UC San Diego",
      website: "https://ucsd.edu/",
      logo: "/src/assets/logos/ucsd.png",
      titleKey: "teachingAssistant",
      date: "March 2020 - September 2020",
      location: "San Diego, CA",
      descriptionKey: "ucsdTaDesc",
      technologies: ["SystemVerilog", "C", "FPGA", "Vsim", "Hardware Design", "Digital Logic"]
    },
    {
      company: "Roche",
      website: "https://www.roche.com/",
      logo: "/src/assets/logos/roche.png",
      titleKey: "softwareEngineeringIntern", 
      date: "June 2019 - September 2019",
      location: "Tucson, AZ",
      descriptionKey: "rocheDesc",
      technologies: ["Python", "Java", "SQL", "Docker", "Jenkins"]
    },
    {
      company: "C2 Group",
      website: "https://www.c2group.us/",
      logo: "/src/assets/logos/c2group.png",
      titleKey: "softwareEngineeringIntern",
      date: "July 2018 - October 2018", 
      location: "San Diego, CA",
      descriptionKey: "c2GroupDesc",
      technologies: ["C++", "Image Processing", "Multithreading"]
    },
    {
      company: "UC San Diego Health",
      website: "https://health.ucsd.edu/",
      logo: "/src/assets/logos/ucsd-health.png",
      titleKey: "softwareEngineerIntern",
      date: "April 2018 - June 2018",
      location: "San Diego, CA",
      descriptionKey: "ucsdHealthDesc",
      technologies: [".NET Framework", "MongoDB", "REST API", "Machine Learning", "Python", "Matplotlib", "Data Analysis"]
    }
  ];

  return (
    <section className="experience">
      <h2>{t('experience')}</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <h3>
              <img 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                className="company-logo"
                onError={(e) => {e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline';}}
              />
              <span className="emoji-fallback" style={{display: 'none'}}>🏢</span>
              {' '}
              <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.company}</a>
            </h3>
            <span className="date">📅 {experience.date}</span>
            {experience.location && <span className="location">📍 {experience.location}</span>}
          </div>
          <h4>👨‍💻 {t(experience.titleKey)}</h4>
          <p>{t(experience.descriptionKey)}</p>
          <div className="technologies">
            {experience.technologies.map((tech, techIndex) => (
              <span key={techIndex}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience; 