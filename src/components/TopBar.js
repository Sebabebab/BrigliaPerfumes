import React from 'react';
import Logo from '../Bilder/Logo.png';
import SearchBarButton from './searchbarbutton';
import BurgerMenu from './Burgermenu';
import Buttontext from './button';
import SearchBar from './SearchBar';
import './TopBar.css';
import UserIcon from './UserIcon';

const TopBar = ({ handleSearch }) => {
  return (
    <div>
      <header className="top-bar">
          <img src={Logo} alt="Logo" className="Logo-Img" />
        <SearchBarButton onClick={handleSearch} />
        <UserIcon />
        <BurgerMenu />
      </header>
      <header className="top-bar2">
        <SearchBar onSearch={handleSearch} />
        <Buttontext href="" label="EXPLORE" />
        <Buttontext href="" label="SAMPLES" />
        <Buttontext href="" label="STORES" />
        <Buttontext href="" label="ABOUT" />
      </header>
    </div>
  );
};

export default TopBar;
