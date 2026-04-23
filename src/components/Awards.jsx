import React, { useState } from 'react';
import { motion } from 'framer-motion';
import certificateImage from '../assets/images/zero_to_hero_python.jpg';

const Awards = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const certificate = {
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    organization: "Udemy",
    year: "2023",
    description: "Comprehensive Python programming course covering fundamentals to advanced concepts including OOP, game development, GUI creation, and professional Python applications.",
    image: certificateImage
  };

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  return (
    <section id="awards" className="awards">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>
      <div className="awards-grid">
        <motion.div
          className="award-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(59,130,246,0.2)' }}
        >
          <div className="award-header">
            <h3>{certificate.title}</h3>
            <span className="organization">{certificate.organization}</span>
            <span className="year">{certificate.year}</span>
          </div>
          <p>{certificate.description}</p>
          <button className="view-certificate-btn" onClick={toggleCertificate}>
            📜 View Certificate
          </button>
        </motion.div>
      </div>

      {showCertificate && (
        <div className="certificate-modal" onClick={toggleCertificate}>
          <div className="certificate-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={toggleCertificate}>×</button>
            <img src={certificate.image} alt="Python Bootcamp Certificate" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Awards;
