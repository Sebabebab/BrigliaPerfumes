  import React, { useState } from 'react';
  import './SearchBar.css'; 

  const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchTerm);
    };

    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search our catalogue"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    );
  };

  export default SearchBar;
