import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import banner from '../images/banner.jpg';
import img1 from '../images/img-1.png';
import doctor from '../images/doc1.png';
import doc2 from '../images/doctor.png';
import { Visible, Hidden } from 'react-grid-system';

class Banner extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={banner} alt="logo" /> */}

        <section id="intro" className="intro">
          <div className="intro-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-10 col-sm-12 centercont">
                  <div className="leg">
                    <div>
                      {/* <h1 style="font-size:8vw;">Hello World</h1> */}
                      <h1 className="h-ultra">Malaikah Health Center</h1>
                    </div>
                    <div
                      className="wow fadeInUp"
                      data-wow-offset="0"
                      data-wow-delay="0.1s"
                    ></div>
                    <div className="well well-trans">
                      <div className="wow fadeInRight" data-wow-delay="0.1s">
                        <h5 className="mytext">
                          Malaikah connects medical professionals and agencies
                          to patients seeking specialized attention.
                        </h5>
                        <br />

                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <button
                              type="button"
                              className="btn btn-success btn-block btn-lg"
                            >
                              Request For a Doctor
                            </button>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <button
                              type="button"
                              className="btn btn-danger btn-block btn-lg btn-margin-top"
                            >
                              Emmergency
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-2 col-sm-12 leg1">
                  <div>
                    <Hidden xs sm md>
                      {/* <img
                        src={img1}
                        height="400px"
                        className="img-responsive"
                        alt="banner"
                      /> */}
                      <img
                        src={doctor}
                        height="400px"
                        className="img-responsive"
                        alt="banner"
                      />
                    </Hidden>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Banner;
