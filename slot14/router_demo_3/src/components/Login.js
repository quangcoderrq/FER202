import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/posts';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    if (login(username, password)) {
      navigate(from, { replace: true });
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }
    
    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Đăng nhập</Card.Title>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập tên đăng nhập (ít nhất 3 ký tự)
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập mật khẩu (ít nhất 6 ký tự)
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Đăng nhập
            </Button>
          </Form>
          
          <div className="mt-3 text-center">
            <small className="text-muted">
              Demo: admin / 123456
            </small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;