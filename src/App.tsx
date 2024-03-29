import React from 'react';
import './App.css';
import Pouring from './Bilder/pouring.jpg';
import PouringPhone from './Bilder/pouringphone.jpg';
import PouringIpad from './Bilder/pouringipad.jpg';
import TopBar from './components/TopBar';

function App() {
  const handleSearch = (searchTerm: any) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="App">
      <TopBar handleSearch={handleSearch} />
      <img src={Pouring} alt="Frontpage" className="pouring" />
      <img src={PouringPhone} alt="Frontpage" className="pouringphone" />
      <img src={PouringIpad} alt="Frontpage" className="pouringipad" />
    </div>
  );
}

export default App;
