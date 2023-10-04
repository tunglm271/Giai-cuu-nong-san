import React from 'react';
import { Link  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'


export default function Navigation() {
    return (
      <div class="header_section">
      <div class="container-fluid">
         <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid d-flex">
             <div>
                <Link className="navbar-brand text-light" to="\">Rubby</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
             </div>
             <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                      <Link className="nav-link" to="/">Trang chủ</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link" to="/Shop">Shop</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link" to="vagetables.html">Vagetables</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link" to="/News">Tin</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link" to="/About_Us">About Us</Link>
                   </li>

                </ul>
                <Link className='btn btn-danger fw-semibold text-light ms-5'>JOIN US<i class="fa fa-arrow-right ms-3 py-1"></i></Link>
             </div>
       </nav>
      </div>
   </div>
    )
}