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
      dateKey: "march2024Present",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraLeadDesc",
      technologies: ["Java", "gRPC", "AWS DynamoDB", "AWS Lambda", "Apache Airflow", "Terraform", "Retool", "AWS EKS", "AWS MSK", "Kafka", "PostgreSQL", "GraphQL"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineerII", 
      dateKey: "march2023March2024",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraSeII",
      technologies: ["Java", "Scala", "Spring Boot", "GraphQL", "Redis", "AWS Aurora", "MySQL", "Distributed Systems"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineerI",
      dateKey: "january2022March2023",
      locationKey: "mountainViewCA", 
      descriptionKey: "courseraSeI",
      technologies: ["Java", "Scala", "gRPC", "GraphQL", "JavaScript", "AWS RDS", "MySQL"]
    },
    {
      company: "Samsara",
      website: "https://www.samsara.com/",
      logo: "/src/assets/logos/samsara.png",
      titleKey: "softwareEngineeringIntern",
      dateKey: "june2021October2021",
      locationKey: "sanFranciscoCA",
      descriptionKey: "samsaraDesc",
      technologies: ["GoLang", "MongoDB", "React", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera", 
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      titleKey: "softwareEngineeringIntern",
      dateKey: "january2021March2021",
      locationKey: "mountainViewCA",
      descriptionKey: "courseraInternDesc",
      technologies: ["Java", "Scala", "gRPC", "JavaScript", "TypeScript", "MongoDB", "HTML", "CSS"]
    },
    {
      company: "UC San Diego",
      website: "https://ucsd.edu/",
      logo: "/src/assets/logos/ucsd.png",
      titleKey: "teachingAssistant",
      dateKey: "march2020September2020",
      locationKey: "sanDiegoCA",
      descriptionKey: "ucsdTaDesc",
      technologies: ["SystemVerilog", "C", "FPGA", "Vsim", "Hardware Design", "Digital Logic"]
    },
    {
      company: "Roche",
      website: "https://www.roche.com/",
      logo: "/src/assets/logos/roche.png",
      titleKey: "softwareEngineeringIntern", 
      dateKey: "june2019September2019",
      locationKey: "tucsonAZ",
      descriptionKey: "rocheDesc",
      technologies: ["Python", "Java", "SQL", "Docker", "Jenkins"]
    },
    {
      company: "C2 Group",
      website: "https://www.c2group.us/",
      logo: "/src/assets/logos/c2group.png",
      titleKey: "softwareEngineeringIntern",
      dateKey: "july2018October2018", 
      locationKey: "sanDiegoCA",
      descriptionKey: "c2GroupDesc",
      technologies: ["C++", "Image Processing", "Multithreading"]
    },
    {
      company: "UC San Diego Health",
      website: "https://health.ucsd.edu/",
      logo: "/src/assets/logos/ucsd-health.png",
      titleKey: "softwareEngineerIntern",
      dateKey: "april2018June2018",
      locationKey: "sanDiegoCA",
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
            <span className="date">📅 {t(experience.dateKey)}</span>
            <span className="location">📍 {t(experience.locationKey)}</span>
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