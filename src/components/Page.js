import React from 'react';
import dis from '../images/disease.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible, Hidden } from 'react-grid-system';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>Join Community</h3>
          <div className="row pad-2">
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3">
                  <div className="pad3">
                    <img
                      src={dis}
                      className="img-responsive dis-img"
                      alt="img"
                    />

                    {/* <Visible xs sm>
                    <img
                      src={dis}
                      height="40px"
                      className="img-responsive dis-img"
                      alt="banner"
                    />
                  </Visible> */}
                  </div>
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Diabetes
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Urinary Track Infections
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Family Planning
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Pregnancy
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row pad-2">
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Cancer
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Cardiovascular disease
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Corona Virus
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="row dis-box">
                <div className="col-3 col-sm-4 col-md-12 col-lg-12 leg3 ">
                  <img src={dis} className="img-responsive dis-img" alt="img" />
                </div>
                <div className="col-9 col-sm-8 col-md-12 col-lg-12 dis-name">
                  <h3 className="myp">
                    Corona Virus
                    <Visible xs sm>
                      <span className="float-right">
                        <FontAwesomeIcon icon="angle-right" />
                      </span>
                    </Visible>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Page;
