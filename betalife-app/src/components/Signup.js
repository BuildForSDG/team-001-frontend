import React, { Component } from "react";
import { withRouter} from "react-router-dom";
// import { BrowserRouter as Router , withRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MDBContainer, MDBMask, MDBView, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBFormInline} from "mdbreact";

import loginBg from "../images/buildings.jpg";

class Signup extends Component {
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
      signupError: false,
      loginError: false,
      role: "",
      firstName: '',
      lastName: "",
      orgName: "",
      phoneNumber: '',
      email: '',
      password: '',
      city: '',
      doBirth: new Date(),
      sex: 'female',
      imageUrl: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  doCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  
  // nr represents modal number
  toggle = (nr) => (e) => {
    // e.preventDefault();

    // sign up submit button
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
    if (nr === 1) {
      this.setState({
        radio: nr,
        sex: "male",
      });
    }
    else if (nr === 2) {
      this.setState({
        radio: nr,
        sex: "female",
      });
    }
  }
  
  handleDateSelect = (date) => {
    this.setState({
      doBirth: date
    });
  }

  handleBirth = (date) => {
    this.setState({
      doBirth: date
    });
  }

  handleTrainee = (event) => {
    event.preventDefault();
    this.setState({ 
      role: "trainee",
      org: false });
  }

  handleOrganizer = (event) => {
    event.preventDefault();
    this.setState({ 
      role: "organizer",
      org: true });
  }

  handleSponsor = (event) => {
    event.preventDefault();
    this.setState({ 
      role: "sponsor",
      org: true });
  }
  
  // Toast  signup successful
  toastSignup = () => {
    toast("Signup successful!");
  }
  
