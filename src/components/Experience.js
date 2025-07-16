import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Coursera",
      title: "Senior Software Engineer",
      date: "September 2022 - Present",
      description: "Led development of scalable microservices serving millions of learners worldwide. Architected and implemented critical infrastructure improvements that reduced system latency by 40% and increased overall platform reliability.",
      technologies: ["Python", "Java", "React", "PostgreSQL", "Redis", "Kafka", "AWS", "Docker", "Kubernetes"]
    },
    {
      company: "Coursera",
      title: "Software Engineer II", 
      date: "March 2022 - September 2022",
      description: "Developed and maintained core platform features used by millions of learners. Implemented advanced search capabilities and recommendation systems that improved user engagement by 25%.",
      technologies: ["Python", "JavaScript", "React", "Elasticsearch", "Spark", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera",
      title: "Software Engineer I",
      date: "October 2021 - March 2022", 
      description: "Built and optimized data pipelines processing over 100GB of learning analytics data daily. Contributed to frontend development and improved system monitoring capabilities.",
      technologies: ["Python", "Airflow", "Hadoop", "PostgreSQL", "React", "Jenkins"]
    },
    {
      company: "Samsara",
      title: "Software Engineering Intern",
      date: "June 2021 - September 2021",
      location: "San Francisco, CA",
      description: "Developed real-time fleet management features for IoT devices. Built responsive web interfaces and implemented data visualization tools that enhanced user experience for fleet operators managing thousands of vehicles.",
      technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera", 
      title: "Software Engineering Intern",
      date: "March 2021 - June 2021",
      location: "Mountain View, CA",
      description: "Built machine learning recommendation systems to personalize course suggestions. Developed A/B testing frameworks and analytics dashboards that drove data-driven product decisions.",
      technologies: ["Python", "React", "ML Kit", "PostgreSQL", "Spark"]
    },
    {
      company: "Roche",
      title: "Software Engineering Intern", 
      date: "June 2019 - September 2019",
      location: "South San Francisco, CA",
      description: "Developed bioinformatics tools for genomic data analysis. Created automated pipelines for processing large-scale sequencing data and built visualization tools for research scientists.",
      technologies: ["Python", "Java", "SQL", "Docker", "Jenkins"]
    },
    {
      company: "C2 Group",
      title: "Software Engineering Intern",
      date: "July 2018 - August 2018", 
      location: "San Diego, CA",
      description: "Built data analysis tools and automated reporting systems. Developed web applications for internal use and contributed to database optimization projects.",
      technologies: ["Java", "SQL", "JavaScript", "Spring Boot"]
    },
    {
      company: "UCSD Medical Center",
      title: "Research Assistant",
      date: "September 2017 - March 2018",
      location: "San Diego, CA", 
      description: "Conducted medical imaging research and developed analysis software. Built tools for processing and analyzing large medical datasets using machine learning techniques.",
      technologies: ["Python", "MATLAB", "SQL"]
    }
  ];

  return (
    <section className="experience">
      <h2>💼 Professional Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <h3>🏢 {experience.company}</h3>
            <span className="date">📅 {experience.date}</span>
            {experience.location && <span className="location">📍 {experience.location}</span>}
          </div>
          <h4>👨‍💻 {experience.title}</h4>
          <p>{experience.description}</p>
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