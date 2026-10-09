import React from 'react';

function Contact() {
  return (
    <div className="py-5" style={{ backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              className="card border-0 overflow-hidden"
              style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}
            >
              <div className="row g-0">
                
                {/* Form Kiri */}
                <div className="col-md-7 p-4 p-md-5 bg-white">
                  <h3 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Kirimkan Pesan</h3>
                  <p className="small mb-4" style={{ color: '#64748b' }}>
                    Punya pertanyaan atau masukan? Silakan isi formulir di bawah ini.
                  </p>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold small" style={{ color: '#0f172a' }}>Nama Lengkap</label>
                      <input 
                        type="text" 
                        className="form-control border-1 py-2" 
                        placeholder="Masukkan nama"
                        style={{ borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold small" style={{ color: '#0f172a' }}>Alamat Email</label>
                      <input 
                        type="email" 
                        className="form-control border-1 py-2" 
                        placeholder="email@contoh.com"
                        style={{ borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold small" style={{ color: '#0f172a' }}>Pesan Anda</label>
                      <textarea 
                        className="form-control border-1 py-2" 
                        rows="4" 
                        placeholder="Tuliskan pesan..."
                        style={{ borderRadius: '8px', borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn w-100 py-3 fw-bold text-white"
                      style={{ backgroundColor: '#0284c7', borderRadius: '10px', border: 'none' }}
                    >
                      <i className="fa-solid fa-paper-plane me-2"></i> Kirim Pesan
                    </button>
                  </form>
                </div>

                {/* Info Kontak Kanan */}
                <div 
                  className="col-md-5 p-4 p-md-5 text-white d-flex flex-column justify-content-between"
                  style={{ backgroundColor: '#0284c7' }}
                >
                  <div>
                    <h4 className="fw-bold mb-4">Informasi Kontak</h4>
                    <div className="d-flex align-items-start mb-4">
                      <i className="fa-solid fa-location-dot fs-5 me-3 mt-1"></i>
                      <div>
                        <h6 className="mb-0 fw-bold">Alamat Kantor</h6>
                        <small className="opacity-75">Jl. Jagakarsa, Depok</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-4">
                      <i className="fa-solid fa-envelope fs-5 me-3 mt-1"></i>
                      <div>
                        <h6 className="mb-0 fw-bold">Email</h6>
                        <small className="opacity-75">halo@booksales.com</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-4">
                      <i className="fa-solid fa-phone fs-5 me-3 mt-1"></i>
                      <div>
                        <h6 className="mb-0 fw-bold">Telepon</h6>
                        <small className="opacity-75">+62 811-2222-3333</small>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-top border-white-50">
                    <div className="d-flex gap-3">
                      <a href="#" className="text-white fs-5 opacity-75"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#" className="text-white fs-5 opacity-75"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#" className="text-white fs-5 opacity-75"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;