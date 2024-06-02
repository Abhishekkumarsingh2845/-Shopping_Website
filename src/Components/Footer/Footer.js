import React from "react";
import "./Footer.css";
import arrow from "./../../Assets/Img/icon-send.png";

function Footer() {
  return (
    <div className="main">
      <div className="first">
        <p className="ee">Exlcusive</p>
        <p  className="er">Subscribe</p>
        <p  className="et">Get 10% off your first order</p>
        <div className="cc">
          <input className="enteremail" placeholder="Enter Your Email" />
          <img src={arrow} className="arr" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
