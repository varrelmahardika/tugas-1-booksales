import React, { useState } from 'react';
import initialBooks from '../utils/books';

function Book() {
  // Menggunakan Hooks (useState) untuk data buku (Nilai Tambah)
  const [books, setBooks] = useState(initialBooks);
  
  // State untuk form input tambah buku baru
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');

  // Fungsi untuk menambah data buku baru
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const newBook = {
      id: books.length + 1,
      title,
      author,
      price: price ? `Rp ${Number(price).toLocaleString('id-ID')}` : 'Rp 150.000',
      category: category || 'General',
      readTime: '10 mins',
      desc: desc || 'Deskripsi buku baru.',
      img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=80'
    };

    setBooks([newBook, ...books]); // Masukkan buku baru ke urutan paling atas
    // Reset form
    setTitle('');
    setAuthor('');
    setPrice('');
    setCategory('');
    setDesc('');
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <h2 className="fw-bold mb-4">Manajemen & Katalog Buku (Book Page)</h2>

      {/* FORM TAMBAH BUKU */}
      <div className="card shadow-sm border-0 rounded-4 p-4 mb-5 bg-white">
        <h4 className="fw-bold text-primary mb-3">➕ Tambah Buku Baru (React Hooks)</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Judul Buku" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </div>
            <div className="col-md-6">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nama Penulis" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                required 
              />
            </div>
            <div className="col-md-4">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Harga (contoh: 150000)" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
              />
            </div>
            <div className="col-md-4">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Kategori (mis: Technology)" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
              />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary w-100 fw-semibold">Simpan Buku</button>
            </div>
            <div className="col-12">
              <textarea 
                className="form-control" 
                placeholder="Deskripsi singkat buku..." 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
                rows="2"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

      {/* MENAMPILKAN DATA DENGAN METODE .map() */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card shadow-sm h-100 border-0 rounded-4 bg-white overflow-hidden">
              <div className="position-relative">
                <img src={book.img} className="card-img-top" height="220" alt={book.title} style={{ objectFit: 'cover' }} />
                <span className="position-absolute top-0 start-0 m-3 badge bg-primary text-white rounded-pill px-3 py-1.5 small shadow-sm">
                  {book.category}
                </span>
              </div>
              <div className="card-body d-flex flex-column p-4">
                <h5 className="fw-bold text-dark fs-6 mb-1">{book.title}</h5>
                <p className="text-muted small mb-2 fw-medium">Penulis: {book.author}</p>
                <p className="text-primary fw-bold fs-6 mb-3">{book.price}</p>
                <p className="card-text text-secondary small mb-4" style={{ fontSize: '0.875rem' }}>{book.desc}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                  <div className="btn-group shadow-sm rounded-pill border overflow-hidden">
                    <button type="button" className="btn btn-sm btn-light px-3 text-secondary fw-semibold">View</button>
                    <button type="button" className="btn btn-sm btn-light px-3 text-primary fw-semibold border-start">Edit</button>
                  </div>
                  <small className="text-muted fw-medium">⏱️ {book.readTime}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;