import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Coursera Inc.",
      position: "Senior Software Engineer",
      date: "Mar 2024 – Present",
      achievements: [
        {
          title: "Allowlist Management Platform:",
          description: "Led P0 project with 4 engineers implementing near real-time data platform for courses/specializations at contract-level, reducing customer time from 2 weeks to under 10 seconds. Built RPC microservice with Java/gRPC and implemented conflict detection using Apache Airflow."
        },
        {
          title: "Badge Management Platform:",
          description: "Led team of 3 engineers developing stream-processing platform for real-time badge management across organizations, leading to over $10M in contract ACVs. Built Kafka Connect CDC workflow with Amazon MSK for data consistency."
        },
        {
          title: "Internal Tools:",
          description: "Launched Retool-based internal management software reducing engineering time from 95 minutes to under 5 seconds. Implemented scalable batch data ingestion pipeline from AWS RDS to internal EDW tables."
        }
      ]
    },
    {
      company: "Coursera Inc.",
      position: "Software Engineer II",
      date: "Mar 2023 – Mar 2024",
      achievements: [
        {
          title: "Clips Management Platform:",
          description: "Led team of 3 engineers building large-scale, fault-tolerant distributed system for clips metadata management with full CRUD operations. Achieved 80% reduction in clips metadata update time through parallel processing and multi-threading."
        },
        {
          title: "Performance Optimization:",
          description: "Implemented distributed Redis Cache reducing P95/P99 latency by 80%/92% respectively. Enforced data integrity through application-level transactions with well-defined boundaries for downstream services."
        },
        {
          title: "Microservices Architecture:",
          description: "Developed Java Spring Boot RESTful microservice for clips CRUD operations supporting concurrent, non-conflicting batch updates with distributed workload processing."
        }
      ]
    },
    {
      company: "Coursera Inc.",
      position: "Software Engineer I",
      date: "Jan 2022 – Mar 2023",
      achievements: [
        {
          title: "Java Migration Platform:",
          description: "Led Contract and User service migrations from Scala to Java, phasing out 12 legacy APIs and deprecating approximately 5K lines of code. Implemented Java migration library with automated double read/write used in 15 migrations across 4 teams."
        },
        {
          title: "gRPC Microservices:",
          description: "Developed gRPC microservices: 12 APIs for contract utilization (approximately 3K QPS, 98% coverage) and 7 APIs for learner profile (approximately 200 QPS, 95% coverage) with comprehensive test coverage and performance optimization."
        },
        {
          title: "System Architecture:",
          description: "Designed and implemented scalable microservice architecture supporting high-throughput data processing and real-time updates across multiple internal teams and services."
        }
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-briefcase"></i>
        Experience
      </h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div className="company-info">
              <h3 className="company">{exp.company}</h3>
              <p className="position">{exp.position}</p>
            </div>
            <div className="date">{exp.date}</div>
          </div>
          <ul className="achievements">
            {exp.achievements.map((achievement, achIndex) => (
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

export default Experience; 