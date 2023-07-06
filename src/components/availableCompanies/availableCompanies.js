import React from "react";
import "./availabaleCompanies.css"

function AvailableCompanies() {
  return (
    <>
      <div id="frontpage-course-list">
        <h2 className="loginN p-4">Available Comanies:</h2>
        <div className="courses frontpage-course-list-all">
          <div className="row">
            <div className="col-md-3">
              <div className="fp-coursebox">
                <div className="fp-coursethumb">
                  <a href="https://www.dialog.lk/">
                    <img
                      src="https://www.britishcouncil.lk/sites/default/files/5.jpg"
                      width="243"
                      height="165"
                      alt=""
                      className="comapny-logo"
                    />
                  </a>
                </div>
                <div className="fp-companyinfo">
                  <h5>
                    <a href="https://www.dialog.lk/">
                      Dialog Axiata PLC
                    </a>
                  </h5>
                  <div className="readmore">
                    <a href="https://www.dialog.lk/">
                      ReadMore&nbsp; <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="fp-coursebox">
                <div className="fp-coursethumb">
                  <a href="https://www.accessengsl.com/">
                    <img
                      src="https://accesspg.ca/wp-content/uploads/2021/12/logo-with-tagline.png"
                      width="243"
                      height="165"
                      alt=""
                      className="comapny-logo"
                    />
                  </a>
                </div>
                <div className="fp-companyinfo">
                  <h5>
                    <a href="https://www.accessengsl.com/">
                        Access Engineering PLC
                    </a>
                  </h5>
                  <div className="readmore">
                    <a href="https://www.accessengsl.com/">
                      ReadMore&nbsp; <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> <div className="col-md-3">
              <div className="fp-coursebox">
                <div className="fp-coursethumb">
                  <a href="https://www.virtusa.com/">
                    <img
                      src="https://bizenglish.adaderana.lk/wp-content/uploads/VirtusaLogo-Dec-11JPG6-1.jpg"
                      width="243"
                      height="165"
                      alt=""
                      className="comapny-logo"
                    />
                  </a>
                </div>
                <div className="fp-companyinfo">
                  <h5>
                    <a href="https://www.virtusa.com/">
                      Virtusa Corporation
                    </a>
                  </h5>
                  <div className="readmore">
                    <a href="https://www.virtusa.com/">
                      ReadMore&nbsp; <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> <div className="col-md-3">
              <div className="fp-coursebox">
                <div className="fp-coursethumb">
                  <a href="http://www.jetwingsymphony.com/">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/7/7a/Jetwing_Hotels.jpeg"
                      width="243"
                      height="165"
                      alt=""
                      className="comapny-logo"
                    />
                  </a>
                </div>
                <div className="fp-companyinfo">
                  <h5>
                    <a href="http://www.jetwingsymphony.com/">
                      Jetwing Symphony
                    </a>
                  </h5>
                  <div className="readmore">
                    <a href="http://www.jetwingsymphony.com/">
                      ReadMore&nbsp; <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-3">
              <div className="fp-coursebox">
                <div className="fp-coursethumb">
                  <a href="https://www.mobitel.lk/">
                    <img
                      src="http://s3.amazonaws.com/bizenglish/wp-content/uploads/2021/05/31001700/logo.jpeg"
                      width="243"
                      height="165"
                      alt=""
                      className="comapny-logo"
                    />
                  </a>
                </div>
                <div className="fp-companyinfo">
                  <h5>
                    <a href="https://www.mobitel.lk/">
                      Mobitel (Pvt) Ltd
                    </a>
                  </h5>
                  <div className="readmore">
                    <a href="https://www.mobitel.lk/">
                      ReadMore&nbsp; <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix hidexs"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableCompanies;
