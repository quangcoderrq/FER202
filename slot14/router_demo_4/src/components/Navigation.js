import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
  <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
          <Nav.Link as={Link} to="/about">Giới thiệu</Nav.Link>
          <Nav.Link as={Link} to="/posts">Bài viết</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
}

export default Navigation;