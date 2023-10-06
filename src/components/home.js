import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    const mystyle = {
        border:"0",
        width: "100%"
    }
    
   //  useEffect(()=> {

   //  })
    return (
        <>
       
      <div className="container-fluid">
         <div className="layout_border">
            <div className="banner_section layout_padding mb-5">
               <div className="container-fluid rounded-sm">
                  <div id="main_slider" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="row">
                              <div className="col-sm-6">
                                 <div className="banner_taital_main">
                                    <h1 className="banner_taital">Trung tâm giải cứu nông sản <span className='text-success'>Rubby</span></h1>
                                    <p className="banner_text">Trang web này là một nền tảng đặc biệt dành riêng cho người nông dân, 
                                    cho phép họ dễ dàng đăng thông tin về sản phẩm nông sản dư thừa của mình và tìm người thu mua. </p>
                                    <div className="btn_main">
                                       <div className="started_text"><Link href="#">Tham gia</Link></div>
                                       <div className="started_text active"><Link href="#">Xem đơn hàng</Link></div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="banner_img"><img src="assets/images/banner-img.png " alt="ảnh"/></div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="row">
                              <div className="col-sm-6">
                                 <div className="banner_taital_main">
                                    <h1 className="banner_taital">Trung tâm giải cứu nông sản <span className='text-success'>Rubby</span></h1>
                                    <p className="banner_text">Trang web này là một nền tảng đặc biệt dành riêng cho người nông dân, 
                                    cho phép họ dễ dàng đăng thông tin về sản phẩm nông sản dư thừa của mình và tìm người thu mua.</p>
                                    <div className="btn_main">
                                       <div className="started_text"><Link href="#">Tham gia</Link></div>
                                       <div className="started_text active"><Link href="#">Xem đơn hàng</Link></div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="banner_img"><img src="assets/images/banner-img.png" alt="ảnh"/></div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="row">
                              <div className="col-sm-6">
                                 <div className="banner_taital_main">
                                    <h1 className="banner_taital">Trung tâm giải cứu nông sản <span className='text-success'>Rubby</span></h1>
                                    <p className="banner_text">Trang web này là một nền tảng đặc biệt dành riêng cho người nông dân, 
                                    cho phép họ dễ dàng đăng thông tin về sản phẩm nông sản dư thừa của mình và tìm người thu mua.d</p>
                                    <div className="btn_main">
                                       <div className="started_text"><Link href="#">Tham gia</Link></div>
                                       <div className="started_text active"><Link href="#">Xem đơn hàng</Link></div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-6">
                                 <div className="banner_img"><img src="assets/images/banner-img.png" /></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                     <img src="assets/images/arrow-left.png" alt='ảnh slider'/>
                     </a>
                     <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                     <img src="assets/images/arrow-right.png" alt='ảnh slider'/>
                     </a>
                  </div>
               </div>
            </div>
           
            <div className="testimonial_section layout_padding mt-5">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <h1 className="testimonial_taital">Bình luận</h1>
                     </div>
                  </div>
                  <div className="testimonial_section_2">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="testimonial_box">
                              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                 <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                 </ol>
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <p className="testimonial_text">Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p>
                                    </div>
                                    <div className="carousel-item">
                                       <p className="testimonial_text">Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p>
                                    </div>
                                    <div className="carousel-item">
                                       <p className="testimonial_text">Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="client_main">
                              <div className="client_left">
                                 <div className="client_img"><img src="assets/images/client-img.png" alt="ảnh khách hàng"/></div>
                              </div>
                              <div className="client_right">
                                 <h4 className="client_name">Brobo Lo</h4>
                                 <p className="customer_text">Customer</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

    
        </>
    );
}

export default Home;