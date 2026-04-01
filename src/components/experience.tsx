import React from 'react';

const Experience: React.FC = () => {
  const milestones = [
    {
      company: "Infosys",
      role: "Systems Engineer Trainee",
      period: "Oct 2025 - Present",
      description: "Undergoing intensive training in enterprise-grade development. Specializing in Java Full Stack, Spring Boot microservices, and SQL database management.",
      skills: ["Java", "Spring Boot", "React", "TypeScript", "SQL"]
    },
    {
      company: "University of Petroleum and Energy Studies",
      role: "B.Tech in Computer Science",
      period: "2021 - 2025",
      description: "Focused on System Design, Data Structures, and Algorithms. Developed a strong foundation in software engineering principles.",
      skills: ["Java", "DBMS", "Computer Networks", "Open Source"]
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-title">My Journey</h2>
      <div className="timeline">
        {milestones.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{item.period}</span>
              <h3>{item.role}</h3>
              <h4 className="company-name">{item.company}</h4>
              <p>{item.description}</p>
              <div className="timeline-tags">
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;