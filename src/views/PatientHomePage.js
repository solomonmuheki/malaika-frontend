/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap';
// core components

class PatientHomePage extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card>
            <CardHeader>
              <div className="row">
                <div className="col-md-6">
                  <Link
                    to="/patient/communities"
                    className="btn btn-success btn-block lg"
                  >
                    Join Community
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link
                    to="/patient/doctors"
                    className="btn btn-primary  btn-block lg"
                  >
                    Request Doctor
                  </Link>
                </div>
              </div>
              <CardTitle tag="h5">Requests</CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th className="text-right">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dakota Rice</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                    <td className="text-right">$36,738</td>
                  </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-right">$23,789</td>
                  </tr>
                  <tr>
                    <td>Sage Rodriguez</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td className="text-right">$56,142</td>
                  </tr>
                  <tr>
                    <td>Philip Chaney</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td className="text-right">$38,735</td>
                  </tr>
                  <tr>
                    <td>Doris Greene</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td className="text-right">$63,542</td>
                  </tr>
                  <tr>
                    <td>Mason Porter</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td className="text-right">$78,615</td>
                  </tr>
                  <tr>
                    <td>Jon Porter</td>
                    <td>Portugal</td>
                    <td>Gloucester</td>
                    <td className="text-right">$98,615</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>

          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Statistics</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>Statistics</p>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">News</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>Corona Virus out break</p>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="fa fa-calendar" />
                    Statistics
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Posts</CardTitle>
                  <p className="card-category">Dr carmel</p>
                </CardHeader>
                <CardBody>
                  <h6>What's Behind A Rise In Conscience</h6>
                  <p>
                    When health care workers feel they have been forced to do
                    something they disagree with on moral or religious grounds,
                    they can file complaints with the Department of Health and
                    Human Services' Office for Civil Rights. Some high-profile
                    cases have involved nurses who objected to providing
                    abortion services. For a decade, the agency got an average
                    of one of these complaints of conscience violations each
                    year. The complaints can include doctors, nurses or other
                    health care workers who feel a hospital or clinic that
                    receives federal funds has discriminated against them
                    because of their moral position. Groups of health care
                    providers also can file complaints.
                  </p>
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{' '}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default PatientHomePage;
