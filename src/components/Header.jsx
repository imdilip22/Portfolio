import { useState } from 'react';
// import Dlogo from "../assets/Dlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <div className="title-container">
        <h1 onClick={()=>{
            window.location.reload();
        }} style={{
          fontSize:"2rem",fontFamily:"sans-serif"
        }}>Dilip Ram</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <ul className="header-list">
          <a href="#home-container"><li className="header-item">About</li></a>
          <a href="#skill"><li className="header-item">Skill</li></a>
          <a href="#Education"><li className="header-item">Education</li></a>
          <a href="#projects"><li className="header-item">Projects</li></a>
          <a href="#contact"><li className="header-item">Contact</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
