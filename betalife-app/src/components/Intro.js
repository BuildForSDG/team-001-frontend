import React, { Fragment } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBFormInline, MDBDatePickerV5 } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import loginBg from '../images/buildings.jpg'
import Signup from './Signup'

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      radio: 2,
      birthDate: new Date()
    };
    this.doCollapse = this.doCollapse.bind(this);
  }

  doCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleRadio = nr => () => {
    this.setState({
      radio: nr
    });
  }

  handleBirth = date => {
    this.setState({
      birthDate: date
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                <strong className="font-italic">Betalife</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.doCollapse} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">About Us</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={loginBg}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">

              <MDBContainer>

                <p className="my-3">Betalife is a platform that matches users with existing opportunities in skill training. </p>

                <MDBBtn color="primary" onClick={this.toggle(2)}>
                  <MDBIcon icon="address-card" className="mr-1" /> Sign up
                </MDBBtn>

                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="md" cascading>
                  <MDBModalHeader
                    toggle={this.toggle(2)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  >
                    <MDBIcon icon="pencil-alt" className="px-3" />
                    Sign up Form
                  </MDBModalHeader>
                  <MDBModalBody>
                    <h3> Select Role </h3>

                    <div className="text-center">
                      <button
                        type="button"
                      className="light btn btn-link"> Trainee
                      </button>
                      <button
                        type="button"
                      className="light btn btn-link"> Organizer
                      </button>
                      <button
                        type="button"
                      className="light btn btn-link"> Sponsor
                      </button>

                    </div>


                    <MDBInput
                      label="First name"
                      type="text"
                      iconClass="dark-grey"
                    />

                    <MDBInput
                      label="last name"
                      type="text"
                      iconClass="dark-grey"
                    />

                    <MDBInput
                      label="Organization name"
                      type="text"
                      iconClass="dark-grey"
                    />

                    <MDBInput
                      label="Phone number"
                      type="number"
                      iconClass="dark-grey"
                    />

                    <MDBInput label="Your email"
                      type="email"
                    />
                    <MDBInput
                      label="Your password"
                      type="password"
                      iconClass="dark-grey"
                    /><MDBFormInline>
                      <MDBInput
                        onClick={this.handleRadio(1)}
                        checked={this.state.radio === 1 ? true : false}
                        label='Male'
                        type='radio'
                        id='radio1'
                        containerClass='mr-5'
                      />
                      <MDBInput
                        onClick={this.handleRadio(2)}
                        checked={this.state.radio === 2 ? true : false}
                        label='Female'
                        type='radio'
                        id='radio2'
                        containerClass='mr-5'
                      />
                    </MDBFormInline>

                    <MDBInput
                      label="Address"
                      type="text"
                      iconClass="dark-grey"
                    />

                    <MDBFormInline className="my-4">
                      <label className="mr-2">Date of birth</label>
                      <DatePicker className="border border-0 border-dark"
                        selected={this.state.birthDate}
                        omChange={this.handleBirth}
                      />
                    </MDBFormInline>

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
                        Signup
                        <MDBIcon icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </MDBModalBody>
                </MDBModal>

                <MDBBtn color="light" className="text-primary" onClick={this.toggle(3)}>
                  Login <MDBIcon icon="address-card" className="ml-1" />
                </MDBBtn>

                <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="md" cascading>
                  <MDBModalHeader
                    toggle={this.toggle(3)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  >
                    <MDBIcon icon="pencil-alt" className="px-3" />
                    Login Form
                  </MDBModalHeader>
                  <MDBModalBody>
                    <MDBInput label="Your email"
                      type="email"
                    />
                    <MDBInput
                      label="Your password"
                      type="password"
                      iconClass="dark-grey"
                    />
                    <div className="text-center mt-1-half">
                      <MDBBtn
                        color="info"
                        className="mb-2"
                        onClick={this.toggle(3)}
                      >
                        login
                        <MDBIcon icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </MDBModalBody>
                </MDBModal>

              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>


        {/* I left the following in case you need this in your componemt. Just copy and edit.
          <main>
          <MDBContainer className="text-center my-5">
            <p align="justify"> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main> */}
      </div>
    );
  }
}

export default Intro;
