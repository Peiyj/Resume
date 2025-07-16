import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "GoLang", "C++", "Swift", "Objective C", "SQL", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Angular", "Node.js", "Ember.js", "Chart.js", "JavaFX", "Spring Boot", "Django", "Flask", "Express.js", "Bootstrap", "jQuery"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "MS TFS", "Handlebars"]
    },
    {
      title: "Technologies",
      skills: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Elasticsearch", "Spark", "Hadoop", "Airflow", "MongoDB", "Firebase", "Firestore", "ML Kit", "Kubernetes"]
    }
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.title}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills; 