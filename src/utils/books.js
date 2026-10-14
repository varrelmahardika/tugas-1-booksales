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
  },
  { 
    id: 7, 
    title: 'Clean Code & Refactoring', 
    author: 'Robert C. Martin', 
    price: 'Rp 195.000', 
    category: 'Software Development',
    readTime: '16 mins',
    desc: 'Panduan menulis kode yang rapi, mudah dirawat, efisien, serta menerapkan prinsip pembacaan kode bagi pengembang perangkat lunak.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80' 
  },
  { 
    id: 8, 
    title: 'Computer Networking Fundamentals', 
    author: 'Andrew S. Tanenbaum', 
    price: 'Rp 170.000', 
    category: 'Networking',
    readTime: '13 mins',
    desc: 'Konsep dasar jaringan komputer, protokol TCP/IP, arsitektur layer OSI, keamanan jaringan, dan sistem komputasi awan.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&auto=format&fit=crop&q=80' 
  },
  { 
    id: 9, 
    title: 'Web Development with React', 
    author: 'M. Varel Mahardika', 
    price: 'Rp 150.000', 
    category: 'Web Development',
    readTime: '11 mins',
    desc: 'Panduan praktis membangun antarmuka aplikasi web modern, komponen responsif, serta routing dinamis di React.js.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop&q=80' 
  }
];

export default books;