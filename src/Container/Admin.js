import React ,{Component} from 'react' 
import {Redirect} from "react-router-dom"
import Navbar from "./Navbar"
import Map from "./Map"


class Admin extends Component{
    constructor(){
        super()
        let a = ""
        let data = localStorage.getItem("mydata")
        data = JSON.parse(data)
        
        if(data !== null){
            a = "admin"
        }



        this.state = {
            test : a 

        }
    }
    logout = () =>{
        localStorage.removeItem("mydata")
        this.setState({test : "logout"})

    }


    render(){
        if(this.state.test === "admin"){
            return(
                <div>
                    {/* <button onClick = {this.logout} className = "btn btn-danger" style={{display: 'flex', justifyContent: 'flex-end'}} >logout</button>                     */}
                    <Navbar logout = {this.logout}/>
                    <Map/>
                    

                </div>
              
            )

        }
        else if(this.state.test === "logout"){
            return(
                <Redirect to = "/"/>
            )

        }
        // else{
        //     <Board/>
        // }
        
    }
} 

export default Admin 