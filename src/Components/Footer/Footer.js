import React from "react";
import "./Footer.css";
import arrow from "./../../Assets/Img/icon-send.png";
import appstore from "./../../Assets/Img/appstore.png";
import playstore from "./../../Assets/Img/playstore.png"
import code from "./../../Assets/Img/qrcode.png"

function Footer() {
  return (
    <div className="main">
      <div className="first">
        <p className="ee">Exlcusive</p>
        <p className="er">Subscribe</p>
        <p className="et">Get 10% off your first order</p>
        <div className="cc">
          <input className="enteremail" placeholder="Enter Your Email" />
          <img src={arrow} className="arr" />
        </div>
      </div>

      <div className="first">
        <p className="ee">Support</p>
        <p className="er">
          D-444 konark Enclave sector 17 vassundhara Ghaziabad
        </p>
        <p className="et">Singhrnq231217@gmail.com</p>
        <p className="et">+91 9026679170</p>
      </div>

      <div className="first">
        <p className="ee">Account</p>
        <p className="er">
        My Account
        </p>
        <p className="et">Login/Register</p>
        <p className="et">Cart</p>
        <p className="et">Whishlist</p>
        <p className="et">Shop</p>
      </div>
      <div className="first">
       
        <p className="er">
      Quick Links
        </p>
        <p className="et">Privacy Policy</p>
        <p className="et">Terms of Use</p>
        <p className="et">FAQ</p>
        <p className="et">Contact</p>
      </div>
      <div className="first">
       
       <p className="er">
     Download App
       </p>
       <p className="et">Save 3$ with New App store</p>
       <div className="rr">
       <img src={code} className="code" />
       <div className="ap">
       <img src={appstore} className="store" />
       <img src={playstore} className="store" />
       </div>
       </div>
     </div>
    </div>
  );
}

export default Footer;
