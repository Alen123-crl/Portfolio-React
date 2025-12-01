import React, { useState } from "react";
import "./Project.css"; 

function Projects() {
  const [projects] = useState([
    { title: "Pet Shop Website", tech:"HTML CSS", link:"https://alen123-crl.github.io/Pet-Shop/" },
    { title: "Cake Shop Website", tech:"HTML CSS", link:" https://alen123-crl.github.io/cakeshop/" },
    { title: "Employee Registration", tech:"Html,Javascript,Css", link:"https://alen123-crl.github.io/employeeregistration/" },
    { title: "Budget Calculator", tech:"HTML,Tailwind Css,Javascript", link:"https://alen123-crl.github.io/budget-calculator/" },
    { title: "Habit Tracker", tech:"React,Django", link:"https://github.com/yourname/habittracker" },
    { title: "Kids Learning App", tech:"React,Json server,MUI", link:"https://github.com/alen123-crl/kidslearningapp" },
    { title: "Memory Card Matching Game", tech:"React,MUI", link:"https://memory-matching-card.netlify.app" },
  ]);

  return (
    <div className="projects-container">
      <h1 className="head">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h2>{p.title}</h2>
            <p><b>Tech:</b> {p.tech}</p>

            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
