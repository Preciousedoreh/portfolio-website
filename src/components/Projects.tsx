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
      title: "Prolifi Markets",
      description: "A global revenue platform helping international businesses optimize monetization. Features multi-currency pricing, global payments, automated tax compliance, subscription management, and fraud prevention.",
      technologies: [],
      liveUrl: "https://prolifi-markets.netlify.app/"
    },
    {
      id: 2,
      title: "Transave",
      description: "A comprehensive payment solution platform for businesses and individuals in Nigeria. Enables seamless financial transactions with a robust API backend for secure payment processing.",
      technologies: [],
      liveUrl: "https://www.transave.com.ng/"
    },
    {
      id: 3,
      title: "Manam",
      description: "Professional services firm delivering strategic advisory, tax, training, and corporate recovery/insolvency services to improve compliance and growth across multiple industries.",
      technologies: [],
      liveUrl: "https://manam-five.vercel.app/"
    },
    {
      id: 4,
      title: "Paraplug Store",
      description: "E-commerce sneaker store for exclusive Nike and Jordan releases, featuring new arrivals, community highlights, and category browsing across Air Jordan and Nike lines.",
      technologies: [],
      liveUrl: "https://www.paraplug.store/"
    },
    {
      id: 5,
      title: "Green Family Loan",
      description: "Company site for Green Family Loan Ltd, the operator of the Family Mobile app listed in the FCCPC DMLs full approval status.",
      technologies: [],
      liveUrl: "https://green-family-loan-6nha.vercel.app/"
    }
  ]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="projects-header">
          <span className="projects-label">Portfolio</span>
          <h2>Selected Projects</h2>
          <p className="projects-subtitle">
            A focused selection of client work and product builds across fintech, commerce, and corporate services.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-header">
                <span className="project-index">{String(project.id).padStart(2, '0')}</span>
                {project.liveUrl && <span className="project-status">Live</span>}
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.technologies.length > 0 && (
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link ghost" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
