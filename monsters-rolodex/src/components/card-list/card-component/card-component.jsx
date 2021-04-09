import React from 'react';
import './cards.styles.css';

function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
      <h1>{props.monster.name}</h1>
    </div>
  );
}

export default Card;
