import React, { useState } from 'react';
import './searchbarbutton.css';

const SearchBarButton = ({ onClick }) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleClick = () => {
    setIsSearching(!isSearching);
    onClick();
  };

  return (
    <div className="search-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#DFC385"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="search-button"
        onClick={handleClick}
        style={{ position: 'absolute', left: '20px', top: '30px', transition: 'transform 0.3s ease' }}
        transform={isSearching ? 'rotate(45) scale(1.2)' : ''}
      >
        {isSearching ? (
          <>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="12" y1="5" x2="12" y2="19" />
          </>
        ) : (
          <>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </>
        )}
      </svg>
      {isSearching && <input type="text" className="search-bar" placeholder="Search..." />}
    </div>
  );
};

export default SearchBarButton;
