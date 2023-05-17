import logo from '../../assets/logo.svg';
import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap';


export default class Header extends Component {
  render() {
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
}
