// import React from 'react';
// import "./Map_com.css"

// const Mapcomp = () => {
//   return (
//     <div className='map_main'>
//         <h1>map</h1>
     
//     </div>
//   );
// }

// export default Mapcomp;



import React, { Component } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
// import "./app.css";
import "./Map_com.css"
import L from 'leaflet'
import leafGreen from './leaf-green.png';
import leafRed from './leaf-red.png';
import leafOrange from './leaf-orange.png';
import leafShadow from './leaf-shadow.png';
//22.496021521659166, 88.37086241031123 ju
// 22.518698216758583, 88.35582741428307 tandur
//22.530351034822584, 88.35435486798389  my sch
//22.52995215773111, 88.3527482247907  rasbhihari 
//22.539975378754562, 88.33125587402752 alipur
//22.456996959515504, 88.30443391031046 3a bus 

class Mapcomp extends Component{
  state = {
    greenIcon: {
      lat: 22.496021521659166,
      lng: 88.37086241031123,
    },
    redIcon: {
      lat: 22.518698216758583,
      lng: 88.35582741428307,
    },
    orangeIcon: {
      lat: 22.530351034822584,
      lng: 88.35435486798389,
    },
    orangeIcon1: {
      lat: 22.52995215773111,
      lng: 88.3527482247907,
    },
    orangeIcon2: {
      lat: 22.539975378754562,
      lng: 88.33125587402752,
    },
    orangeIcon3: {
      lat: 22.456996959515504,
      lng: 88.30443391031046,
    },

    

    zoom: 13
  }


  grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76]
  });

  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    const positionOrangeIcon1 = [this.state.orangeIcon1.lat, this.state.orangeIcon1.lng];
    const positionOrangeIcon2 = [this.state.orangeIcon2.lat, this.state.orangeIcon2.lng];
    const positionOrangeIcon3 = [this.state.orangeIcon3.lat, this.state.orangeIcon3.lng];
    return(
      // <div className = "map_main">
      //   <h1>aaaaaaaaaaaaaaaaa</h1>
        <MapContainer  className = "leaflet-container"  center={positionGreenIcon} zoom={this.state.zoom} scrollWheelZoom={false} >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={positionGreenIcon} icon={this.grenIcon}>
                <Popup>
                  jadavpur
                </Popup>
              </Marker>
              <Marker position={positionRedIcon} icon={this.redIcon}>
                <Popup>
                  tollygunge
                </Popup>
              </Marker>
              <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
                <Popup>
                    Ballygunge
                </Popup>
              </Marker>
              <Marker position={positionOrangeIcon1} icon={this.grenIcon}>
                <Popup>
                    Rasbhihari
                </Popup>
              </Marker>
              <Marker position={positionOrangeIcon2} icon={this.redIcon}>
                <Popup>
                    alipur
                </Popup>
              </Marker>
              <Marker position={positionOrangeIcon3} icon={this.orangeIcon}>
                <Popup>
                    thakurpukur
                </Popup>
              </Marker>

        </MapContainer>
       

      // </div>
     
    )
  }
}
export default Mapcomp

