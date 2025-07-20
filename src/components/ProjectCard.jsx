import React from 'react';

const ProjectCard = ({ project }) => {
  // Import images dynamically based on the project
  const getImageSrc = (imagePath) => {
    const imageName = imagePath.split('/').pop(); // Get filename from path
    try {
      return require(`../assets/images/${imageName}`);
    } catch (error) {
      console.error(`Image not found: ${imageName}`);
      return null;
    }
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={getImageSrc(project.image)} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tags.map((tag, index) => (
            <span key={index} className="tech-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 