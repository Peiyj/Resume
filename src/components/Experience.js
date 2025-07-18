import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      title: "Senior Software Engineer",
      date: "March 2024 - Present",
      location: "Mountain View, CA",
      description: "I led a P0 project with 4 engineers, designing and implementing an Allowlist Management Platform for managing near real-time data updating of courses and specializations at the contract-level, saving customer time from 2 weeks to under 10 seconds. Additionally, I developed a RPC microservice with Java and gRPC supporting contract-level allowlist management. Furthermore, I implemented a conflict detection job using Apache Airflow that automatically resolves concurrent updates by the same user based on latest timestamp. Moreover, I launched an internal contract-scope allowlist management software using Retool, saving engineering time from 95 minutes to under 5 seconds. Currently, I lead a team of 3 engineers to design and develop a Badge Management Platform - a stream-processing platform for reliable real-time badge management service providing badge issuance workflow for learners across all organizations, leading to >$10M in contract ACVs.",
      technologies: ["Java", "gRPC", "AWS DynamoDB", "AWS Lambda", "Apache Airflow", "Terraform", "Retool", "AWS EKS", "AWS MSK", "Kafka", "PostgreSQL", "GraphQL"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      title: "Software Engineer II", 
      date: "March 2023 - March 2024",
      location: "Mountain View, CA",
      description: "I led a team of 3 engineers to design and develop a Clips Management Platform - a large scale, fault-tolerant, distributed system for clips metadata management service allowing creating, reading, updating, deleting clips metadata across the platform. To achieve scalability, I enabled parallel processing on concurrent, non-conflicting batch clip metadata updates and distributed workload to multiple threads, reducing average clips metadata update time by 80%. Additionally, I implemented distributed Redis Cache to reduce P95 and P99 latency of read operations by 80% and 92% respectively. Furthermore, I enforced data integrity, consistency and isolation for all clips metadata CRUD operations by implementing application level transactions, providing well-defined transaction boundaries for downstream curriculum updating services.",
      technologies: ["Java", "Scala", "Spring Boot", "GraphQL", "Redis", "AWS Aurora", "MySQL", "Distributed Systems"]
    },
    {
      company: "Coursera",
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      title: "Software Engineer I",
      date: "January 2022 - March 2023",
      location: "Mountain View, CA", 
      description: "I led the Contract and User service migrations from Scala to Java through the Java Migration Platform, successfully phasing out 12 legacy APIs and deprecating ~5K lines of code. In this role, I developed a gRPC microservice with 12 APIs to fetch and update contract utilization and learning data, handling ~3K QPS with 98% test coverage. Moreover, I developed a gRPC microservice with 7 APIs to fetch and update learner profiles, handling ~200 QPS with 95% test coverage. Additionally, I implemented the Java migration library with automated double read/write functionality, which was subsequently used in 15 migrations among 4 internal teams.",
      technologies: ["Java", "Scala", "gRPC", "GraphQL", "JavaScript", "AWS RDS", "MySQL"]
    },
    {
      company: "Samsara",
      website: "https://www.samsara.com/",
      logo: "/src/assets/logos/samsara.png",
      title: "Software Engineering Intern",
      date: "June 2021 - October 2021",
      location: "San Francisco, CA",
      description: "I optimized the Config Pusher System (CPS) by developing patterns for batching requests, leveraging the fan-in pattern from Go routines. To achieve this, I designed a batch manager to consolidate requests using in-memory queue, ultimately reducing CPS service P95 latency by 90%. Furthermore, I built scalable microservices architecture using GoLang and integrated with MongoDB and PostgreSQL databases for high-performance data processing.",
      technologies: ["GoLang", "MongoDB", "React", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Coursera", 
      website: "https://www.coursera.org/",
      logo: "/src/assets/logos/coursera.png",
      title: "Software Engineering Intern",
      date: "January 2021 - March 2021",
      location: "Mountain View, CA",
      description: "I supported the Roster Service Migration from Scala to Java, successfully phasing out 6 legacy APIs and deprecating ~1.1K lines of code. During this internship, I implemented 3 gRPC APIs for obtaining and updating learner rosters, handling ~200 QPS with 95% test coverage. Additionally, I contributed to the migration platform that enabled seamless transition between legacy and modern service architectures.",
      technologies: ["Java", "Scala", "gRPC", "JavaScript", "TypeScript", "MongoDB", "HTML", "CSS"]
    },
    {
      company: "UC San Diego",
      website: "https://ucsd.edu/",
      logo: "/src/assets/logos/ucsd.png",
      title: "Teaching Assistant",
      date: "March 2020 - September 2020",
      location: "San Diego, CA",
      description: "I taught FPGA architecture and design flow concepts in SystemVerilog and C to an average of 20 students per day. In this role, I covered topics including FPGA components, synthesis, simulation, verification, timing analysis, and optimization. Moreover, I used Vsim tools to demonstrate design flow and create FPGA projects using SystemVerilog and C. Additionally, I held office hours to assist more than 50 students with their projects by analyzing and debugging code. Through this work, I helped students resolve issues including syntax errors, logic errors, timing violations, resource constraints, and memory leaks.",
      technologies: ["SystemVerilog", "C", "FPGA", "Vsim", "Hardware Design", "Digital Logic"]
    },
    {
      company: "Roche",
      website: "https://www.roche.com/",
      logo: "/src/assets/logos/roche.png",
      title: "Software Engineering Intern", 
      date: "June 2019 - September 2019",
      location: "Tucson, AZ",
      description: "I developed bioinformatics tools for genomic data analysis, accelerating drug discovery research timelines by 40%. Furthermore, I created automated pipelines for processing large-scale sequencing data (10TB+), reducing manual analysis time from weeks to hours. Additionally, I built interactive visualization tools for research scientists that enabled faster identification of genetic variants and biomarkers. Moreover, I implemented cloud-based solutions using AWS that improved data accessibility and collaboration between research teams across multiple locations. Through this work, I contributed to the development of precision medicine algorithms that supported 5+ clinical trials.",
      technologies: ["Python", "Java", "SQL", "Docker", "Jenkins"]
    },
    {
      company: "C2 Group",
      website: "https://www.c2group.us/",
      logo: "/src/assets/logos/c2group.png",
      title: "Software Engineering Intern",
      date: "July 2018 - October 2018", 
      location: "San Diego, CA",
      description: "I collaborated on enhancing underground vehicle sensor accuracy using C++, increasing precision from 70% to 90%. Additionally, I optimized image processing speed by 80% by using multithreading and the fan-out pattern in C++.",
      technologies: ["C++", "Image Processing", "Multithreading"]
    },
    {
      company: "UC San Diego Health",
      website: "https://health.ucsd.edu/",
      logo: "/src/assets/logos/ucsd-health.png",
      title: "Software Engineer Intern",
      date: "April 2018 - June 2018",
      location: "San Diego, CA",
      description: "I developed and deployed a real-time data gathering application using .NET Framework, MongoDB, and REST API. Furthermore, I integrated the application with the hospital's network and sensors to collect and store over 10 GB of data per day in MongoDB. Through this work, I analyzed the data using machine learning algorithms, resulting in a 40% electricity reduction in UCSD hospitals. Moreover, I generated insights and recommendations for optimizing energy usage of light fixtures using Matplotlib, achieving a 40% reduction in electricity consumption.",
      technologies: [".NET Framework", "MongoDB", "REST API", "Machine Learning", "Python", "Matplotlib", "Data Analysis"]
    }
  ];

  return (
    <section className="experience">
      <h2>💼 Professional Experience</h2>
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