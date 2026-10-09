import React from 'react';

function Home() {
  const books = [
    { 
      id: 1, 
      title: 'Atomic Habits', 
      author: 'James Clear', 
      price: 'Rp 108.000', 
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 2, 
      title: 'Filosofi Teras', 
      author: 'Henry Manampiring', 
      price: 'Rp 98.000', 
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 3, 
      title: 'Psychology of Money', 
      author: 'Morgan Housel', 
      price: 'Rp 85.000', 
      img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=80' 
    },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc' }}>
      
      {/* HERO SECTION */}
      <section className="py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            
            {/* Teks Kiri */}
            <div className="col-lg-6">
              <span 
                className="badge px-3 py-2 fw-semibold rounded-pill mb-3"
                style={{ backgroundColor: '#e0f2fe', color: '#0284c7', fontSize: '0.85rem' }}
              >
                <i className="fa-solid fa-sparkles me-2"></i> Toko Buku Online Terpercaya
              </span>
              
              <h1 className="display-5 fw-bold mb-3" style={{ color: '#0f172a', lineHeight: '1.2' }}>
                Temukan Buku Favoritmu di <span style={{ color: '#0284c7' }}>BookSales</span>
              </h1>
              
              <p className="lead mb-4" style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Platform toko buku online terbaik yang menyediakan berbagai macam genre buku pilihan untuk menemani waktu luang dan menambah wawasanmu setiap hari.
              </p>

              {/* Tombol Aksi */}
              <div className="d-flex flex-wrap gap-3 mb-5">
                <a 
                  href="#katalog" 
                  className="btn btn-lg px-4 py-3 fw-bold text-white shadow-sm"
                  style={{ backgroundColor: '#0284c7', borderRadius: '12px', border: 'none' }}
                >
                  <i className="fa-solid fa-cart-shopping me-2"></i> Mulai Belanja
                </a>
              </div>

              {/* Statistik Ringkas */}
              <div className="row g-3 pt-4 border-top" style={{ borderColor: '#e2e8f0' }}>
                <div className="col-auto me-4">
                  <h5 className="fw-bold mb-0" style={{ color: '#0f172a' }}>10.000+</h5>
                  <small style={{ color: '#64748b' }}>Koleksi Buku</small>
                </div>
                <div className="col-auto me-4">
                  <h5 className="fw-bold mb-0" style={{ color: '#0f172a' }}>100%</h5>
                  <small style={{ color: '#64748b' }}>Produk Original</small>
                </div>
                <div className="col-auto">
                  <h5 className="fw-bold mb-0" style={{ color: '#0f172a' }}>4.9/5.0</h5>
                  <small style={{ color: '#64748b' }}>Ulasan Pembeli</small>
                </div>
              </div>
            </div>

            {/* Gambar Kanan */}
            <div className="col-lg-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80" 
                alt="Buku & Perpustakaan" 
                className="img-fluid rounded-4 shadow"
                style={{ 
                  maxHeight: '440px', 
                  width: '100%', 
                  objectFit: 'cover',
                  border: '6px solid #ffffff'
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* KATALOG BUKU */}
      <section id="katalog" className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6" style={{ color: '#0f172a' }}>
              Buku Terpopuler
            </h2>
            <p style={{ color: '#64748b' }}>
              Rekomendasi buku paling laris yang wajib kamu baca minggu ini.
            </p>
          </div>

          <div className="row g-4">
            {books.map((book) => (
              <div key={book.id} className="col-md-4">
                <div 
                  className="card border-0 h-100 p-3"
                  style={{ 
                    borderRadius: '16px', 
                    backgroundColor: '#f8fafc',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
                  }}
                >
                  <img 
                    src={book.img} 
                    className="card-img-top rounded-3 mb-3" 
                    alt={book.title} 
                    style={{ height: '260px', objectFit: 'cover' }} 
                  />
                  <div className="card-body p-0 d-flex flex-column">
                    <h5 className="fw-bold mb-1" style={{ color: '#0f172a' }}>{book.title}</h5>
                    <p className="small mb-3" style={{ color: '#64748b' }}>{book.author}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                      <span className="fw-bold fs-5" style={{ color: '#0284c7' }}>{book.price}</span>
                      <button 
                        className="btn btn-sm px-3 py-2 fw-semibold text-white"
                        style={{ backgroundColor: '#0284c7', borderRadius: '8px', border: 'none' }}
                      >
                        Beli
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;