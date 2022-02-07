import React from "react";
import TimelinePiece from "./TimelinePiece";
import "../styles/Timeline.css";
import logo from "../assets/Umarex1972_Logo.png";
import logo2 from "../assets/UmarexUSA_Logo.png";
import logo3 from "../assets/ux_airguns_stacked.jpg";
function Timeline(){
    return(
        <><div className="timeline-grid">
            <div className="one">
                <img className="oneImg" src={logo}/>
                <TimelinePiece
                    year={"1972"}
                    text={"Wulf-Heinz Pflaumer & Franz Wonisch are working on a venture that would come to be called Umarex."} />
            </div>

            <div className="two">
                <TimelinePiece
                    year={"1993"}
                    text={"Umarex acquires world renowned arms manafacturer, Carl Walther"} />
            </div>
            <div className="three">
            <img className="threeImg" src={logo2}/>
                <TimelinePiece
                    year={"2006"}
                    text={"RUAG Ammotec USA, a US distributor of RWS air rifles, is purchased by PW Intl GmbH, moved to Fort Smith, Arkansas and renamed to Umarex USA."} />
            </div>
            <div className="four">
                <TimelinePiece
                    year={"2008"}
                    text={"Umarex USA expands air rifle line with the introduction of Ruger, Walther and Hammerli."} />
            </div>
            <div className="five">
                <TimelinePiece
                    year={"2009"}
                    text={"Umarex USA continues to grow doubling sales over 2008 and breaks ground on a new facility"} />
            </div>
            <div className="six">
            <TimelinePiece
                year={"2010"}
                text={"Umarex USA moves into a new manafacturing and warehouse facility at Chaffee Crossing in Fort Smith, Arkansas."} />
        </div>
        <div className="seven">
                <TimelinePiece
                    year={"2013"}
                    text={"Umarex USA welcomes Walther Arms to their campus in Fort Smith, Arkansas, and breaks ground on a 7 million dollar warehouse expansion."} />
            </div>
            <div className="eight">
            <img className="eightImg" src={logo3}/>
                <TimelinePiece
                    year={"2014"}
                    text={"Umarex USA introduces the UX mark. The UX is incorporated into airguns and marketing materials creating a powerful mark that is eye-catching and memorable."} />
            </div>
            <div className="nine">
                <TimelinePiece
                    year={"TODAY"}
                    text={"While Umarex remains the \"King of Replicas\" in airguns, its patented technology like the safety system and dual round magazine of the Umare Hammer couple with modern-day air filling solutions and unique optic intellectual properties insures Umarex continues to be zeroed in."} />
            </div>
        </div>
        </>
    )
}

export default Timeline;