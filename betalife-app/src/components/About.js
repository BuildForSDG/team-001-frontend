import React, { Component } from "react";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

class About extends Component {

  render() {
    return (
      <div>
        <div className="row mt-5 pt-5">
          <div className="col-12 mb-4">
            <MDBRow>
              <MDBCol md="12">
                <h1 className="text-left mb-5">About Us</h1>
              </MDBCol>
              <MDBCol md="2"/>
              <MDBCol md="8">
                <p> Betalife is a platform that matches users with existing opportunities in skill training.
                </p>
                <p>This product is built under the Build For SDG projects. It was designed to achieve the No Poverty goal.
                </p>
                <p>
                  <small> The following are names of the Developer team that built this application.
                  </small>
                  <ul className="list-unstyled">
                    <li><small>Victor Okpon</small></li>
                    <li><small>Ochuko Ekressa</small></li>
                    <li><small>Okolaa Douglas</small></li>
                  </ul>
                  <small> For enquiries, you can reach us on vikzy2rhyme@yahoo.com </small>
                </p>
              </MDBCol>
              <MDBCol md="2"/>
            </MDBRow>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
