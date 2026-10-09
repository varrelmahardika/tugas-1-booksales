import React from 'react';

function Team() {
  const members = [
    {
      id: 1,
      name: 'Muhamad Varrel Mahardika',
      role: 'Lead Developer',
      desc: 'Membangun arsitektur website yang tangguh dan responsif untuk kenyamanan pengguna.',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Wahyu Ahmad Yassin',
      role: 'UI/UX Designer',
      desc: 'Merancang tampilan dan pengalaman pengguna agar interaktif dan memanjakan mata.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Salman Maulana',
      role: 'Marketing Specialist',
      desc: 'Memastikan buku-buku terbaik kami selalu sampai ke layar gadget Anda.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: '#f8fafc', minHeight: '80vh' }}>
      <div className="container py-4">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-6" style={{ color: '#0f172a' }}>
            Kenali Tim Kami
          </h1>
          <p className="fs-6" style={{ color: '#64748b' }}>
            Orang-orang kreatif dan berdedikasi di balik kesuksesan BookSales.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="row g-4 justify-content-center">
          {members.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6">
              <div 
                className="card border-0 h-100 p-4 text-center"
                style={{ 
                  borderRadius: '16px', 
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Foto Profile */}
                <div className="mx-auto mb-3" style={{ width: '130px', height: '130px' }}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="rounded-circle w-100 h-100"
                    style={{ 
                      objectFit: 'cover', 
                      border: '4px solid #38bdf8',
                      padding: '2px'
                    }} 
                  />
                </div>

                {/* Nama Member */}
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
                  {member.name}
                </h5>

                {/* Role Badge Kapsul */}
                <div className="mb-3">
                  <span 
                    className="badge px-3 py-2 fw-semibold rounded-pill"
                    style={{ 
                      backgroundColor: '#e0f2fe', 
                      color: '#0284c7',
                      fontSize: '0.85rem'
                    }}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Deskripsi */}
                <p className="small mb-4" style={{ color: '#64748b', lineHeight: '1.6' }}>
                  {member.desc}
                </p>

                {/* Link Sosial Media */}
                <div className="d-flex justify-content-center gap-3 mt-auto pt-2">
                  <a href="#" style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" style={{ color: '#94a3b8', fontSize: '1.2rem' }}>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Team;