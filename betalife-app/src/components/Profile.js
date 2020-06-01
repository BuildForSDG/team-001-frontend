import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MDBCard, MDBCardBody, MDBCardUp, MDBAvatar, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from "mdbreact";

import photo from "../images/fash_women1.jpg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal2: false,
        radio: 2,
        startDate: new Date(),
        org: false,
    }

  }// nr represents modal number
  toggle = (nr) => (e) => {
    e.preventDefault();

    if (nr === 2) {
      this.setState({
        modal2: !this.state.modal2
      });
    }
  }

  handleRadio = (nr) => () => {
    this.setState({
      radio: nr
    });
  }

  handleBirth = (date) => {
    this.setState({
      startDate: date
    });
  }

  handleMyEvents = (e) => {
    e.preventDefault();
    // handle logic
  }

  handleMyMessages = (e) => {
    e.preventDefault();
    // handle logic
  }

  render() {
  return (
    <div>
      <div className="row mt-4 pt-5">
        <div className="col-12 mb-4">
          <MDBRow className="text-center">
            <MDBCol md="2" />
            <MDBCol md="8">
              <MDBCard testimonial>
                <MDBCardUp className="indigo lighten-1" />
                <MDBAvatar  className="img-fluid mb-2 white">
                  <img
                    src={photo}
                    alt=""
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h4 className="card-title">Emana Okoro</h4>
                  <fragment className="btn-group text-center my-2">
                    <MDBBtn color="primary" className="px-3" onClick={this.handleMyEvents}>
                      My Events
                      <MDBIcon  far icon="calendar-check" className="ml-2" />
                    </MDBBtn>
                    <MDBBtn color="white" className="px-3" onClick={this.handleMyMessages}>
                      My Messages
                      <MDBIcon icon="comment-alt" className="text-primary ml-2" />
                    </MDBBtn>
                  </fragment>

                  <p><strong>Sex</strong>: Female</p>
                  <p><strong>Phone No</strong>: 234806000122</p>
                  <p><strong>Email</strong>: annO@yahoo.com</p>
                  <p><strong>location</strong>: Abuja, NIgeria</p>
                  {/* <MDBIcon color="primary" icon="map-marker-alt" /> */}
                  <p><strong>Country</strong>: Nigeria</p>
                  <p><strong>Date of Birth</strong>: 29/05/1002</p>

                  <a href="#" onClick={this.toggle(2)}>
                    <small className="pb-2">Edit profile</small>
                  </a>

                  <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg" cascading>
                    <MDBModalHeader
                      toggle={this.toggle(2)}
                      titleClass="d-inline title"
                      className="text-center light-blue darken-3 white-text"
                    ><MDBIcon />
                      <MDBIcon icon="user-edit" className="px-3" />
                      {/* <MDBIcon icon="pencil-alt" className="px-3" /> */}
                      Edit Profile
                    </MDBModalHeader>
                    <MDBModalBody>
                      <div className="text-left">
                        {/* <MDBInput
                          label="First name"
                          type="text"
                          iconClass="dark-grey"
                          />

                          <MDBInput
                          label="last name"
                          type="text"
                          iconClass="dark-grey"
                        /> */}

                        {/* <MDBInput
                          label="Phone number"
                          type="number"
                          iconClass="dark-grey"
                        /> */}

                        {/* <MDBInput label="Your email"
                          type="email"
                        /> */}
                        <MDBInput
                          label="Your password"
                          type="password"
                          iconClass="dark-grey"
                        />

                        {/* <MDBInput
                          className="d-inline"
                          label="Address"
                          type="text"
                          iconClass="dark-grey"
                        /> */}

                        {/* <MDBFormInline className="my-4">
                          <label className="mr-2">Date of birth</label>
                          <DatePicker className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                            selected={this.state.startDate}
                            omChange={this.handleBirth}
                          />
                        </MDBFormInline> */}

                        <fragment className="form-check-inline mb-3">
                          <label className="mr-5">Sex</label>
                          <MDBInput
                            gap
                            onClick={this.handleRadio(1)}
                            checked={this.state.radio === 1 ? true : false}
                            label="Male"
                            type="radio"
                            id="radio1"
                            size="sm"
                            containerClass="mr-3"
                          />
                          <MDBInput
                            gap
                            onClick={this.handleRadio(2)}
                            checked={this.state.radio === 2 ? true : false}
                            label="Female"
                            type="radio"
                            id="radio2"
                            size="sm"
                            containerClass="mr-3"
                          />
                        </fragment>

                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">
                              Upload
                            </span>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                              Choose file
                            </label>
                          </div>
                        </div>

                        <div className="text-center mt-1-half">
                          <MDBBtn
                            color="info"
                            className="mb-2"
                            onClick={this.toggle(2)}
                          >
                            Submit
                            <MDBIcon icon="paper-plane" className="ml-1" />
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBModalBody>
                  </MDBModal>
                </MDBCardBody>
              </MDBCard>

              <MDBCol md="2" />
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </div>
  );
      }
      }

      export default withRouter(Profile);
