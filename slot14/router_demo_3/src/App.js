import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <AuthProvider>
      <div>
        <Navigation />
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            } />
            <Route path="/post/:id" element={
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            } />
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;