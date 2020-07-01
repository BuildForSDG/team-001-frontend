import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MDBCard, MDBCardBody, MDBCardUp, MDBAvatar, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBAlert } from "mdbreact";

import photo from "../images/fash_women1.jpg";

class Profile extends Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(localStorage.getItem("localData"));
    this.state = {
      modal2: false,
      radio: 2,
      id: userData.user.id,
      profileError: '',
      startDate: new Date(),
      password: '',
      imageUrl: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
  }
  
  // nr represents modal number
  toggle = (nr) => () => {
    // e.preventDefault();

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
    this.props.history.push("/Message");
  }
  
  changeHandler = (e) => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  toastUpdate = () => {
    toast('update successful!');
  }
  
  updateProfile = () => {
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;
    this.setState({
      firstName: tokenId.user.firstName,
      lastName: tokenId.user.lastName,
      email: tokenId.user.email,
      role: tokenId.user.role,
    })
    const id = tokenId.user.adminId ? tokenId.user.adminId : tokenId.user.userId;
    // console.log(id);
    
    // if user is admin 
    this.state.role === 'admin' ?
    // update admin record
    axios.put(`http://localhost:4000/api/auth/admin/updateAdmin/${id}`,
    this.state,
    { headers: {
      "Authorization": `Bearer ${token}` }
    })
    .then(response => {
      if(response.status === 201) {
        this.toastUpdate();        
        setTimeout(() => {
        window.location.reload(true);            
      }, 1000);
      }
      else {
        this.setState({
          profileError: true
        });
        console.log('In else. things broke.');
      }
    })
    .catch(error => {
      this.setState({
        profileError: true
      });
      new Error(error);
      console.log('In catch. things broke.');
    }) :
    // or else update user record
    axios.put(`http://localhost:4000/api/auth/updateUser/${id}`,
    this.state,
    { headers: {
      "Authorization": `Bearer ${token}` }
    })
    .then(response => {
      if(response.status === 201) {
        this.toastUpdate();        
        setTimeout(() => {
        window.location.reload(true);            
      }, 1000);
      }
      else {
        this.setState({
          profileError: true
        });
        console.log('In else. things broke.');
      }
    })
    .catch(error => {
      this.setState({
        profileError: true
      });
      new Error(error);
      console.log('In catch. things broke.');
    });
  }

  render() {
    const userData = JSON.parse(localStorage.getItem("localData"));
    const { password, imageUrl } = this.state;
    
  return (
    <div>
      <div className="row mt-4 pt-5">
        <div className="col-12 mb-4">
          <MDBRow className="text-center">
            <MDBCol md="2" />
            <MDBCol md="8">
              <MDBCard testimonial>
                <figure className="figure">
                  <img src={photo} className="figure-img img-fluid z-depth-1"
                    alt="" style={{ width: "400px" }} />
                  <figcaption className="figure-caption text-center">
                    {userData.user.role === 'admin' ?
                    userData.user.adminId :
                    userData.user.userId}
                  </figcaption>
                </figure>

                <MDBBtn color="primary" size="50" onClick={this.toggle(2)}>
                  <MDBIcon icon="user-edit" className="mr-1" /> Edit Profile
                </MDBBtn>

                {/* <a href="#" onClick={this.toggle(2)}>
                  <small className="pb-2">Edit profile</small>
                </a> */}

                <MDBCardBody>
                  <h4 className="card-title">
                    {`${userData.user.firstName} ${userData.user.lastName}`}
                  </h4>
                  {/* <fragment className="btn-group text-center my-2">
                    <MDBBtn color="primary" className="px-3" onClick={this.handleMyEvents}>
                      My Events
                      <MDBIcon  far icon="calendar-check" className="ml-2" />
                    </MDBBtn>
                    <MDBBtn color="white" className="px-3" href="#" onClick={this.handleMyMessages}>
                      Messages
                      <MDBIcon icon="comment-alt" className="text-primary ml-2" />
                    </MDBBtn>
                  </fragment> */}

                  <p><strong>Role</strong>: {userData.user.role}</p>
                  <p><strong>Sex</strong>: {userData.user.sex}</p>
                  <p><strong>Phone No</strong>: 
                    {userData.user.phoneNumber === '' ?
                    "none" :
                    userData.user.phoneNumber }
                  </p>
                  <p><strong>Email</strong>:
                    { userData.user.email }
                  </p>
                  <p><strong>location</strong>: 
                    {userData.user.city === '' ?
                    "none" :
                    userData.user.city }
                  </p>
                  {/* <MDBIcon color="primary" icon="map-marker-alt" /> */}
                  <p><strong>Country</strong>:
                    {userData.user.country ===  null ?
                    "none" :
                    userData.user.country }
                  </p>
                  <p><strong>Date of Birth</strong>: { userData.user.country }</p>

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
                          label="Enter new password"
                          name="password"
                          type="password"
                          iconClass="dark-grey"
                          onChange={this.changeHandler}
                          value={password}
                        />

                        {/* <MDBInput
                          label="Add imgae url"
                          name="imageUrl"
                          type="password"
                          iconClass="dark-grey"
                          omChange={this.changeHandle}
                          value={imageUrl}
                        /> */}

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

                        {/* <fragment className="form-check-inline mb-3">
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
                        </fragment> */}

                        <input
                          type="file"
                          name="imageUrl"
                          onChange={this.changeHandler}
                          value={imageUrl} />

                        <div className="text-center mt-2">
                          {
                            this.state.profileError === true ?
                              <MDBAlert color="danger">
                                <strong>Oops!</strong> Something went wrong.
                              </MDBAlert> : null
                          }
                          <MDBBtn
                            color="info"
                            className="mb-2"
                            onClick={this.updateProfile}
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
            <ToastContainer pauseOnFocusLoss={true} />
          </MDBRow>
        </div>
      </div>
    </div>
  );
      }
      }

      export default withRouter(Profile);
