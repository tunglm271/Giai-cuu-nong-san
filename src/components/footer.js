import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <>
             <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-sm-6">
                  <h3 className="footer_text">Useful links</h3>
                  <div className="footer_menu">
                     <ul>
                        <li className="active"><Link href="index.html"><span className="angle_icon active"><i className="fa fa-arrow-right" aria-hidden="true"></i></span> Home</Link></li>
                        <li><Link href="about.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>  About</Link></li>
                        <li><Link href="services.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span> Services</Link></li>
                        <li><Link href="domain.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span> Domain</Link></li>
                        <li><Link href="testimonial"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>  Testimonial</Link></li>
                        <li><Link href="contact.html"><span className="angle_icon"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>  Contact Us</Link></li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <h3 className="footer_text">Address</h3>
                  <div className="location_text">
                     <ul>
                        <li>
                           <Link href="#">
                           <span className="padding_left_10"><i className="fa fa-map-marker" aria-hidden="true"></i></span>It is a long established fact that a<br/> reader will be distracted</Link>
                        </li>
                        <li>
                           <Link href="#">
                           <span className="padding_left_10"><i className="fa fa-phone" aria-hidden="true"></i></span>(+71) 1234567890<br/>(+71) 1234567890
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                           <span className="padding_left_10"><i className="fa fa-envelope" aria-hidden="true"></i></span>demo@gmail.com
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <div className="footer_main">
                     <h3 className="footer_text">Find Us</h3>
                     <p className="dummy_text">more-or-less normal distribution </p>
                     <div className="social_icon">
                        <ul>
                           <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                           <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                           <li><Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
}

export default Footer;