import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Contact from './pages/contact';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
      <div className="container">
        {/* Logo & Nama Brand */}
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2 text-decoration-none" to="/">
          <i className="fa-solid fa-book fa-xl" style={{ color: 'rgb(116, 192, 252)' }}></i>
          <span style={{ color: '#0f172a', fontWeight: '700', letterSpacing: '-0.5px' }}>BookStore</span>
        </Link>

        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 gap-lg-4 fw-semibold mt-3 mt-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link px-2" 
                to="/" 
                style={{ color: location.pathname === '/' ? '#0284c7' : '#64748b', fontWeight: location.pathname === '/' ? '700' : '500' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link px-2" 
                to="/team" 
                style={{ color: location.pathname === '/team' ? '#0284c7' : '#64748b', fontWeight: location.pathname === '/team' ? '700' : '500' }}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link px-2" 
                to="/contact" 
                style={{ color: location.pathname === '/contact' ? '#0284c7' : '#64748b', fontWeight: location.pathname === '/contact' ? '700' : '500' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f8fafc' }}>
        <Navigation />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-white border-top py-4 mt-auto">
          <div className="container text-center">
            <p className="mb-0 small" style={{ color: '#64748b' }}>
              &copy; 2026 <strong style={{ color: '#0f172a' }}>BookStore</strong>. Hak Cipta Dilindungi.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;