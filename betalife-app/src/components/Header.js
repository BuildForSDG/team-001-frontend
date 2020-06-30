import React, { Component } from "react";
import { BrowserRouter as Router , withRouter } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBBadge,
MDBAlert } from "mdbreact";

class Header extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      collapse: false,
      isWideEnough: false,
      modal2: false,
      modal3: false,
      modal4: false,
      email: '',
      password: '',
      role: 'admin',
      loggedIn: false,
      name: '',
      redirect: null
    };
    this.doCollapse = this.doCollapse.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleFundsDisplay = this.handleFundsDisplay.bind(this);
  }  
  
  componentDidMount() {
    localStorage.getItem("localData") ?
    this.setState({
        loggedIn: true,
        modal4: false,
        collapse: false
      }) :
    this.setState({
      loggedIn: false,
        modal4: false,
        collapse: false
      })
  }
  
  handleLogin = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/");
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: false
    });
    localStorage.clear();
    this.doCollapse();
    this.props.history.push("/");
  }

  closeNav = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/Events");
  }

  doCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  
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
  
  // handle showing events. Collapse navbar
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
  
  handleFundsDisplay = (e) => {
    e.preventDefault();
    this.doCollapse();
      this.props.history.push("/funds");
  }

  handleProfile = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/profile");
  }
  
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }  
  toastLogin = () => {
    toast("Admin login successful!");
  }
  
  handleAdminLogin = (e) => {
    axios.post("https://betalife-backend.herokuapp.com/api/auth/admin/login", this.state)
    .then(response => {
      console.log(this.state);
      console.log(response);
      if(response.status === 200){  
        this.setState({
          loginError: false,
          loggedIn: true,
          modal4: false,
          collapse: false
        });
        // this.doCollapse();
        const {successfulLogin} = this.props;
        successfulLogin(response.data);
        this.toastLogin();
        setTimeout(() => {
          this.props.history.push("/events");        
        }, 1000);
      }
      else {
        this.setState({
          loginError: true
        });
      }
    })
    .catch(error => {
      console.log(error);
      new Error(error);
      this.setState({
        loginError: true
      });
    });
  }

  handleAbout = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/About");
  }

  handleContact = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/Contact");
  }

  handleAnnouncement = (e) => {
    e.preventDefault();
    this.doCollapse();
    this.props.history.push("/Announcement");
  }

  render() {
    const localData = localStorage.getItem("localData") ? JSON.parse(localStorage.getItem("localData")).user.firstName :
    null
    const { email, password } = this.state;
    // console.log(this.props.localData.user.firstName);
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
                  <MDBNavLink to="/Events">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" onClick={this.handleAbout}>About Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to=""
                    onClick={this.handleDisplay}
                  >Events</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to=""
                    onClick={this.handleFundsDisplay}
                  >Funds</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" onClick={this.handleContact}>Contact</MDBNavLink>
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
                      <MDBInput
                        label="Admin email"
                        name="email"
                        type="email"
                        onChange={this.changeHandler}
                        value={email}
                      />
                      <MDBInput
                        label="Password"
                        name="password"
                        type="password"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={password}
                      />
                      <div className="text-center mt-1-half">
                        {
                          this.state.loginError === true ?
                            <MDBAlert color="danger">
                              <strong>Oops!</strong> Something went wrong.
                            </MDBAlert> : null
                        }

                        <MDBBtn
                          color="info"
                          className="mb-2"
                          onClick={this.handleAdminLogin}
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
                {/* <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem>
                  { localData ?
                    <MDBNavbarNav>
                      <MDBNavItem>
                        <MDBNavLink to="#" onClick={this.handleAnnouncement}><MDBIcon far icon="bell" />
                          <MDBBadge color="danger" className="ml-1">3</MDBBadge>
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#" onClick={this.handleProfile}> <MDBIcon far icon="user" /> {this.props.localData.user.firstName}
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="/" onClick={this.handleLogout}> Log out
                          {/* <MDBIcon icon="sign-out-alt" /> */}
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav> : null
                    // <MDBNavLink to="#" onClick={this.handleLogin}> Log in
                    //   {/* <MDBIcon icon="sign-in-alt" /> */}
                    // </MDBNavLink>
                  }
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <ToastContainer pauseOnFocusLoss={true} />
        </header>
      </div>
    );
  }

}

export default withRouter(Header);
