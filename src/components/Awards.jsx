import React, { useState } from 'react';

const Awards = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  const certificate = {
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    organization: "Udemy",
    year: "2023",
    description: "Comprehensive Python programming course covering fundamentals to advanced concepts including OOP, game development, GUI creation, and professional Python applications.",
    image: "/src/assets/images/zero_to_hero_python.jpg"
  };

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  return (
    <section id="awards" className="awards">
      <h2>Certificates</h2>
      <div className="awards-grid">
        <div className="award-card">
          <div className="award-header">
            <h3>{certificate.title}</h3>
            <span className="organization">{certificate.organization}</span>
            <span className="year">{certificate.year}</span>
          </div>
          <p>{certificate.description}</p>
          <button className="view-certificate-btn" onClick={toggleCertificate}>
            📜 View Certificate
          </button>
        </div>
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