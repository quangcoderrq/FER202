
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';

import About from './components/About';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Home from './components/Home';

function App() {
  return (
    <>
     <Navigation />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Container>
    </>
    
  );
}

export default App;
