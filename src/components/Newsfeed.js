import React from 'react';
class Newsfeed extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-12 news-heading-pad2">
              <span>Statistics: </span>
              <span
                className="btn btn-success btn-sm pad"
                data-toggle="tooltip"
                data-placement="top"
                title="Total Number of Patients Registered"
              >
                100
              </span>
              <span
                className="btn btn-success btn-sm pad"
                data-toggle="tooltip"
                data-placement="top"
                title="Number of Patients served"
              >
                056
              </span>
              <span
                className="btn btn-success btn-sm pad"
                data-toggle="tooltip"
                data-placement="top"
                title="Emmergency Cases"
              >
                030
              </span>

              {/* <a href="https://app.engati.com/static/standalone/bot.html?bot_key=9ee45f4942784597">
                chat
              </a> */}
            </div>

            <div className="col-lg-8 col-md-7 col-sm-12 leg1">
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 news-heading-pad">
                  <span className=" news-heading">Latest News</span>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 ">
                  <div className="news white">
                    <ul>
                      <li>
                        <a href="#">
                          Text 1 - Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                          ipsum Lorem ipsum
                        </a>
                      </li>
                      <li>
                        <a href="#">Text 2 - Sed hendrerit</a>
                      </li>
                      <li>
                        <a href="#">Text 3 - Phasellus nec</a>
                      </li>
                      <li>
                        <a href="#">Text 4 - Sed id elit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsfeed;
