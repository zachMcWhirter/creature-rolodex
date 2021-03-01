import React from 'react';

import './card-component.styles.css';

export const Card = (props) => (
  <div className='card-container'>

    {/* Passing in the ${props.monster.id} allows 
    robohash to generate a unique image for each 
    user based on the id of that user */}
    <img 
      alt='monster' 
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
)