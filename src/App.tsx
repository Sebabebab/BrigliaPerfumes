import React from 'react';
import './App.css';
import Logo from './Bilder/Logo.png';
import Pouring from './Bilder/pouring.jpg';
import PouringPhone from './Bilder/pouringphone.jpg';
import PouringIpad from './Bilder/pouringipad.jpg';
import Buttontext from './components/button';
import BurgerMenu from './components/Burgermenu';
import SearchBarButton from './components/searchbarbutton'; 
import SearchBar from './components/SearchBar';

function App() {
  const handleSearch = (searchTerm: any) => {
    console.log('Searching for:', searchTerm);
  };
  
  return (
    <div className="App">
      <header className="top-bar">
        <img src={Logo} alt="Logo" className="Logo-Img" />
        <SearchBarButton onClick={handleSearch} />  
        <BurgerMenu />
      </header>
      <header className="top-bar2">
      <SearchBar onSearch={handleSearch} />
        <Buttontext href="" label="EXPLORE" />
        <Buttontext href="" label="SAMPLES" />
        <Buttontext href="" label="STORES" />
        <Buttontext href="" label="ABOUT" />
    
      </header>
      <img src={Pouring} alt="Frontpage" className="pouring" />
      <img src={PouringPhone} alt="Frontpage" className="pouringphone" />
      <img src={PouringIpad} alt="Frontpage" className="pouringipad" />
    </div>
  );
}

export default App;
