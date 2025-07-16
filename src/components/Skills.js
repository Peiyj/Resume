import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      label: "Languages",
      skills: ["Java", "Scala", "JavaScript", "TypeScript", "Python", "GoLang", "C++", "Swift", "Objective C", "SQL"]
    },
    {
      label: "Technologies",
      skills: ["AWS DynamoDB", "AWS Lambda", "AWS EKS", "AWS MSK", "AWS RDS", "AWS Aurora", "Kafka", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Firestore", "ML Kit"]
    },
    {
      label: "Frameworks",
      skills: ["Spring Boot", "React", "Angular", "Angular.js", "Node.js", "Ember.js", "Ember Data", "GraphQL", "gRPC", "Apache Airflow", "Chart.js", "JavaFX"]
    },
    {
      label: "Tools",
      skills: ["Terraform", "Retool", "Redis", "Elasticsearch", "Docker", "GitHub Actions", "MS TFS", "Handlebars"]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fas fa-cogs"></i>
        Skills and Competencies
      </h2>

      {skillCategories.map((category, index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-label">{category.label}</h3>
          <div className="skills-tags">
            {category.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills; 