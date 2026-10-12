import React from 'react';

function Home() {
  const books = [
    { 
      id: 1, 
      title: 'Atomic Habits', 
      author: 'James Clear', 
      price: 'Rp 108.000', 
      category: 'Self-Improvement',
      readTime: '12 mins',
      desc: 'Panduan praktis membangun kebiasaan baik dan menghentikan kebiasaan buruk melalui perubahan kecil yang konsisten dan terbukti ilmiah.',
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 2, 
      title: 'Software Engineering Principles', 
      author: 'Ian Sommerville', 
      price: 'Rp 175.000', 
      category: 'Computer Science',
      readTime: '15 mins',
      desc: 'Buku esensial mengenai rekayasa perangkat lunak modern, metodologi pengembangan sistem, serta manajemen proyek berbasis rekayasa.',
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 3, 
      title: 'Database System Concepts', 
      author: 'Abraham Silberschatz', 
      price: 'Rp 190.000', 
      category: 'Information Technology',
      readTime: '10 mins',
      desc: 'Pembahasan mendalam mengenai arsitektur sistem basis data relasional, perancangan skema SQL, normalisasi, dan optimalisasi kueri data.',
      img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 4, 
      title: 'Introduction to Algorithms', 
      author: 'Thomas H. Cormen', 
      price: 'Rp 220.000', 
      category: 'Computer Science',
      readTime: '20 mins',
      desc: 'Referensi utama ilmu komputer untuk mempelajari struktur data tingkat lanjut, analisis kompleksitas, dan perancangan algoritma efisien.',
      img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 5, 
      title: 'Data Science & Analytics', 
      author: 'Jake VanderPlas', 
      price: 'Rp 160.000', 
      category: 'Data Science',
      readTime: '14 mins',
      desc: 'Panduan komprehensif pemrosesan data, visualisasi statistik, dan implementasi machine learning menggunakan pustaka Python populer.',
      img: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&auto=format&fit=crop&q=80' 
    },
    { 
      id: 6, 
      title: 'Artificial Intelligence Basics', 
      author: 'Stuart Russell', 
      price: 'Rp 185.000', 
      category: 'Artificial Intelligence',
      readTime: '18 mins',
      desc: 'Pengenalan fundamental kecerdasan buatan, agen cerdas, teknik pencarian heuristik, serta pemodelan sistem pembelajaran mesin.',
      img: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&auto=format&fit=crop&q=80' 
    }
  ];

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      minHeight: '100vh', 
      fontFamily: "'Plus Jakarta Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
    }}>
      
      {/* IMPOR FONT GOOGLE */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        `}
      </style>

      {/* HEADER / HERO SECTION */}
      <section className="py-5 text-center container bg-white border-bottom border-primary-subtle mb-4 shadow-sm">
        <div className="row py-lg-4">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill fw-semibold" style={{ fontSize: '0.85rem' }}>
              Katalog Literatur & Referensi Akademik 📚
            </span>
            <h1 className="fw-bold text-dark mb-3 display-6" style={{ letterSpacing: '-0.5px' }}>
              BookStore & Katalog Literatur
            </h1>
            <p className="text-muted fs-6 lh-base mb-4">
              Sistem informasi manajemen katalog literatur resmi untuk mendukung kegiatan perkuliahan, riset ilmiah, serta pengembangan keilmuan bidang Teknologi Informasi.
            </p>
            <div>
              <a href="#katalog" className="btn btn-primary px-4 py-2 me-2 rounded-pill shadow-sm fw-semibold">Lihat Katalog</a>
              <a href="#" className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold">Panduan Peminjaman</a>
            </div>
          </div>
        </div>
      </section>

      {/* ALBUM GRID SECTION */}
      <main className="album py-4" id="katalog">
        <div className="container">
          <div className="mb-4 border-bottom border-primary-subtle pb-2 d-flex justify-content-between align-items-center">
            <div>
              <h3 className="fw-bold text-primary fs-5 mb-1">Daftar Buku Tersedia</h3>
              <p className="text-muted small mb-0">Menampilkan literatur akademik pilihan dengan deskripsi lengkap.</p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100 border-0 rounded-4 bg-white overflow-hidden" style={{ transition: 'transform 0.2s ease' }}>
                  <div className="position-relative">
                    <img 
                      src={book.img} 
                      className="card-img-top" 
                      height="220" 
                      alt={book.title} 
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-primary text-white rounded-pill px-3 py-1.5 small shadow-sm">
                      {book.category}
                    </span>
                  </div>
                  
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="fw-bold text-dark fs-6 mb-1">{book.title}</h5>
                    <p className="text-muted small mb-2 fw-medium">Penulis: {book.author}</p>
                    <p className="text-primary fw-bold fs-6 mb-3">{book.price}</p>
                    
                    {/* Deskripsi Spesifik Buku */}
                    <p className="card-text text-secondary small mb-4" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {book.desc}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                      {/* Tombol View & Edit Berbentuk Kapsul */}
                      <div className="btn-group shadow-sm rounded-pill border overflow-hidden">
                        <button type="button" className="btn btn-sm btn-light px-3 text-secondary fw-semibold" style={{ fontSize: '0.8rem' }}>View</button>
                        <button type="button" className="btn btn-sm btn-light px-3 text-primary fw-semibold border-start" style={{ fontSize: '0.8rem' }}>Edit</button>
                      </div>
                      <small className="text-muted fw-medium d-flex align-items-center gap-1" style={{ fontSize: '0.8rem' }}>
                        ⏱️ {book.readTime}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <div className="container mt-5">
        <footer className="py-4 border-top border-primary-subtle">
          <ul className="nav justify-content-center border-bottom border-primary-subtle pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-3 text-primary small fw-semibold">Beranda</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-3 text-primary small fw-semibold">Kebijakan Layanan</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-3 text-primary small fw-semibold">Panduan</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-3 text-primary small fw-semibold">Pusat Bantuan</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-3 text-primary small fw-semibold">Kontak Institusi</a></li>
          </ul>
          <p className="text-center text-primary small mb-0 fw-medium">&copy; 2026 NF Academy. Hak cipta dilindungi undang-undang.</p>
        </footer>
      </div>

    </div>
  );
}

export default Home;