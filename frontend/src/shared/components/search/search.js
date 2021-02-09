import React from 'react';

import './search.css';

export const Search = ({ placeholder,handleChange, handleClick }) => (
    <div className="search">
        <input 
            type="text" 
            className="search-form" 
            name="search" 
            placeholder={placeholder} 
            onChange={handleChange}/>
        <button type="button"   
            className="search-button" 
            onClick={handleClick}>
                Search
        </button>
    </div>
);
export default Search;





