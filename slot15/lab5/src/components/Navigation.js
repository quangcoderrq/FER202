import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-auto mx-lg-0 fw-bold fs-4">
          Quiz App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-hover">
            Home
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className="nav-link-hover">
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-hover">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/quiz" className="nav-link-hover">
              Quiz
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;