import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Rating from './Rating';


export default function ItemCard({ link, name, description, imgSrc, price, rating }) {
    const history = useHistory();

    return (
        <Card className="my-3 p-3 rounded">
            <Card.Img variant="top" src={imgSrc} onClick={() => history.push(link)} style={link ? { cursor: 'pointer' } : null} />
            <Card.Body>
                <Card.Title as='div'><strong>{name}</strong></Card.Title>
                <Card.Text as='div'>
                    {description}
                </Card.Text>
                {/* {rating && <Rating />} */}
                <Card.Text as='h3'>{price} TK.</Card.Text>
                {rating?.value >= 0 ? <Rating value={rating?.value} text={rating?.text} color={rating?.color} /> : ''}


            </Card.Body>
        </Card>
    )
}
