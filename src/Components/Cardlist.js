import { React } from "react";
import Card from "./Card";
import "./Cardlist.css";
// here we save data from location file but we need to import this from the database
const CardList = ({ lat, lon, locations }) => {
  return (
    <div className="sidebar">
      {console.log(locations)}
      {locations
        .sort((a, b) => (a.d > b.d ? 1 : -1))
        .map((location) => {
          console.log(location.d);
          return (
            <Card key={location.id} id={location.id} name={location.name} />
          );
        })}
    </div>
  );
};

export default CardList;
