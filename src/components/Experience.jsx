import React, { useState } from 'react';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const experiences = [
    {
      title: "Student Intern - Innovating for National Security (i4NS)",
      company: "United States Department of Defense (DoD)",
      period: "Sep 2024 - Dec 2024",
      location: "La Jolla, CA",
      bullets: [
        "Contributed to the development of a Venture Capital (VC) Dashboard to assist the Department of Defense (DoD) in identifying mature and emerging service-related technologies within investor portfolios.",
        "Applied the Lean LaunchPad methodology to help teams rapidly address complex challenges, iterate on solutions, and deliver customer-tailored minimum viable products.",
        "Fostered connections between military technology innovations and defense-focused venture capitalists, as well as entrepreneurs, to promote civilian-military technological advancements.",
        "Streamlined the transition of internal R&D projects into market-ready solutions, enhancing operational efficiency and innovation within the DoD."
      ]
    },
    {
      title: "Undergraduate Research IT Assistant",
      company: "Ross Lab UCSD Health",
      period: "Sep 2022 - Sep 2024",
      location: "La Jolla, CA",
      bullets: [
        "Proficiently contributed to data collection, organization, and secure storage, prioritizing data security and implementing robust backups for data integrity assurance.",
        "Provided comprehensive support for essential biology research software applications, including proficiency in tools like PYRAT and various bioinformatics applications.",
        "Ensured optimal performance of lab computers and software through regular updates and maintenance, facilitating efficient data analysis and research tasks."
      ]
    },
    {
      title: "Web Developer Frontend",
      company: "Cornerstone Community Consultants (CCC)",
      period: "March 2022 - Sep 2024",
      location: "La Jolla, CA",
      bullets: [
        "Revamped the user interface of the CCC Organization Site, introducing advanced SCSS styling and smooth transitions for a modern and visually appealing design.",
        "Created and delivered websites for a broad clientele, encompassing local small businesses, startups, non-profit organizations, professional service providers, and real estate firms.",
        "Spearheaded the adoption of responsive design principles and Bootstrap framework, resulting in improvement in mobile responsiveness and user experience."
      ]
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="location">{exp.location}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <div className="experience-description">
                <ul className={`experience-bullets ${expandedItems[index] ? 'expanded' : 'collapsed'}`}>
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
                <button 
                  className="expand-button"
                  onClick={() => toggleExpanded(index)}
                >
                  {expandedItems[index] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 