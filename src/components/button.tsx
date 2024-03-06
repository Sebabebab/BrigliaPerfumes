import React from 'react';
import './buttontext.css';

const Buttontext = ({ href = "#", label = "Buttontext" }) => {
  return (
    <div className="textbutton-wrapper">
      <a href={href} className="textbutton">
        {label}
      </a>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Buttontext;
