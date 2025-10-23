import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = (): JSX.Element => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities with beautiful visualizations.",
      technologies: ["React", "API Integration", "Chart.js", "CSS3"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ]);

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;