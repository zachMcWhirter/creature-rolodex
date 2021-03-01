import React from 'react';

import './search-box.styles.css';

  // This will be a Functional Component (rather than a Class-Based Component)
  // Use Functional Components when you don't need access to state or life-cycle methods. 

  // Destructuring the props values allows us to use them dynamically in the input below
export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);