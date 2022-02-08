import React from "react";
import email from "../assets/email.jpg";
import phone from "../assets/phone.png";
import loc from "../assets/location.jpg";
import building from "../assets/ux_building.jpg";

function Footer() {
    return (
        <footer className="page-footer font-small blue text-white pt-4 bg-danger">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">CONTACT INFO</h5>
                        <ul className="list-unstyled">

                            <li class="text-white"><img className="loc" src={loc} /> 7700 Chad Colley Blvd</li>
                            <li class="text-white"><img className="phone" src={phone} />Phone: (479) 646-4210 Extension: 7</li>
                            <li class="text-white"><img className="email" src={email} />service@umarexusa.com</li>
                        </ul>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-1 mb-md-0 mb-3">
                        <img src={building} />
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                Copyright © 2022 Umarex USA. All rights reserved.
            </div>

        </footer>
        /*<div className="footer-container">
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
                
            </div>
            <img className="building" src={building}/>
        </div>*/
    )
}

export default Footer;