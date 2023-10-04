import React from 'react';
import './news.css';
function News(props) {
    return (
        <>


             <div className="container-fluid justify-content-center">
            <div classNameName='text-center'>
            <div className="input-group rounded pt-4 col-9 ms-3">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0 bg-success" id="search-addon">
                    <i className="fa fa-search"></i>
                </span>
            </div>
            </div>
           
        <div className="row my-5">

         <div className=" col-8 ms-3">
            <div className="blog_section layout_padding margin_bottom60 py-3 news--change-background">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <div className='d-flex'>
                            <img src='assets/images/de.jpg' className="overflow-hidden rounded-circle col-1" /> 
                        <h3 className="blog_taital author-name">Nông dân A</h3>
                        </div>
                     </div>
                  </div>
                  <div className="blog_section_2 layout_padding pt-2 align-middle">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="blog_taital_1 text-center">Cà chua</div>
                           <p className="ipsum_text align-middle pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                           <div className="readmore_bt pt-3 ms-1"><a href="#">Đặt hàng</a></div>
                           <div className="readmore_bt ms-5 pt-3 active"><a href="#" className="bg-secondary">Tìm hiểu thêm</a></div>
                        </div>
                        <div className="col-md-5 ms-5">
                           <div className="blog_img hover01">
                           <figure><img src="assets/images/img-3.png" /></figure></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="blog_section layout_padding margin_bottom60 py-3 news--change-background mt-5">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12">
                        <div className='d-flex'>
                            <img src='assets/images/de.jpg' className="overflow-hidden rounded-circle col-1" /> 
                        <h3 className="blog_taital author-name">Nông dân B</h3>
                        </div>
                     </div>
                  </div>
                  <div className="blog_section_2 layout_padding pt-2 align-middle">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="blog_taital_1 text-center">Hành Tây</div>
                           <p className="ipsum_text align-middle pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                           <div className="readmore_bt pt-3 ms-1"><a href="#">Đặt hàng</a></div>
                           <div className="readmore_bt ms-5 pt-3 active"><a href="#" className="bg-secondary">Tìm hiểu thêm</a></div>
                        </div>
                        <div className="col-md-5 ms-5">
                           <div className="blog_img hover01">
                           <figure><img src="assets/images/img-2.png" /></figure></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            

            
        </div>
        <div class="side-bar">
            <div class="danh-muc">
               <div>
                  <h2 class="danh-muc__header"> <i class="fa fa-filter mr-3"></i>Bộ lọc tìm kiếm</h2>
               </div>
               <div class="danh-muc__item">
                  <h3 class="danh-muc__heading">Nơi đặt hàng</h3>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">Hà nội</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">Thành phố Hà Chí Minh</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">Đà Nẵng</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">Thái Nguyên</span>
                  </div>
                  <button class="btn btn-outline-danger mt-3 ms-3">Thêm <i class="fa fa-arrow-down"></i></button>
               </div>
               <hr class="danh-muc__hr" />
               <div class="danh-muc__item">
                  <h3 class="danh-muc__heading">Tin gần nhất</h3>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">1 giờ trước</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">1 ngày trước</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">1 tuần trước</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">1 tháng trước</span>
                  </div>
                  <button class="btn btn-outline-danger mt-3 ms-3">Thêm <i class="fa fa-arrow-down"></i></button>
               </div>
               <hr class="danh-muc__hr" />

               <div class="danh-muc__item">
                  <h3 class="danh-muc__heading">Giá</h3>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">dưới 100.000 vnd</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">dưới 1000.000 vnd</span>
                  </div>
                  <div class="danh-muc__checkbox">
                     <input type="checkbox" />
                     <span class="danh-muc__item-name">dưới 2000.000 vnd</span>
                  </div>
                  <button class="btn btn-outline-danger mt-3 ms-3">Thêm <i class="fa fa-arrow-down"></i></button>
               </div>
               <hr class="danh-muc__hr" />


            </div>
         </div>
      
         <div>
        </div>
        </div>

        </div>
        </>
    );
}

export default News;