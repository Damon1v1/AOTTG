import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Header.css'


function Header() {
        return(
          <div>
            <Navbar className='custom-Navbar'>
            <Container id="header">
              <Nav className='ms-auto'>
                <Nav.Link id='link' href="#home">Home</Nav.Link>
                <Nav.Link id='link' href="#game">Game</Nav.Link>
                <Nav.Link id='link' href="#about">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>
        );
    };    

export default Header;