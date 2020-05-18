import React, { Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBIcon, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import loginBg from '../images/buildings.jpg'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
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
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
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
              <p className="my-3">Betalife is a platform that matches users with existing opportunities in skill training. </p>
              <div className="text-center">
                <MDBBtn color="primary">
                  <MDBIcon icon="address-card" className="mr-1" /> Sign Up
                </MDBBtn>
                <MDBBtn color="light" className="text-primary">
                  Login <MDBIcon icon="address-card" className="ml-1" />
                </MDBBtn>
              </div>
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

export default Login;
