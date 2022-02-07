import React from "react";
import "../styles/TimelinePiece.css"

function TimelinePiece({year,optionalImage,text}){
    return(
        <div className="card">
            <h1 className="year">{year}</h1>
            <img className="image"{...optionalImage} />
            <p className="text">{text}</p>
        </div>
        
    )
}

export default TimelinePiece