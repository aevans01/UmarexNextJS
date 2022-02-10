import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
} from "reactstrap";
function TimelinePiece({ year, title, optionalImage, optionalImage2, text, className1, className2 }) {
    return (
        <div className="cardContainer">
            <Card style={{ width: '18rem' }}>
                <CardImg className={className1} src={optionalImage} />
                <CardBody >
                    <CardTitle className={title}>{year}</CardTitle>
                    <CardImg className={className2} variant="bottom" src={optionalImage2} />
                    <CardText className="cardText">
                        {text}
                    </CardText>
                </CardBody>
            </Card >
        </div>
    )
}

export default TimelinePiece