  // Toast  signup successful
  toastLogin = () => {
    toast("Login successful!");
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signupSubmit = (e) => {
    axios.post("https://betalife-backend.herokuapp.com/api/auth/signup", this.state)
    .then(response => {
      if(response.status === 201){  
        this.setState({
          signupError: false
        });
        this.toastSignup();
        setTimeout(() => {
          this.handleLogin();     
        }, 2000);
      }
      else {
        alert("Could not create new user!");
      }
    })
    .catch(error => {
      console.log(error);
      new Error(error);
      this.setState({
        signupError: true
      });
    });
  }
    
  handleLogin = (e) => {
    axios.post("https://betalife-backend.herokuapp.com/api/auth/login", this.state)
    .then(response => {
      console.log(response);
      if(response.status === 200){  
        this.setState({
          loginError: false
        });
        const {successfulLogin} = this.props;
        successfulLogin(response.data);
        this.toastLogin();
        setTimeout(() => {
          this.props.history.push("/events");        
        }, 3000);
      }
      else {
        alert("Oops! Something went wrong. Check permission!");
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

  render() {
    const {
      org,
      firstName,
      lastName,
      orgName,
      phoneNumber,
      email,
      password,
      city,
      doBirth,
      sex,
      imageUrl } = this.state;
    return (
      <div>
        <MDBView src={loginBg}>
          <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">

            <MDBContainer>

              <p className="my-3">Betalife is a platform that matches users with existing opportunities in skill training. </p>

              <MDBBtn color="primary" onClick={this.toggle(2)}>
                <MDBIcon icon="user-plus" className="mr-1" /> Sign up
              </MDBBtn>

              {/* Modal for signup */}
              <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg" cascading>
                <MDBModalHeader
                  toggle={this.toggle(2)}
                  titleClass="d-inline title"
                  className="text-center light-blue darken-3 white-text"
                ><MDBIcon />
                  <MDBIcon icon="user-plus" className="px-3" />
                  Sign up Form
                </MDBModalHeader>
                <form onSubmit={this.signupSubmit}>                
                  <MDBModalBody>
                    <h3 className="text-center"> Select Role </h3>

                    <fragment className="btn-group text-center">
                      <MDBBtn color="reset-color" className="text-primary" onClick={this.handleTrainee}>
                        <h6>Trainee</h6>
                        <MDBIcon  icon="diagnoses" className="ml-1" />
                      </MDBBtn>
                      <MDBBtn color="reset-color" className="text-primary" onClick={this.handleOrganizer}>
                        <h6>Organizer</h6>
                        <MDBIcon icon="user-tie" className="ml-1" />
                      </MDBBtn>
                      <MDBBtn color="reset-color" className="text-primary" onClick={this.handleSponsor}>
                        <h6>Sponsor</h6>
                        <MDBIcon  icon="crown" className="ml-1" />
                      </MDBBtn>
                    </fragment>

                    <div className="text-left">
                      <MDBInput
                        label="First name"
                        name="firstName"
                        type="text"
                        iconClass="dark-grey"
                        required
                        onChange={this.changeHandler}
                        value={firstName}
                      />
                      {/* <small id="firstNameHelp" className="form-text text-muted">
                        Required
                      </small> */}

                      <MDBInput
                        label="last name"
                        name="lastName"
                        type="text"
                        iconClass="dark-grey"
                        required
                        onChange={this.changeHandler}
                        value={lastName}
                      />
                      {/* hide organization field based on role selected */}
                      { org !== true ?
                        <fragment className="d-none">
                          <MDBInput
                            label="Organization name"
                            Name="orgName"
                            type="text"
                            iconClass="dark-grey"
                            onChange={this.changeHandler}
                            value={orgName}
                          />
                        </fragment>
                      :
                      <fragment>
                        <MDBInput
                          label="Organization name"
                          name="orgName"
                          type="text"
                          iconClass="dark-grey"
                          onChange={this.changeHandler}
                          value={orgName}
                        />
                      </fragment>
                      }
                      
                      <MDBInput
                        label="Phone number"
                        name="phoneNumber"
                        type="number"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={phoneNumber}
                      />

                      <MDBInput
                        label="Your email"
                        name="email"
                        type="email"
                        required
                        onChange={this.changeHandler}
                        value={email}
                      />
                      <MDBInput
                        label="Your password"
                        name="password"
                        type="password"
                        iconClass="dark-grey"
                        required
                        onChange={this.changeHandler}
                        value={password}
                      />
                      <MDBInput
                        className="d-inline"
                        label="City"
                        name="city"
                        type="text"
                        iconClass="dark-grey"
                        onChange={this.changeHandler}
                        value={city}
                      />

                      <MDBFormInline className="my-4">
                        Date of Birth: 
                        <input
                          className="ml-2"
                          name="doBirth"
                          type="date"
                          min="1960-01-01"
                          max="2005-12-31"
                          selected={doBirth}
                          onSelect={this.handleDateSelect}
                          onChange={this.changeHandler}
                          value={doBirth}
                        />

                        {/* <MDBInput
                          className="d-inline"
                          label="Date of Birth"
                          name="doBirth"
                          type="date"
                          min="1960-01-01"
                          max="2005-12-31"
                          iconClass="dark-grey"
                          selected={doBirth}
                          onSelect={this.handleDateSelect}
                          onChange={this.changeHandler}
                          value={doBirth}
                        /> */}
                        {/* <label className="mr-2">Date of birth</label> */}

                        {/* <DatePicker name="doBirth" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                          selected={doBirth}
                          onSelect={this.handleDateSelect}
                          omChange={this.handleBirth}
                        /> */}
                      </MDBFormInline>

                      <fragment className="form-check-inline mb-3">
                        <label className="mr-5">Sex</label>
                        <MDBInput
                          gap
                          onClick={this.handleRadio(1)}
                          checked={this.state.radio === 1 ? true : false}
                          label="Male"
                          name="sex"
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
                          name="sex"
                          type="radio"
                          id="radio2"
                          size="sm"
                          containerClass="mr-3"
                        />
                      </fragment>
                      
                      <input
                        type="file"
                        name="imageUrl"
                        onChange={this.changeHandler}
                        value={imageUrl} />

                      {/* <div className="input-group mb-4">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                        </span>
                        </div>
                        <div className="custom-file">
                        <input
                        name="imageUrl"
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
                        </label>
                        </div>
                      </div> */}
                      <div className="text-center mt-1-half">
                        {
                          this.state.signupError === true ?
                            <p className="text-danger my-2">Something went wrong!</p> : null
                        }
                        <MDBBtn
                          color="info"
                          className="mb-2"
                          onClick={                      this.signupSubmit}
                        >
                          Sign up
                          <MDBIcon icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBModalBody>
                </form>
              </MDBModal>

              <MDBBtn color="light" className="text-primary" onClick={this.toggle(3)}>
                Login
                <MDBIcon far icon="user" className="ml-1" />
              </MDBBtn>

              {/* <MDBBtn color="light" className="text-primary" href="/events">
                  Take a tour
                  <MDBIcon far icon="user" className="ml-1" />
              </MDBBtn> */}


              <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="md" cascading>
                <MDBModalHeader
                  toggle={this.toggle(3)}
                  titleClass="d-inline title"
                  className="text-center light-blue darken-3 white-text"
                >
                  <MDBIcon icon="user" className="px-3" />
                  Login Form
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBInput
                    label="Your email"
                    name="email"
                    type="email"
                    required
                    onChange={this.changeHandler}
                    value={email}
                  />
                  <MDBInput
                    label="Your password"
                    name="password"
                    type="password"
                    iconClass="dark-grey"
                    required
                    onChange={this.changeHandler}
                    value={password}
                  />
                  <div className="text-center mt-1-half">
                    {
                      this.state.loginError === true ?
                        <p className="text-danger my-2">Something went wrong!</p> : null
                    }
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

            </MDBContainer>
          </MDBMask>
        </MDBView>
        <ToastContainer pauseOnFocusLoss={true} />
      </div>
    );
  }
}

export default withRouter(Signup);
