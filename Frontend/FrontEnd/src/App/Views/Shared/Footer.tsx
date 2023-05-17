import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div className='app'>
            <Navbar bg="light" variant="light" fixed="bottom">
                <Container>
                    <Navbar.Text>
                        © 2023 Copyright:&ensp;
                        <a href="#home">Ecommerce</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;
