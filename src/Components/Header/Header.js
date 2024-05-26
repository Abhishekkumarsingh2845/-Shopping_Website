import React from "react";

import "./Header.css";

function Header() {
  return (
    <div>
      
      <div className="Main">
        <div className="Secondmain">
          <div className="first">
            <p className="firstT">Exclusive</p>
          </div>
          <div className="second">
         <p className="ss">Home</p>
         <p className="ss">Contact</p>
         <p className="ss">About</p>
         <p className="ss">Signup</p>
          </div>
          <div className="third">
            <input 
            className="inp"
            placeholder="What are you looking for"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
