import React from 'react';
import Card from './Card';
import "./Cardlist.css"
// here we save data from location file but we need to import this from the database
const CardList = ({ location }) => {
  return (
    <div className = "sidebar">
      {
        location.map((user, i) => {
          return (
            <Card
              key={i}
              id={location[i].id}
              name={location[i].name}
              
              />
          );
        })
      }
    </div>
  );
}

export default CardList;