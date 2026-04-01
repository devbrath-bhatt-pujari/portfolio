import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "NexusFlow",
      category: "Full-Stack Modular Pipeline Builder",
      description: "NexusFlow is a modular, node-based pipeline builder designed for scalable workflow orchestration. It features a custom React abstraction for dynamic UI components and a FastAPI backend for graph validation.",
      tags: ["React", "React Flow", "Zustand", "FastAPI", "Python"],
      github: "https://github.com/yourusername/vector-shift", // Update with your link
      demo: "#" 
    }
    // You can add more projects here in the future
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <div className="project-links">
                {/* <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href={project.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a> */}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;