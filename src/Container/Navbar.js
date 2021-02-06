import React from 'react';
import "./Navbar.css"

const Navbar = ({ logout }) => {
  return (
      <div>
          <ul>
                <li  onClick = {logout} className = "active" >Log out </li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
      </div>
    
  );
}

export default Navbar;