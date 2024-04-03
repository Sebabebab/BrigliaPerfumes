import React, { useState } from 'react';
import './UserIcon.css';

const UserIcon = ({ width, height, color }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 500); 
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height={height || "30"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DFC385"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`user-icon ${isSpinning ? 'spin-animation' : ''}`}
      onClick={handleClick}
    >
      <circle cx="11" cy="11" r="8"/>
      <rect x="1px" y="23px" width="20" height="10" rx="7" ry="7"/>
    </svg>
  );
};

export default UserIcon;
