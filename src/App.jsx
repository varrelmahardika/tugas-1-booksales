import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Router>
      {/* Navbar Utama */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 px-4 shadow-sm sticky-top">
        <div className="container-fluid">
          
          {/* Logo & Icon Buku */}
          <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center text-dark" to="/">
            <i className="fa-solid fa-book text-primary me-2"></i> BookStore
          </Link>

          {/* Tombol Hamburger untuk Tampilan Mobile (HP) */}
          <button 
            className="navbar-toggler border-0 shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Navigasi & Tombol Auth */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <Link className="nav-link px-3 text-dark fw-medium" to="/">Home</Link>
              <Link className="nav-link px-3 text-dark fw-medium" to="/team">Team</Link>
              <Link className="nav-link px-3 text-dark fw-medium" to="/contact">Contact</Link>
              
              {/* Tombol Login & Register (Pill Shape) */}
              <div className="d-flex align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">
                <Link className="btn btn-outline-primary px-4 rounded-pill" to="/login">Login</Link>
                <Link className="btn btn-primary px-4 rounded-pill text-white" to="/register">Register</Link>
              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* Pengaturan Rute Halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;