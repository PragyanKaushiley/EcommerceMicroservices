import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.svg'

export default function FullCard() {
    return (
        <Col sm={12} className='pb-3'>
            <Card>
                <Card.Img variant="top" width="400" height="385" src={Logo} />
                <Card.ImgOverlay>
                    <Card.Body style={{ height: '200px' }}>
                        <Card.Title>{this.props.product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.product.category}</Card.Subtitle>
                        <Card.Text>
                            {this.props.product.summary}
                        </Card.Text>
                        <Card.Text>
                            {this.props.product.description}
                        </Card.Text>
                        <Button variant="primary" href={`/Details/${this.props.product.id}`}>Know More</Button>
                    </Card.Body>
                </Card.ImgOverlay>
                <Card.Footer>
                    <cite title="{this.props.product.price}">Price: {this.props.product.price}</cite>
                </Card.Footer>
            </Card>
        </Col>
    )
}

