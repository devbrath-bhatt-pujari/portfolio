import React from 'react';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiPostgresql } from 'react-icons/si';

const TechStack: React.FC = () => {
  return (
    <section className="tech-stack">
      <h2 className="section-title">My Technical Toolkit</h2>
      <div className="floating-icons-container">
        <div className="floating-icon-item java">
          <FaJava className="t-icon" />
          <span>Java</span>
        </div>
        <div className="floating-icon-item spring">
          <SiSpringboot className="t-icon" />
          <span>Spring Boot</span>
        </div>
        <div className="floating-icon-item react">
          <FaReact className="t-icon" />
          <span>React</span>
        </div>
        <div className="floating-icon-item ts">
          <SiTypescript className="t-icon" />
          <span>TypeScript</span>
        </div>
        <div className="floating-icon-item python">
          <FaPython className="t-icon" />
          <span>Python</span>
        </div>
        <div className="floating-icon-item sql">
          <SiPostgresql className="t-icon" />
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
};

export default TechStack;