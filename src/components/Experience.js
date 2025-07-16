import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Coursera",
      title: "Senior Software Engineer",
      date: "September 2022 - Present",
      location: "Mountain View, CA",
      description: "Led development of scalable microservices serving millions of learners worldwide. Architected and implemented critical infrastructure improvements that reduced system latency by 40% and increased overall platform reliability. Spearheaded migration of legacy monolithic services to microservices architecture, resulting in 60% faster deployment cycles and improved system maintainability. Mentored junior engineers and established coding standards that reduced bug reports by 35%. Designed and implemented real-time analytics pipelines processing 500M+ events daily, enabling data-driven product decisions that increased course completion rates by 15%.",
      technologies: ["Python", "Java", "React", "PostgreSQL", "Redis", "Kafka", "AWS", "Docker", "Kubernetes"]
    },
    {
      company: "Coursera",
      title: "Software Engineer II", 
      date: "March 2022 - September 2022",
      location: "Mountain View, CA",
      description: "Developed and maintained core platform features used by millions of learners globally. Implemented advanced search capabilities using Elasticsearch that improved search accuracy by 45% and reduced query response time by 30%. Built machine learning recommendation systems that increased user engagement by 25% and course discovery by 40%. Led cross-functional initiatives to optimize database performance, reducing query execution time by 50% and improving overall platform responsiveness. Collaborated with product teams to deliver features that contributed to a 20% increase in monthly active users.",
      technologies: ["Python", "JavaScript", "React", "Elasticsearch", "Spark", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera",
      title: "Software Engineer I",
      date: "October 2021 - March 2022",
      location: "Mountain View, CA", 
      description: "Built and optimized data pipelines processing over 100GB of learning analytics data daily, enabling real-time insights for 100M+ learners. Developed automated data validation systems that reduced data quality issues by 70% and improved reporting accuracy. Contributed to frontend development using React, implementing responsive UI components that enhanced user experience across mobile and desktop platforms. Established comprehensive monitoring and alerting systems that reduced system downtime by 80% and improved incident response time from hours to minutes.",
      technologies: ["Python", "Airflow", "Hadoop", "PostgreSQL", "React", "Jenkins"]
    },
    {
      company: "Samsara",
      title: "Software Engineering Intern",
      date: "June 2021 - September 2021",
      location: "San Francisco, CA",
      description: "Developed real-time fleet management features for IoT devices serving 25,000+ vehicles across North America. Built responsive web interfaces using React and TypeScript that improved fleet operator efficiency by 30% and reduced manual tracking overhead. Implemented advanced data visualization tools and interactive dashboards that provided actionable insights for fleet operators, resulting in 15% reduction in fuel costs and 20% improvement in route optimization. Collaborated with hardware teams to integrate sensor data streams, enabling predictive maintenance features that reduced vehicle downtime by 25%.",
      technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera", 
      title: "Software Engineering Intern",
      date: "March 2021 - June 2021",
      location: "Mountain View, CA",
      description: "Built machine learning recommendation systems to personalize course suggestions for 80M+ learners, increasing course enrollment by 18% and improving learner satisfaction scores. Developed comprehensive A/B testing frameworks that enabled data-driven product decisions and reduced feature deployment risks. Created interactive analytics dashboards used by product managers and executives to track key metrics, leading to strategic decisions that improved learner retention by 12%. Optimized recommendation algorithms using collaborative filtering and content-based approaches, resulting in 35% better course matching accuracy.",
      technologies: ["Python", "React", "ML Kit", "PostgreSQL", "Spark"]
    },
    {
      company: "Roche",
      title: "Software Engineering Intern", 
      date: "June 2019 - September 2019",
      location: "South San Francisco, CA",
      description: "Developed bioinformatics tools for genomic data analysis, accelerating drug discovery research timelines by 40%. Created automated pipelines for processing large-scale sequencing data (10TB+), reducing manual analysis time from weeks to hours. Built interactive visualization tools for research scientists that enabled faster identification of genetic variants and biomarkers. Implemented cloud-based solutions using AWS that improved data accessibility and collaboration between research teams across multiple locations. Contributed to the development of precision medicine algorithms that supported 5+ clinical trials.",
      technologies: ["Python", "Java", "SQL", "Docker", "Jenkins"]
    },
    {
      company: "C2 Group",
      title: "Software Engineering Intern",
      date: "July 2018 - August 2018", 
      location: "San Diego, CA",
      description: "Collaborated on enhancing underground vehicle sensor accuracy using C++, increasing precision from 70% to 90%. Optimized image processing speed by 80% by using multithreading and the fan-out pattern in C++.",
      technologies: ["C++", "Image Processing", "Multithreading"]
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