import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  const togglePdfModal = () => {
    setShowPdfModal(!showPdfModal);
  };

  return (
    <>
      <motion.div
        className="project-card"
        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(59,130,246,0.2)' }}
        transition={{ duration: 0.2 }}
      >
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
      </motion.div>

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
