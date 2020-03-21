import React from 'react';
import dis from '../images/disease.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Visible, Hidden } from 'react-grid-system';
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class ChangePassword extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                      <h1>Change Password</h1>

                      <form action="" method="POST">
                        <div className="form-group">
                          <label for="pass1">
                            Old Password <span className="require">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                          />
                        </div>
                        <div className="form-group">
                          <label for="pass1">
                            New Password <span className="require">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                          />
                        </div>
                        <div className="form-group">
                          <label for="pass1">
                            Confirm New Password{' '}
                            <span className="require">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="title"
                          />
                        </div>
                        <div class="form-group">
                          <button type="submit" class="btn btn-primary">
                            Change
                          </button>
                          <button className="btn btn-default">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ChangePassword;
