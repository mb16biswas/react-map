import React from 'react';

const Card = ({ name}) => {
  return (
    <div className='tc grow bg-light-blue br10 pa2 ma2 dib bw2 shadow-2'>
      {/* <img alt='robots' src= {`https://robohash.org/${id}?size=200x200`}/> */}
      <div>
        <h2>{name}</h2>
        
      </div>
    </div>
  );
}

export default Card;


