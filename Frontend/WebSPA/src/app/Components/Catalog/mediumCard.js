import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.svg'

export default function MediumCard(props) {
    return (
        <Col sm={9} className='pb-3'>
            <Card>
                <Card.Img variant="top" width="400" height="435" src={Logo} />
                <Card.ImgOverlay>
                    <Card.Body style={{ height: '300px' }}>
                        <Card.Title>{props.product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.product.category}</Card.Subtitle>
                        <Card.Text>
                            {props.product.summary}
                        </Card.Text>
                        <Card.Text>
                            {props.product.description}
                        </Card.Text>
                        <Button variant="primary" href={`/Details/${props.product.id}`}>Know More</Button>
                    </Card.Body>
                </Card.ImgOverlay>
                <Card.Footer>
                    <cite title="{props.product.price}">Price: {props.product.price}</cite>
                </Card.Footer>
            </Card>
        </Col>
    )
}