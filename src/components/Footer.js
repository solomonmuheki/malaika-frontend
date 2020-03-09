import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <h2>
                  <a href="index.html">Malaika</a>
                </h2>
                <p>Angels of Health</p>
                <div className="clearfix"> </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <h3>Follow us</h3>
                <div className="agileinfo-social-grids">
                  <ul>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <h3>Contact</h3>
                <div className="addres up-out">
                  <p className="">
                    <span
                      className="fa fa-map-marker icons-left"
                      aria-hidden="true"
                    ></span>
                    Adamete Road, Off Amua, Gboko. Nigeria
                  </p>

                  <p>
                    <FontAwesomeIcon icon="phone" />
                    +2349076766630
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <div className="sub-footer">
            <div className="container">
              <div className="">
                <div className="sub-footer-txt">
                  ©2020 Malaika. All Rights Reserved | Powered by Orban
                  Martin-Luther
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
