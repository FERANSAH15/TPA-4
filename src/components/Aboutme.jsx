import React from 'react'

const Aboutme = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col ">
          <div className="card justify-content-center mx-auto">
            <h5 className="card-header">About Me</h5>
            <div className="card-body">
              <h1 className="card-title">Mahasiswa</h1>
              <p className="card-text">Nama saya Ferdiansyah dari Teknik Informatika di Institut Teknologi Indonesia. Selain menjadi mahasiswa saya juga memiliki usaha online yang sedang saya jalani sampai saat ini. Saya memiliki ketertarikan dalam membuat sebuah website maka dari itu saya memilih skilvul untuk tempat saya belajar.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item fw-bold">Biodata</li>
              <li class="list-group-item">Ferdiansyah</li>
              <li class="list-group-item">Laki-Laki</li>
            </ul>
          </div>   
        </div>
      </div>
    </div>

  )
}

export default Aboutme
