import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Navigation() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
          <Nav.Link as={Link} to="/about">Giới thiệu</Nav.Link>
          {isAuthenticated && (
            <Nav.Link as={Link} to="/posts">Bài viết</Nav.Link>
          )}
        </Nav>
        <Nav>
          {isAuthenticated ? (
            <>
              <Navbar.Text className="me-3">
                Xin chào, {user?.username}!
              </Navbar.Text>
              <Button variant="outline-light" onClick={handleLogout}>
                Đăng xuất
              </Button>
            </>
          ) : (
            <Button as={Link} to="/login" variant="outline-light">
              Đăng nhập
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;