import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

class Consultation extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Please fill this form</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <div className="form-row">
                      <div className="col">
                        <div class="form-group ">
                          <p for="name" className="labelQns">
                            What is your name (Full Name)?
                          </p>
                          <input
                            type="text"
                            class="form-control border1"
                            id="name"
                          />
                        </div>
                        <div class="form-group">
                          <p for="name" className="labelQns">
                            Your Tel Number:
                          </p>
                          <input
                            type="text"
                            class="form-control border1"
                            id="tel"
                          />
                        </div>
                        <div class="form-group">
                          <p for="name" className="labelQns">
                            Which district/state are you in?
                          </p>
                          <input
                            type="text"
                            class="form-control border1"
                            id="tel"
                          />
                        </div>
                        <div class="form-group">
                          <p for="name" className="labelQns">
                            Which country are you in?
                          </p>
                          <input
                            type="text"
                            class="form-control border1"
                            id="tel"
                          />
                        </div>
                        <div class="form-group">
                          <p for="name" className="labelQns">
                            What is your gender?
                          </p>
                          <input
                            type="text"
                            className="form-control border1"
                            id="tel"
                          />
                        </div>
                        <div className="form-group">
                          <p for="name" className="labelQns">
                            Select the symptoms you have?
                          </p>
                          <div className="row">
                            <div className="col pad-4">
                              <div class="checkbox-container">
                                <label class="checkbox-label">
                                  <input type="checkbox" />
                                  <span class="checkbox-custom rectangular"></span>
                                </label>
                              </div>
                            </div>
                            <div className="col-9 pad-4">
                              <div className="txt">
                                Name:<strong> Muheki Solomon</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <p for="name" className="labelQns">
                            Select the symptoms you have?
                          </p>

                          <div>
                            <input
                              id="option-one"
                              name="radio"
                              value="one"
                              type="radio"
                            />
                            <label for="option-one">
                              <span></span> Male
                            </label>
                          </div>
                          <div>
                            <input
                              id="option-two"
                              name="radio"
                              value="two"
                              type="radio"
                            />
                            <label for="option-two">
                              <span></span> Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <p for="name" className="labelQns">
                            How long have you been sick?
                          </p>
                          <input
                            type="text"
                            class="form-control border1"
                            id="tel"
                          />
                        </div>
                        <div class="form-group">
                          <p for="name" className="labelQns">
                            Anything you would what to tell us?
                          </p>
                          <textarea
                            class="form-control textareabd border1"
                            rows="2"
                            id="comment"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Consultation;
