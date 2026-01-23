import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [showPdfModal, setShowPdfModal] = useState(false);

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

  const togglePdfModal = () => {
    setShowPdfModal(!showPdfModal);
  };

  return (
    <>
      <div className="project-card">
        {/* Image functionality commented out for now */}
        {/* <div className="project-image">
          <img src={getImageSrc(project.image)} alt={project.title} />
        </div> */}
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tags.map((tag, index) => (
              <span key={index} className="tech-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            {project.pdf && (
              <a onClick={togglePdfModal} className="project-link">
                📄 View Paper
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                🌐 Visit Site
              </a>
            )}
          </div>
        </div>
      </div>

      {showPdfModal && project.pdf && (
        <div className="certificate-modal" onClick={togglePdfModal}>
          <div className="certificate-content pdf-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={togglePdfModal}>×</button>
            <iframe 
              src={project.pdf} 
              title={project.title}
              className="pdf-viewer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard; 