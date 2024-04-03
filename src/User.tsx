import React from 'react';
import './App.css';
import TopBar from './components/TopBar';

function App() {
  const handleSearch = (searchTerm: any) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="App">
      <TopBar handleSearch={handleSearch} />
    </div>
  );
}

export default App;
