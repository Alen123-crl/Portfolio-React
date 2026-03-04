import React, { useState } from "react";
import "./Project.css"; 

function Projects() {
  const [projects] = useState([
{ title: "Neighbourhoodskill exchange platform", tech:"React,Mongodb,Node.js,Express.js",description:"Neighbourhood Skill Exchange Platform is a full-stack web application built using React, Node.js, Express.js, and MongoDB that enables users within a local community to exchange skills and services without monetary transactions. Users can create profiles, list the skills they offer, and search for skills they need. The platform includes secure authentication, profile management, skill filtering by category and location, and request management features. It promotes collaboration, community engagement, and mutual learning by connecting people based on their talents and needs." },
{ 
  title: "Pet Shop Website", 
  tech: "HTML, CSS", 
  description: "A fully responsive multi-page Pet Shop Website developed using HTML and CSS. The website includes separate sections for home, pets listing, services, testimonials, and contact information. It features a clean layout, intuitive navigation bar, search functionality, and structured content sections to improve user experience. The design focuses on responsiveness, visual appeal, and proper alignment using modern CSS techniques. This project helped me strengthen my understanding of page structuring, positioning, styling, and building real-world static websites.",
  link: "https://alen123-crl.github.io/Pet-Shop/" 
},

{ 
  title: "Cake Shop Website", 
  tech: "HTML, CSS", 
  description: "A modern and visually attractive Cake Shop Website built using HTML and CSS. The website showcases different cake products, special offers, featured items, and contact details in a well-organized layout. It includes a responsive design, engaging banner section, product display cards, and neatly structured footer content. The project emphasizes UI design principles, color combination, spacing, and alignment to create a pleasant user experience. Through this project, I enhanced my skills in responsive web design and static website development.",
  link: "https://alen123-crl.github.io/cakeshop/" 
},

{ 
  title: "Employee Registration", 
  tech: "HTML, JavaScript, CSS", 
  description: "An interactive Employee Registration Web Application developed using HTML, CSS, and JavaScript. The system allows users to input employee details through a structured form with real-time client-side validation. JavaScript is used to handle form validation, input checking, and dynamic data interaction to ensure accurate data submission. The interface is designed with proper styling and layout techniques to maintain usability and clarity. This project helped me understand DOM manipulation, event handling, and form validation concepts in JavaScript.",
  link: "https://alen123-crl.github.io/employeeregistration/" 
},

{ 
  title: "Budget Calculator", 
  tech: "HTML, Tailwind CSS, JavaScript", 
  description: "A budget tracking web app to manage income and expenses with real-time calculations.",
  link: "https://alen123-crl.github.io/budget-calculator/" 
},

{ 
  title: "Kids Learning App", 
  tech: "React, JSON Server, MUI", 
  description: "An interactive learning app for kids with dynamic content powered by React and JSON Server.",
  link: "https://github.com/alen123-crl/kidslearningapp" 
},

{ 
  title: "Memory Card Matching Game", 
  tech: "React, MUI", 
  description: "A fun memory card matching game built with React featuring interactive UI components.",
  link: "https://memory-matching-card.netlify.app" 
},
  ]);

  return (
    <div className="projects-container">
      <h1 className="head">My Projects</h1>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <h2>{p.title}</h2>
            <p><b>Tech:</b> {p.tech}</p>
<p><b>description:</b> {p.description}</p>

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
