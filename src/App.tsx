import React from 'react';
import './App.css';
import Pouring from './Bilder/pouring.jpg';
import PouringPhone from './Bilder/pouringphone.jpg';
import PouringIpad from './Bilder/pouringipad.jpg';
import TopBar from './components/TopBar';
<<<<<<< Updated upstream
=======
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Login} from './pages/login';
import { Home } from './pages/home';
import Forms from './components/Forms';
>>>>>>> Stashed changes

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
      <Forms />
    </div>
  );
}

export default App;
