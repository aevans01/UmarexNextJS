import React from "react";
import "../styles/Footer.css";
import email from "../assets/email.jpg";
import phone from "../assets/phone.png";
import loc from "../assets/location.jpg";
import building from "../assets/ux_building.jpg";

function Footer(){
    return(
        <div className="footer-container">
            <h1 className="h1">CONTACT INFO</h1>
            <div className="location">
                <img className="loc" src={loc}/>
                <p>7700 Chad Colley Blvd. <br/>Fort Smith, AR 72916</p>
            </div>

            <div className="phoneNum">
                <img className="phone" src={phone}/>
                <p>Phone: (479)-646-4210 <br/>Extension: 7</p>
            </div>

            <div className="emailAddress">
                <img className="email" src={email}/>
                <p>Email: service@umarexusa.com <br/>umarexusa.com</p>
                <img className="building" src={building}/>
            </div>
            
        </div>
    )
}

export default Footer;