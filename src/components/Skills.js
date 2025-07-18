import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      titleKey: "languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "GoLang", "C++", "Swift", "Objective C", "SQL", "HTML/CSS"]
    },
    {
      titleKey: "frameworks",
      skills: ["React", "Angular", "Node.js", "Ember.js", "Chart.js", "JavaFX", "Spring Boot", "Django", "Flask", "Express.js", "Bootstrap", "jQuery"]
    },
    {
      titleKey: "tools",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "Jenkins", "GitHub Actions", "MS TFS", "Handlebars"]
    },
    {
      titleKey: "technologies",
      skills: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Elasticsearch", "Spark", "Hadoop", "Airflow", "MongoDB", "Firebase", "Firestore", "ML Kit", "Kubernetes"]
    }
  ];

  return (
    <section className="skills">
      <h2>{t('skills')}</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{t(category.titleKey)}</h3>
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