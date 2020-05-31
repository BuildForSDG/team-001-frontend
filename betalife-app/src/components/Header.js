import React, { Component } from "react";
import { BrowserRouter as Router , withRouter } from "react-router-dom";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from "mdbreact";

// import Events from "./Events";

class Header extends Component {
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
      loggedIn: false,
      redirect: null,
    };
    this.doCollapse = this.doCollapse.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  doCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  // nr represents modal number
  toggle = (nr) => (e) => {
    e.preventDefault();

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
      this.doCollapse();
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

  handleDisplay = (e) => {
    e.preventDefault();
    // localStorage.setItem("currentState", JSON.stringify(this.state));
    // localStorage.clear();
    this.setState({
      // showEventPg: "d-block",
      // showSignupPg: "d-none",
    });
    this.doCollapse();
      this.props.history.push("/events");
  }

  handleProfile = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/profile");
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: true,
      modal4: false,
      collapse: false
    });
    this.doCollapse();
    this.props.history.push("/events");
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: false
    });
    // localStorage.setItem("currentState", JSON.stringify(this.state));
    this.doCollapse();
    this.props.history.push("/");
  }

  closeNav = (e) => {
    if (this.state.coollapse === true) {
      this.setState({
        collapse: false
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="#" onClick={this.closeNav}>
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
                    onClick={this.handleDisplay}
                  >Events</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#">Contact</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" onClick={() => {
                    // this.toggle(4);
                    this.setState({
                      modal4: true
                    });
                  }}
                  >Portal</MDBNavLink>

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
                          onClick={this.handleLogin}
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
                {/* <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem>
                  { this.state.loggedIn === true ?
                    <MDBNavbarNav>
                      <MDBNavItem>
                        <MDBNavLink to="#" onClick={this.handleProfile}><MDBIcon far icon="user" />
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/" onClick={this.handleLogout}> Log out
                          {/* <MDBIcon icon="sign-out-alt" /> */}
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav> :
                    <MDBNavLink to="#" onClick={this.handleLogin}> Log in
                      {/* <MDBIcon icon="sign-in-alt" /> */}
                      </MDBNavLink>
                  }
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

        </header>
      </div>
    );
  }

}

export default withRouter(Header);
