import React, { Component } from "react";import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBFormInline} from "mdbreact";

import Events from "./components/Events";

import loginBg from "./images/buildings.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      modal2: false,
      modal3: false,
      modal4: false,
      radio: 2,
      startDate: new Date(),
      org: false,
      showLogin: "d-block",
      showEvents: "d-none"
    };
    this.doCollapse = this.doCollapse.bind(this);
  }

  doCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  // nr represents modal number
  toggle = (nr) => () => {
    if (nr === 2) {
      this.setState({
        modal2: !this.state.modal2
      });
    }
    else if (nr === 3){
      this.setState({
      modal3: !this.state.modal3
      });
    }
    else if (nr === 4){
      this.setState({
        modal4: !this.state.modal4
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

  handleTrainee = (event) => {
    event.preventDefault();
    this.setState({ org: false });
  }

  handleOrganizer = (event) => {
    event.preventDefault();
    this.setState({ org: true });
  }

  handleSponsor = (event) => {
    event.preventDefault()
    this.setState({ org: true });
  }

  handleEvent = () => {
    this.setState({
      showEvents: "d-block",
      showLogin: "d-none"
    });
  }

  render() {
    const { org } = this.state;
    const {showEvent} = this.state;
    return (
      <div>
        <Router>
          <header>
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
                    <MDBNavLink to=""
                      onClick={this.handleEvent}>Events</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" onClick={this.toggle(4)}>Portal</MDBNavLink>

                    <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="md" cascading>
                      <MDBModalHeader
                        toggle={this.toggle(4)}
                        titleClass="d-inline title"
                        className="text-center light-blue darken-3 white-text"
                      >
                        <MDBIcon icon="pencil-alt" className="px-3" />
                        Admin Login
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
                            onClick={this.toggle(4)}
                          >
                            login
                            <MDBIcon icon="paper-plane" className="ml-1" />
                          </MDBBtn>
                        </div>
                      </MDBModalBody>
                    </MDBModal>

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

            { this.state.showLogin !== "d-block" ? null :
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
                      <MDBModalBody className="text-left">
                        <h3 className="text-center"> Select Role </h3>

                        <div className="text-center">
                          <fragment className="btn-group text-center">
                            <MDBBtn color="reset-color" className="text-primary" onClick={this.handleTrainee}>
                              Trainee
                              <MDBIcon  icon="diagnoses" className="ml-1" />
                            </MDBBtn>
                            <MDBBtn color="reset-color" className="text-primary" onClick={this.handleOrganizer}>
                              Orgaizer
                              <MDBIcon icon="user-tie" className="ml-1" />
                            </MDBBtn>
                            <MDBBtn color="reset-color" className="text-primary" onClick={this.handleSponsor}>
                              Sponsor
                              <MDBIcon  icon="crown" className="ml-1" />
                            </MDBBtn>
                          </fragment>
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

                        {/* hide organization field based on role selected */}
                        { org !== true ?
                          <fragment className="d-none">
                            <MDBInput
                              label="Organization name"
                              type="text"
                              iconClass="dark-grey"
                            />
                          </fragment>
                        :
                        <fragment>
                          <MDBInput
                            label="Organization name"
                            type="text"
                            iconClass="dark-grey"
                          />
                        </fragment>
                        }

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
                        />

                        <MDBInput
                          className="d-inline"
                          label="Address"
                          type="text"
                          iconClass="dark-grey"
                        />

                        <MDBFormInline className="my-4">
                          <label className="mr-2">Date of birth</label>
                          <DatePicker className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey"
                            selected={this.state.startDate}
                            omChange={this.handleBirth}
                          />
                        </MDBFormInline>

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
                            Sign up
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
            }
              </header>

          <main>
            <MDBContainer>
              { this.state.showEvents === "d-block" ? <Events /> : null }
          </MDBContainer>
        </main>
      </Router>
      </div>
    );
  }
}

export default App;
