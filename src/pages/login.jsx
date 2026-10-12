import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setSuccessMsg('Login Berhasil! Mengalihkan ke halaman utama...');
      setTimeout(() => {
        navigate('/');
      }, 1200); // Jeda 1.2 detik sebelum pindah halaman
    } else {
      setErrorMsg('Email atau password salah! Silakan coba lagi.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Login</h2>

        {/* Pesan Error (Merah) */}
        {errorMsg && (
          <div className="alert alert-danger text-center py-2" role="alert">
            <i className="fa-solid fa-circle-exclamation me-2"></i> {errorMsg}
          </div>
        )}

        {/* Pesan Sukses (Hijau) */}
        {successMsg && (
          <div className="alert alert-success text-center py-2" role="alert">
            <i className="fa-solid fa-circle-check me-2"></i> {successMsg}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">
          Belum punya akun? <Link to="/register">Register di sini</Link>
        </p>
      </div>
    </div>
  );
}