import React from 'react';
import { Card, Container } from 'react-bootstrap';

import './App.css';
import Header from './components/EX5/Header';
import Footer from './components/EX5/Footer';
import CardFPT from './components/EX4/Card';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Container className="content">
        <section id="about" className="text-center">
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact" className="text-center mt-4">
          <h2>Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </Container>
      <Footer />
     <CardFPT/>
    </div>
  );
};

export default App;