import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
        return(
          <div>
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Game</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </div>
        );
    };    

export default Header;