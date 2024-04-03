import React, { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={setIsOpen}>
        <div className="overlay-content">
        <a href="">HOME</a>
        <a href="#">EXPLORE</a>
        <a href="#">SAMPLES</a>
        <a href="#">STORES</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT US</a> 
        </div>
      </div>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="burger-icon"
        >
          <line x1="2" y1="6" x2="22" y2="6" className="lineburger" />
          <line x1="2" y1="12" x2="22" y2="12" className="lineburger" />
          <line x1="2" y1="18" x2="22" y2="18" className="lineburger" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="close-icon"
        >
          <line x1="6" y1="6" x2="18" y2="18" className="linex" />
          <line x1="6" y1="18" x2="18" y2="6" className="linex" />
        </svg>  
      </div>
    </div>
  );
};

export default BurgerMenu;
