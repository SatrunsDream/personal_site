import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        style={{ width: 420, height: 420, top: '-8%', right: '-4%', background: 'rgba(59,130,246,0.15)', borderRadius: '50%', filter: 'blur(70px)', position: 'absolute', pointerEvents: 'none' }}
        animate={{ x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        style={{ width: 320, height: 320, bottom: '4%', left: '-4%', background: 'rgba(30,64,175,0.18)', borderRadius: '50%', filter: 'blur(60px)', position: 'absolute', pointerEvents: 'none' }}
        animate={{ x: [0, -18, 0], y: [0, 22, 0], scale: [1, 0.92, 1] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        style={{ width: 260, height: 260, top: '38%', right: '22%', background: 'rgba(102,126,234,0.12)', borderRadius: '50%', filter: 'blur(50px)', position: 'absolute', pointerEvents: 'none' }}
        animate={{ x: [0, 14, -10, 0], y: [0, -14, 10, 0], scale: [1, 1.06, 0.94, 1] }}
        transition={{ duration: 17, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      <div className="hero-content">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={lebronImage} alt="Sardor Sobirov" />
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          <h1>Hi, I'm Sardor</h1>
          <p>Full-Stack Developer & Data Scientist</p>
          <div className="hero-summary">
            <p>I'm a CS student at UCSD interested in Bayesian statistics and geospatial analysis. I build probabilistic models that quantify uncertainty rather than hide it, using tools like PyMC, hierarchical models, and spatial priors to answer questions that point estimates can't.</p>
            <p>On the GIS side, I work with spatial data at scale, from census-tract-level transit accessibility to county-wide wildfire anomaly detection, combining tools like QGIS, MapLibre-GL, and D3 to turn geographic complexity into interactive, interpretable dashboards.</p>
          </div>
          <motion.button
            type="button"
            onClick={() => navigate('/resume')}
            className="download-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            📄 See Resume
          </motion.button>
        </motion.div>
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
