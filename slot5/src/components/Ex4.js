import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header style={{ backgroundColor: '#F5A623', padding: '10px 0' }}>
        <div className="container d-flex justify-content-center align-items-center">
          <img src="https://tse2.mm.bing.net/th?id=OIP.uX84eV9xDA6I0kUC3KzjbgHaC2&pid=Api&P=0&h=220" alt="FPT University Logo" style={{ maxWidth: '500px' }} />
        </div>
        <nav className="text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: 'white',textDecoration: 'none'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about"  style={{ color: 'white',textDecoration: 'none'}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact"  style={{ color: 'white',textDecoration: 'none'}}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="container my-5 text-center">
        <section>
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section className="mt-4">
          <h2>Contact</h2>
          <p>
            For any inquiries, please contact us at{' '}
            <a href="mailto:us@example.com"  style={{ color: 'black',textDecoration: 'none'}}>us@example.com</a>.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#F5D7A6', padding: '10px 0', textAlign: 'center' }}>
        <p>&copy; 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;