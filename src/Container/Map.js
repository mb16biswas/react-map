import React, { Component } from 'react';
import "../Components/Cardlist"
import "./Map.css";
import CardList from '../Components/Cardlist';
import Mapcomp from "../Components/Mapcomp"
import {location} from "../Components/Location"

class Map extends Component{
  constructor() {
    super()
    const a = location
    console.log(a)
    this.state = {
      location : a , 
      lan : "" , 
      lon : "" 
    }
  }
  showPosition = (position) => {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    this.setState({lan : position.coords.latitude})
    this.setState({lon :position.coords.longitude })
  } 


  test = () =>{
    if (navigator.geolocation){
      console.log(navigator.geolocation.getCurrentPosition(this.showPosition))
    }
 
 
 
  }

 



  render(){
    return (
      <div className = "app">
        <div className = "appbody">
          
            {/* <button  onClick = {this.test}  >click</button> */}
        
            <div >
              <button  className = "but" onClick = {this.test}   >Find  Your  Nearest  Store </button>
              <CardList  className = "Cardlist" location =  {this.state.location}/>

            </div>
           
            {/* <Map className = "Map"/> */}


          
          <Mapcomp />

        </div>
        
      </div>
     
      
    );

  }
 
}

export default Map;
