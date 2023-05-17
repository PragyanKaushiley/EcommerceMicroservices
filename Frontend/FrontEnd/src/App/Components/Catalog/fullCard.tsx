import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import Logo from '../../Assets/Img/logo.svg'

import Product from '../../Store/ProductModel'

const FullCard = (props: Product) => {
    return (
        <Col sm={12} className='pb-3'>
            <Card>
                <Card.Img variant="top" width="400" height="385" src={Logo} />
                <Card.ImgOverlay>
                    <Card.Body style={{ height: '200px' }}>
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

export default FullCard;