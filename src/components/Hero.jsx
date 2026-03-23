import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import lebronImage from '../assets/images/lebron.jpg';

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/resume') {
      setShowResumeModal(true);
    }
  }, [location.pathname]);

  const closeResumeModal = () => {
    setShowResumeModal(false);
    if (location.pathname === '/resume') {
      navigate('/');
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={lebronImage} alt="Sardor Sobirov" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm Sardor</h1>
          <p>Full-Stack Developer & Data Scientist</p>
          <div className="hero-summary">
            <p>When I'm not diving into data, you'll find me lifting weights, experimenting in the kitchen, or exploring the great outdoors through backpacking adventures. I believe in living a balanced life where both physical and mental growth go hand in hand.</p>
            <p>Currently in my 4th year at UCSD studying Data Science, I'm drawn to Bayesian statistics and bioinformatics. Particularly intrested in biological data and hope to pursue a master's degree in data science to further explore the intersection of statistics and life sciences.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/resume')}
            className="download-button"
          >
            📄 See Resume
          </button>
        </div>
      </div>

      {showResumeModal && (
        <div className="certificate-modal" onClick={closeResumeModal}>
          <div className="certificate-content pdf-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeResumeModal}>×</button>
            <iframe
              src="/Sardor_DS_Resume.pdf"
              title="Resume"
              className="pdf-viewer"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero; 