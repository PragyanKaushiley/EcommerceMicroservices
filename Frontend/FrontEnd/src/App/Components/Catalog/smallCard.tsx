import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import Logo from '../../Assets/Img/logo.svg'
import Product from '../../Store/ProductModel'

const SmallCard = (props: Product) => {
    return (
        <Col sm={3} className='pb-3'>
            <Card>
                <Card.Img variant="top" src={Logo} />
                <Card.Body style={{ height: '250px' }}>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.product.category}</Card.Subtitle>
                    <Card.Text>
                        {props.product.summary}
                    </Card.Text>
                    <Button variant="primary" href={`/Details/${props.product.id}`}>Know More</Button>
                </Card.Body>
                <Card.Footer>
                    <cite title="{props.product.price}">Price: {props.product.price}</cite>
                </Card.Footer>
            </Card >
        </Col >
    )
}

export default SmallCard;