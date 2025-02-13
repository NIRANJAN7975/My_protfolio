import React, { useEffect } from 'react';
import '../styles.css'; // Import styles for background boxes and general layout
import rail from './rail.jpg'; // Import the image for GitHub
import etagImage from './cow.jpg'; // Import the image for E-Tags for Cattle

function Projects() {
  useEffect(() => {
    // Function to animate boxes based on mouse movement
    const handleMouseMove = (e) => {
      const boxes = document.querySelectorAll('.background-box');
      
      boxes.forEach((box, i) => {
        const speed = (i + 1) * 2; // Varying speed for each box
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        // Applying transform to each box
        box.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projectList = [
    {
      name: "RailConnect",
      description: "Developed a Android App for the railway passengers to Book tickets, ML based Sos Emergency Feature, Oder healty food and Community chat, This app designed to overcome the present problems.",
      githubLink: "https://github.com/NIRANJAN7975/Niranjan_trian",
      image: rail // Image for GitHub project
    },
    {
      name: "E-Tags for Cattle",
      description: "Developed an advanced livestock management system using e-tags to enhance the tracking, monitoring, and management of cattle.",
      githubLink: "https://github.com/jeevankumar-n/cattle-management",
      image: etagImage // Image for E-Tags for Cattle project
    },
    // Add more projects as necessary
  ];

  return (
    <div className="projects">
      <ul className="project-list">
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {/* 3D animated background boxes */}
      <div className="background-box box-1"></div>
      <div className="background-box box-2"></div>
      <div className="background-box box-3"></div>
      <div className="background-box box-4"></div>
      <div className="background-box box-5"></div>
      <div className="background-box box-6"></div>
      <div className="background-box box-7"></div>
    </div>
  );
}

export default Projects;