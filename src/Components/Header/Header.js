import React from "react";
import searchImage from "./../../Assets/Img/search.png";
import whislist from './../../Assets/Img/e-commerce.png'
import cart from "./../../Assets/Img/shopping-cart (1).png"

import "./Header.css";

function Header() {
  return (
    <div>
      <div className="Main">
        <div className="SecondMain ">
          <div className="firsttt">
            <p className="firstContxt">Exlcusive</p>
          </div>
          <div className='secondttt'>
          <li><a href="#home" className="home-link">Home</a></li>
        <li><a href="#about" className="home-link">About</a></li>
        <li><a href="#services" className="home-link">Services</a></li>
        <li><a href="#contact" className="home-link">Contact</a></li>
          </div>
          <div className='thirdttt'>
             <input type="text"
             className="inputtyp"
             placeholder="What are You Looking for?"/>
             <img src={searchImage} className="seachbar"/>
             <div className="twoimg">
             <img src={whislist} className="whlist"/>
             <img src={cart} className="whlist"/>
             </div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
