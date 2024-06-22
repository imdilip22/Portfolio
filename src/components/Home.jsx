import { TypeAnimation } from "react-type-animation";
import githublight from "../assets/github-light.svg";
import leetcodelogo from "../assets/leetcodelogo.png";
import profile from "../assets/WhatsApp.jpeg";
// import cv from '../assets/'
const Home = () => {
  const fun = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <>
    
      <div id="home-container">
      <div data-aos="fade-right" data-aos-delay="600" >
        <div className="left">
          <h1
            className="name"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign:"center",
              color:"black"
            }}
          >
            
            
            Welcome <br /> to My portfolio
          </h1>
          <h2
            className="name"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            
            
            I'm a
          </h2>
          <div style={{ textAlign: "center",margin:"20px" }}>
            <TypeAnimation
              sequence={[
                'Web Developer', // Types 'Web Developer'
                3000, // Waits 1s
                'Tech Enthusiast', // Deletes 'Web Developer' and types 'Frontend Enthusiast'
                3000, // Waits 2s
                'Problem Solver', // Types 'Problem Solver' without deleting 'Frontend Enthusiast'
                3000, // Waits 2s
                'Web Developer', // Deletes 'Problem Solver' and types 'Web Developer' again
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
          </div>

          <ul className="social-links">
            <li>
              <a
                href="https://github.com/imdilip22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githublight} alt="" style={{}} />
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/user/diliprazino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                  alt="gfg"
                  style={{
                    padding: "11px",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://leetcode.com/u/im_dilip_22/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leetcodelogo}
                  alt="gfg"
                  style={{
                    width: "40px",
                  }}
                />
              </a>
            </li>
          </ul>
          <div className="texta">
            <p className="description">
            I'm a Computer Engineering student at GEC Rajkot going to graduate   in 2025. Dedicated to leveraging technology for real-world solutions, I am a strong team player with a passion for innovation and problem-solving. I am eager to contribute to dynamic projects in the field.
            </p>
          </div>

          <button className="resume-button" onClick={fun}>
            Resume
          </button>
        </div>
        </div>
        
        <div data-aos="fade-left" data-aos-delay="600" 
        style={{
          paddingLeft:"70px",
          
          }}>
          <img
            className="profile-pic"
            src={profile}
            alt="Profile"
            style={{
              
              border:"2px solid black",
             paddingBottom:"20px",
              borderRadius:"50%",
              height:"400px"

              
            }}
          />

        </div>
      </div>
    </>
  );
};

export default Home;