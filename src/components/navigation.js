import React from 'react';
import { NavLink,Outlet  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
import Footer from './footer.js';

export default function Navigation() {
    return (
      <>
      <div class="header_section position-fixed">
      <div class="container-fluid">
         <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid d-flex">
             <div>
                <NavLink className="navbar-brand text-light" to="/">Rubby</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
             </div>
             <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                      <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                   </li>
                   <li className="nav-item">
                      <NavLink className="nav-link" to="/Shop">Cửa hàng của tôi</NavLink>
                   </li>
                   <li className="nav-item">
                      <NavLink className="nav-link" to="vagetables">Sản phẩm</NavLink>
                   </li>
                   <li className="nav-item">
                      <NavLink className="nav-link" to="/News">Mua Bán</NavLink>
                   </li>
                   <li className="nav-item">
                      <NavLink className="nav-link" to="/about">Về chúng tôi</NavLink>
                   </li>
                </ul>
                <NavLink className='btn btn-danger fw-semibold text-light ms-5' to="/login">JOIN US<i class="fa fa-arrow-right ms-3 py-1"></i></NavLink>
             </div>
       </nav>
      
 
      </div>
   </div>
   <div className='content_block'>
    <Outlet />
   </div>
      <Footer/>
   </>
    )
}