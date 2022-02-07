import React from "react";
import Timeline from './Timeline';
import logo from '../assets/ux_zeroed_in_stacked.png';
import '../styles/AboutUs.css';
import story from '../assets/the_umarex_story.png';

function AboutUs(){
    return(
        <div className="AboutUsContainer">
            <div className="Umarex-USA">
                <img className="zeroed-in" src={logo}/>
                <h1>UMAREX® USA</h1>
                <p>Few brands are owned by family owned companies anymore, but that's 
                    not the case here. We are family owned. Our owners believe in 
                    family values and encourage us to provide you, our customer, with
                    recreational products you, your family, and friends can use to
                    enjoy and experience the wild outdoors. Check out our vast offering:
                    Axeon Optics, Umarex Airguns, Exude Lights, Elite Force Airsoft,
                    Rekt Dart Launchers, T4E Training.
                </p>
            </div>
            <img className="umarex-story" src={story}/>
            <Timeline />
            
        </div>
    )
}

export default AboutUs;