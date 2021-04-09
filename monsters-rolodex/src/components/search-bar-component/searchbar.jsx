import React from 'react';
import './search-bar-styles.css';

function Searchbar({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Searchbar;
