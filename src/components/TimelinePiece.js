import React from "react";
import { Card, Button } from 'react-bootstrap';
function TimelinePiece({ year, optionalImage, optionalImage2, text, className1, className2 }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className={className1} variant="top" src={optionalImage} />
            <Card.Body >
                <Card.Title>{year}</Card.Title>
                <Card.Img className={className2} variant="bottom" src={optionalImage2} />
                <Card.Text className="cardText">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card >

    )
}

export default TimelinePiece