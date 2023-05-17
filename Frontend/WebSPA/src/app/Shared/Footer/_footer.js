import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div className='app'>
                <Navbar bg="light" variant="light" fixed="bottom">
                    <Container>
                        <Navbar.Text href="#home">
                            © 2023 Copyright:&ensp;
                            <a href="#home">Ecommerce</a>
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
