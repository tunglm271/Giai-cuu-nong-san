import React from 'react';
import { Link } from 'react-router-dom';
function Shop(props) {
    return (
        <>
                <div class="about_section layout_padding">
               <div class="container">
                  <div class="row">
                     <div class="col-md-5">
                        <div class="about_img"><img src="assets/images/about-img.png"/></div>
                     </div>
                     <div class="col-md-6 ms-5">
                        <div class="row">
                        <div class="fresh_taital pt-1">Shop của nông dân A</div>
                        <h3 class="card-title font-weight-bold pt-5">Giới thiệu</h3>
                        <p class="ipsum_text pt-2">
                           Tôi là một nông dân địa phương với niềm đam mê lớn đối với việc trồng trọt và sản xuất nông sản chất lượng. 
                           Tôi hân hạnh chia sẻ với các bạn các sản phẩm nông sản tươi ngon mà tôi đã trồng. 
                           Các sản phẩm này được chăm sóc một cách tỉ mỉ và không sử dụng hóa chất độc hại.</p>
                     </div>

                     <div class="row pt-3">
                        <div class="row my-2">
                           <div class="col-lg-3 col-md-4 label font-weight-bold text-success"><i class="fa fa-user" aria-hidden="true"></i> &nbsp; Chủ sở hữu</div>
                           <div class="col-lg-9 col-md-8">Đinh Việt Hà</div>
                         </div>
       
                         <div class="row my-2">
                           <div class="col-lg-3 col-md-4 label  font-weight-bold text-success"><i class="fa fa-home" aria-hidden="true"></i> &nbsp; Địa chỉ</div>
                           <div class="col-lg-9 col-md-8">khu chăn nuôi rau sạch ABC, Đà lạt</div>
                         </div>
                         <div class="row my-2">
                           <div class="col-lg-3 col-md-4 label  font-weight-bold text-success"><i class="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp; Số sản phẩm</div>
                           <div class="col-lg-9 col-md-8">7</div>
                         </div>

                         <div class="row my-2">
                           <div class="col-lg-3 col-md-4 label  font-weight-bold text-success"><i class="fa fa-star" aria-hidden="true"></i> &nbsp; Đánh giá</div>
                           <div class="col-lg-9 col-md-8">4.5/5</div>
                         </div>
                     </div>
                     <div class="read_bt"><Link href="#">Read More</Link></div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="vagetables_section layout_padding pb-5">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">
                        <h1 class="vagetables_taital">Sản phẩm</h1>
                        <p class="vagetables_text">Passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                     </div>
                  </div>
                  <div class="courses_section_2">
                     <div class="row">
                        <div class="col-md-4">
                           <div class="hover01 column">
                              <figure><img src="assets/images/img-1.png" /></figure>
                           </div>
                           <h3 class="harshal_text">Harshal</h3>
                           <h3 class="rate_text">$19</h3>
                           <div class="read_bt_1"><a href="#">Read More</a></div>
                        </div>
                        <div class="col-md-4">
                           <div class="hover01 column">
                              <figure><img src="assets/images/img-2.png" /></figure>
                           </div>
                           <h3 class="harshal_text">Foodism</h3>
                           <h3 class="rate_text">$19</h3>
                           <div class="read_bt_1"><a href="#">Read More</a></div>
                        </div>
                        <div class="col-md-4">
                           <div class="hover01 column">
                              <figure><img src="assets/images/img-3.png" /></figure>
                           </div>
                           <h3 class="harshal_text">Seven</h3>
                           <h3 class="rate_text">$19</h3>
                           <div class="read_bt_1"><a href="#">Read More</a></div>
                        </div>
                     </div>
                  </div>
                  <div class="vagetables_section_2">
                     <div class="row">
                        <div class="col-md-4">
                           <div class="hover01 column">
                              <figure><img src="assets/images/img-4.png" /></figure>
                           </div>
                           <h3 class="harshal_text">Cyrus</h3>
                           <h3 class="rate_text">$19</h3>
                           <div class="read_bt_1"><a href="#">Read More</a></div>
                        </div>
                        <div class="col-md-4">
                           <div class="hover01 column">
                              <figure><img src="assets/images/img-5.png" /></figure>
                           </div>
                           <h3 class="harshal_text">Elianna</h3>
                           <h3 class="rate_text">$19</h3>
                           <div class="read_bt_1"><a href="#">Read More</a></div>
                        </div>
                        <div class="col-md-4">
                           <div class="hover01 column">
                              <figure><img src="assets/images/img-6.png" /></figure>
                           </div>
                           <h3 class="harshal_text">Friedman</h3>
                           <h3 class="rate_text">$19</h3>
                           <div class="read_bt_1"><a href="#">Read More</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
}

export default Shop;