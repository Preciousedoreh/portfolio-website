import React from 'react';

const About = (): JSX.Element => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <div className="about-intro">
            <span className="about-label">Who I Am</span>
            <h3 className="about-title">Passionate Developer & Problem Solver</h3>
          </div>
          <p className="about-description">
            I'm a passionate developer with experience in modern web technologies. 
            I love creating intuitive user experiences and solving complex problems 
            through clean, efficient code.
          </p>
          <p className="about-description">
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open source projects, or sharing knowledge with the developer community.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skill-badge">
            <i className="devicon-react-original colored"></i>
            React
          </div>
          <div className="skill-badge">
            <i className="devicon-typescript-plain colored"></i>
            TypeScript
          </div>
          <div className="skill-badge">
            <i className="devicon-nodejs-plain colored"></i>
            Node.js
          </div>
          <div className="skill-badge">
            <i className="devicon-python-plain colored"></i>
            Python
          </div>
          <div className="skill-badge">
            <i className="devicon-mongodb-plain colored"></i>
            MongoDB
          </div>
          <div className="skill-badge">
            <i className="devicon-postgresql-plain colored"></i>
            PostgreSQL
          </div>
          <div className="skill-badge">
            <i className="devicon-nextjs-original"></i>
            Next.js
          </div>
          <div className="skill-badge">
            <i className="devicon-tailwindcss-plain colored"></i>
            Tailwind
          </div>
          <div className="skill-badge">
            <i className="devicon-html5-plain colored"></i>
            HTML
          </div>
          <div className="skill-badge">
            <i className="devicon-css3-plain colored"></i>
            CSS
          </div>
          <div className="skill-badge">
            <i className="devicon-docker-plain colored"></i>
            Docker
          </div>
          <div className="skill-badge">
            <i className="devicon-firebase-plain colored"></i>
            Firebase
          </div>
          <div className="skill-badge">
            <i className="devicon-redis-plain colored"></i>
            Redis
          </div>
          <div className="skill-badge">
            <i className="devicon-express-original"></i>
            Express
          </div>
          <div className="skill-badge">
            <i className="devicon-csharp-plain colored"></i>
            C#
          </div>
          <div className="skill-badge">
            <i className="devicon-dot-net-plain colored"></i>
            .NET
          </div>
          <div className="skill-badge">
            <i className="devicon-sqlite-plain colored"></i>
            SQLite
          </div>
          <div className="skill-badge">
            <i className="devicon-github-original"></i>
            GitHub Actions
          </div>
          <div className="skill-badge">
            <i className="devicon-nginx-original colored"></i>
            nginx
          </div>
          <div className="skill-badge">
            <span className="skill-icon">🧠</span>
            SignalR
          </div>
        </div>
      </div>
      
      <div className="what-i-do">
        <h3>What I Do</h3>
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">💻</div>
            <div className="service-content">
              <h4>Frontend Development</h4>
              <p>Modern web apps with React, TypeScript, and responsive design</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">⚙️</div>
            <div className="service-content">
              <h4>Backend Development</h4>
              <p>Scalable APIs, event-driven systems</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">🧠</div>
            <div className="service-content">
              <h4>AI Integration</h4>
              <p>LLMs, automation, intelligent workflows</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">🗄️</div>
            <div className="service-content">
              <h4>Database Design</h4>
              <p>Performance tuning, migrations</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-icon">☁️</div>
            <div className="service-content">
              <h4>DevOps</h4>
              <p>CI/CD pipelines, Docker deployments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;