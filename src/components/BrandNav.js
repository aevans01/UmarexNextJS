import React from "react";
import '../styles/BrandNav.css';
function BrandNav(){
    return(
        <div className="BrandNavContainer">
            <div className="BrandNav">
                <ul>
                    <li><a href="">ALL BRANDS</a></li>
                    <li><a href="">UMAREX</a></li>
                    <li><a href="">AXEON OPTICS</a></li>
                    <li><a href="">ELITE FORCE</a></li>
                    <li><a href="">REKT</a></li>
                    <li><a href="">P2P</a></li>
                    <li><a href="">T4E</a></li>
                </ul>
            </div>
        </div>
    )
}

export default BrandNav;