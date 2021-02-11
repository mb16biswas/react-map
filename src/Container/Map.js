import React, { Component } from "react";
import "../Components/Cardlist";
import "./Map.css";
import CardList from "../Components/Cardlist";
import Mapcomp from "../Components/Mapcomp";
import { locations } from "../Components/Location";

class Map extends Component {
  constructor() {
    super();
    const a = locations;
    // console.log(a);
    this.state = {
      locations: a,
      lat: "",
      lon: "",
      done: false,
    };
  }
  showPosition = (position) => {
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    // "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    //mylocation

    // this.setState({ lat: 22.839295999999997 });
    // this.setState({ lon: 88.408064 });
    this.setState({ lat: position.coords.latitude });
    this.setState({ lon: position.coords.longitude });
    //coordinates of kalighat for testing
    // this.setState({ lat: 22.517 });
    // this.setState({ lon: 88.3459 });
    //dum dum coords
    // this.setState({ lat: 22.642 });
    // this.setState({ lon: 88.4312 });
    locations.forEach((location) => {
      const d = getDistanceFromLatLonInKm(
        this.state.lat,
        this.state.lon,
        location.loc[0],
        location.loc[1]
      );
      location.d = d;
    });
    console.log(locations);
    this.setState({ done: true });
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1); // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
  };

  test = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }

  render() {
    return (
      <div className="app">
        <div className="appbody">
          {/* <button  onClick = {this.test}  >click</button> */}

          <div>
            <button className="but">Find Your Nearest Store</button>
            {this.state.done && (
              <CardList className="Cardlist" locations={this.state.locations} />
            )}
          </div>

          {/* <Map className = "Map"/> */}

          <Mapcomp />
        </div>
      </div>
    );
  }
}

export default Map;
