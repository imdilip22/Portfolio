import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import clothescraft from '../assets/ClothesCraft.mp4';
import githublink from "../assets/github-light.svg";
import fhut from "../assets/Fhut.mp4"

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: "1. Clothes Craft",
      description: `Cloth Crafts is a clothing website developed
    using Reactjs and Tailwind CSS. It offers a
    user-friendly interface with features like
    personalized recommendations. Leveraging
    React for dynamic rendering and Tailwind CSS
    for styling. The aim is to provide a seamless
    online shopping experience,`,
      image: clothescraft,
      githubLink: "https://github.com/imdilip22/Clothewebsite/tree/master",
      imgAOS: "fade-down-left",
      textAOS: "fade-down-right"
    },
    {
      title: "2. Food Hut",
      description: `Online food delivery website developed using
React, HTML, CSS. The website fetches live
data from Swiggy's API to display a wide range
of restaurant options to users.It is Crafted to
furnish users with precise and current details
regarding the culinary offerings, creating an
informative and engaging platform.`,
      image: fhut,
      githubLink: "https://github.com/imdilip22/FoodHut",
      imgAOS: "fade-down-right",
      textAOS: "fade-down-left"
    },
  ];

  return (
    <section id="projects">
      <div data-aos="zoom-in-down" data-aos-delay="300">
        <p className="section_text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
      </div>

      {projects.map((project, index) => (
        <div className="project" key={index}>
          <p id="pro" className="section_text_p1" data-aos="zoom-in-down">
            <b>{project.title}</b>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                marginLeft: '10px', 
                textDecoration: 'none', 
                display: 'inline-block',
                position: 'relative', /* Ensure relative positioning for absolute positioning of tooltip */
              }}
            >
              <img 
                src={githublink} 
                alt="GitHub Link" 
                style={{ 
                  marginLeft:"20px",
                  width: '40px', 
                  height: '40px', 
                  verticalAlign: 'middle',
                  transition: 'transform 0.3s ease', /* Transition for smooth effect */
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.3)'} /* Scale up on hover */
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'} /* Return to normal size on mouse out */
              />
            </a>
          </p>
          <div className="content">
            <video id="imge" className="image" data-aos={project.imgAOS} data-aos-delay="300" src={project.image} autoPlay muted controls />
            <div id="tex" className="experience-details-container" data-aos={project.textAOS} data-aos-delay="400">
              <div className="about-containers">
                <div className="details-container">
                  <div className="article-container">
                    <p className="section_text_p1_text-container" style={{ border: "2px solid black", borderRadius: "7px", padding: "7px", marginBottom: "35px" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
