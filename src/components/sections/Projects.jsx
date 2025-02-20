import { useState } from 'react';
import { projectsData, projectCategories } from '../../store/projectsData';
import '../../styles/Projects.css';

const Projects = () => {
  const [category, setCategory] = useState('All');
  const isStandalone = window.location.pathname === '/projects';

  const filteredProjects = category === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === category);

  return (
    <div className={isStandalone ? "page-wrapper" : ""}>
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2>My Projects</h2>
          
          <div className="category-buttons">
            {projectCategories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-image-placeholder">
                      <h3>{project.title}</h3>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn github"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn live"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 