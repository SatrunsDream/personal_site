import React from 'react';
import lebronImage from '../assets/images/lebron.jpg';

const Hero = () => {
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
              <p>Currently in my 4th year at UCSD studying Data Science, I'm drawn to Bayesian statistics and bioinformatics. I'm particularly drawn to biological data and hope to pursue a master's degree in data science to further explore the intersection of statistics and life sciences.</p>
            </div>
            <a 
              href="/Sardor_DS_Resume.pdf" 
              download 
              className="download-button"
            >
              📄 Download Data Science Resume
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero; 