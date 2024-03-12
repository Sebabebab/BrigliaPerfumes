import React, { useState } from 'react';
import './User.css';

const User = () => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const toggleCloseIcon = () => {
    setShowCloseIcon(!showCloseIcon);
  };

  return (
    <div className="user-icon" onClick={toggleCloseIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#DFC385"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`feather ${showCloseIcon ? 'rotate180' : ''}`}
      >
        {!showCloseIcon && (
          <path d="M12 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 10c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4z"></path>
        )}
        {showCloseIcon && (
          <g>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </g>
        )}
      </svg>
    </div>
  );
}

export default User;
