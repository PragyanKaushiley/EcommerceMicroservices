import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../Assets/Img/logo.svg';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" >
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Ecommerce
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
