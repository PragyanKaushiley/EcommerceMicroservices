import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import Logo from '../../Assets/Img/logo.svg'

import Product from '../../Store/ProductModel'

const DetailsCard = (props: Product) => {

    return (
        <Col sm={12} className='pb-3'>
            <Card>
                <Card.Body >
                    <Row>
                        <Col sm={6}>
                            <Card.Title>{props.product.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.product.category}</Card.Subtitle>
                            <Card.Text>
                                {props.product.summary}
                            </Card.Text>
                            <Card.Text>
                                {props.product.description}
                            </Card.Text>
                        </Col>
                        <Col sm={6}>
                            <Card.Img variant="top" src={Logo} />
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <cite title="{props.product.price}">Price: {props.product.price}</cite>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default DetailsCard;