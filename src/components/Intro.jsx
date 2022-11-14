import React from 'react'
import { Link } from "react-router-dom";


const Intro = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
            <div className="col">
                <h5 className='text-secondary'>Haloo Nama, Saya</h5>
                <h1 className='text-danger fw-bold fs-1'>Ferdiansyah</h1>
                <h3>Mahasiswa <span className='text-danger'>Institut Teknologi Indonesia</span></h3>
		        <p className='opacity-70'>Selain menjadi mahasiswa saya juga memiliki usaha online yang sedang saya jalani sampai saat ini. Saya memiliki ketertarikan dalam membuat sebuah website maka dari itu saya memilih skilvul untuk tempat saya belajar.</p>
                <Link className='btn btn-lg btn-primary mt-3 bg-danger shadow' to={"/about"}>About Me</Link>
            </div>
            <div className="col">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className='ler w-100 rounded-5'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Intro
