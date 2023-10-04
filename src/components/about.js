import React from 'react';
import { Link } from 'react-router-dom';
function About(props) {
    const mystyle = {
        border:"0",
        width: "100%"
    }

    return (
        <>
        <div class="container-fluid text-center">
        <div class="layout_border">
           <div class="about_section layout_padding margin_bottom90 pt-5">
              <div class="container ">
        <h1 class="u-custom-font u-font-oswald u-text u-text-1">Our Creative Team</h1>
        <p class="u-text u-text-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

        
        <div className="row justify-content-around mb-4">
                        <div className="col-md-3">
                           <div className="hover01 column">
                              <figure><img src="assets/images/de.jpg" /></figure>
                           </div>
                           <h3 className="harshal_text">Thành viên 3</h3>
                            <h4>Leader</h4>
                            <div clasName="d-flex justify-content-around">
                                <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-facebook" aria-hidden="true"></i></h3></a>
                                <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-linkedin" aria-hidden="true"></i></h3></a>
                                <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-instagram" aria-hidden="true"></i></h3></a>
                              </div>
                
                        </div>
                        <div className="col-md-3">
                           <div className="hover01 column">
                              <figure><img src="assets/images/OTSOUE0g.jpg" /></figure>
                           </div>
                           <h3 className="harshal_text">Thành viên 2</h3>
                           <h4>Leader</h4>
                           <div clasName="d-flex justify-content-between">
                              <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-facebook" aria-hidden="true"></i></h3></a>
                              <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-linkedin" aria-hidden="true"></i></h3></a>
                              <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-instagram" aria-hidden="true"></i></h3></a>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="hover01 column">
                              <figure><img src="assets/images/11.jpg" alt="ảnh"/></figure>
                           </div>
                           <h3 className="harshal_text">Thành viên 4</h3>
                           <h4>Leader</h4>
                           <div clasName="d-flex justify-content-around">
                              <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-facebook" aria-hidden="true"></i></h3></a>
                              <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-linkedin" aria-hidden="true"></i></h3></a>
                              <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-instagram" aria-hidden="true"></i></h3></a>
                           </div>
                        
                
                        </div>


               </div>
            
               <div className="row justify-content-around">
                  <div className="col-md-3">
                     <div className="hover01 column">
                        <figure><img src="assets/images/de.jpg" /></figure>
                     </div>
                     <h3 className="harshal_text">Thành viên 3</h3>
                      <h4>Leader</h4>
                      <div clasName="d-flex justify-content-around">
                          <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-facebook" aria-hidden="true"></i></h3></a>
                          <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-linkedin" aria-hidden="true"></i></h3></a>
                          <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-instagram" aria-hidden="true"></i></h3></a>
                        </div>
          
                  </div>
                  <div className="col-md-3">
                     <div className="hover01 column">
                        <figure><img src="assets/images/OTSOUE0g.jpg" /></figure>
                     </div>
                     <h3 className="harshal_text">Thành viên 2</h3>
                     <h4>Leader</h4>
                     <div clasName="d-flex justify-content-between">
                        <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-facebook" aria-hidden="true"></i></h3></a>
                        <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-linkedin" aria-hidden="true"></i></h3></a>
                        <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-instagram" aria-hidden="true"></i></h3></a>
                     </div>
                  </div>
                  <div className="col-md-3">
                     <div className="hover01 column">
                        <figure><img src="assets/images/11.jpg" alt="ảnh"/></figure>
                     </div>
                     <h3 className="harshal_text">Thành viên 4</h3>
                     <h4>Leader</h4>
                     <div clasName="d-flex justify-content-around">
                        <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-facebook" aria-hidden="true"></i></h3></a>
                        <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-linkedin" aria-hidden="true"></i></h3></a>
                        <a href="" className="mx-3"><h3 className="d-inline"><i class="fa fa-instagram" aria-hidden="true"></i></h3></a>
                     </div>
                  
          
                  </div>


               </div>   

              </div>
           </div>

            <div class="contact_section layout_padding">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">
                        <h1 class="contact_taital text-uppercase">Hòm thư</h1>
                     </div>
                  </div>
               </div>
               <div class="container">
                  <div class="contact_section_2">
                     <div class="row">
                        <div class="col-md-6">
                           <div class="mail_section_1">
                              <input type="text" class="mail_text" placeholder="Name" name="Name" />
                              <input type="text" class="mail_text" placeholder="Phone Number" name="Phone Number" /> 
                              <input type="text" class="mail_text" placeholder="Email" name="Email" />
                              <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                              <div class="send_bt"><a href="#">Gửi</a></div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="map_main">
                              <div class="map-responsive">
                                 <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="340" frameborder="0" style={mystyle} allowfullscreen=""></iframe>
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

export default About;