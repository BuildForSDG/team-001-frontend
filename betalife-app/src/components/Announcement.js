
import React, { Component } from "react";

import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bgTech from "../images/event_bg1.jpg";

import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCardBody,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBCardText,
  MDBAlert
} from "mdbreact";

class Announcement extends Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(localStorage.getItem("localData"));
    const fname = userData.user.firstName; 
    const lname = JSON.parse(localStorage.getItem("localData")).user.lastName;
    const name = `${userData.user.firstName} ${userData.user.lastName}`;
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      userId: 
        JSON.parse(localStorage.getItem("localData")).user.userId,
      postedBy: name,
      role: JSON.parse(localStorage.getItem("localData")).user.role,
      linkedEvent: '',
      eventDetails: {},
      announcementsError: false,
      title: '',
      description: '',
      createdDate: new Date(),
      trainee: false,
      organizer: false,
      sponsor: false,
      announcements: []
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.newAnnoucementSubmit = this.newAnnoucementSubmit.bind(this);
  }
  
  componentDidMount() {
    this.getAnnouncement();
  }
  
  // nr represents modal number
  toggle = (nr) => (e) => {
    // 1 represents toggling for Linked Event Details modal.
    if (nr === 1) {
      this.setState({
        modal1: !this.state.modal1,
      });
    }
    
    // 2 represents toggling for new Announcement form modal
    if (nr === 2) {
      this.setState({
        modal2: !this.state.modal2,
      });
    }    
    // 3 represents toggling for update Announcement form modal
    else if (nr === 2) {
      this.setState({
        modal3: !this.state.modal3,
      });
    }
  };
  
  getAnnouncement = () => {
    axios.get('https://betalife-backend.herokuapp.com/api/announcement')
    .then(response => {
      if(response.status === 200) {
        // console.log(response)
        // "Oops! Somthing went wrong."
        this.setState({
          announcements: response.data
        })
      }
      else {
        console.log("Oops! Something went wrong");
      }
    })    
    .catch( error => error);
  }
  
  // get linked event
  getEvent = (e, detailContainer) => {
    console.log(detailContainer.linkedEvent);
    axios.get(`https://betalife-backend.herokuapp.com/api/events/${detailContainer.linkedEvent}`)
    .then(response => {
      if(response.status === 200) {
        // console.log(response)
        // "Oops! Somthing went wrong."
        this.setState({
          eventDetails: response.data,
          modal1: !this.state.modal1
        });
        console.log(response);
      }
      else {
        console.log("Oops! Something went wrong");
      }
    })    
    .catch( error => error);
  }
  
  // Checkbox selection check 
  handleCheck = (nr) => (e) => {
    // e.preventDefault();
    if (nr === 1) {
      if(e.target.checked === true){
        this.setState({
          // checkbox: nr,
          trainee: true
        });
      }
      else {
        this.setState({
          // checkbox: nr,
          trainee: false
        });
      }           
    }
    else if (nr === 2) {
      if(e.target.checked === true){
        this.setState({
          organizer: true
        });
      }
      else {
        this.setState({
          organizer: false
        });
      }
    }
    else if (nr === 3) {
      if(e.target.checked === true){
        this.setState({
          sponsor: true
        });
      }
      else {
        this.setState({
          sponsor: false
        });
      }
    }
  }
  
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state.trainee);
  }
  
  toastAnnouncementDelete = () => {
    toast("Deletee Announcement successful !");
  }
  
  deleteAnnouncement = (e, announcementDelete) => {
    e.preventDefault();
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;    
      axios.delete(`https://betalife-backend.herokuapp.com/api/announcement/${announcementDelete._id}`, {
        headers: {
          "Authorization": `Bearer ${token}`          
        }
      })
      .then(response => {
        if(response.status === 200) {
        this.setState({
          announcementsError: false
        }); 
        this.toastAnnouncementDelete();
        setTimeout(() => {
        this.getAnnouncement();            
      }, 2000);
        }
        else {
          alert("Delete failed !");
        }
      })
      .catch( error => {
        console.log(error);      
        new Error(error);
        this.setState({
          announcementsError: true
        });
      });
  }
  
  showUpdateForm = (announcementUpdate) => {    
        // e.preventDefault();
        // this.toggle(3);
        this.setState({
          modal3: !this.state.modal3
        });
    }    
    
  toastAnnouncementUpdate = () => {
    toast("Update Announcement successful!");
  }
    
  updateAnnouncementSubmit = (e, announcementUpdate) => {
    e.preventDefault();
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;
      e.preventDefault();
      axios.put(`https://betalife-backend.herokuapp.com/api/announcement/${this.state.id}`, this.state, {
        headers: {
          "Authorization": `Bearer ${token}`          
        }
      })
      .then(response => {
        // console.log("inside updateAnnouncementSubmit function", this.state);
        if(response.status === 201) {
        this.setState({
          announcementsError: false,
          modal3: false
        });
          this.toastAnnouncementUpdate();
          // window.location.reload(true);
          setTimeout(() => {
          this.getAnnouncement();            
        }, 2000);
        }
        else {
          alert("Could not update announcement !");
        }
      })
      .catch( error => {     
        new Error(error);
        this.setState({
          announcementsError: true
        });
      });
  }
  
  // Toast  signup successful
  toastAnnouncementPost = () => {
    toast("Add Announcement successful!");
  }
  
  newAnnoucementSubmit = (e) => {
  let tokenId = JSON.parse(localStorage.getItem("localData"));
  const token = tokenId.user.token;
    e.preventDefault();     
    axios.post('https://betalife-backend.herokuapp.com/api/announcement', this.state, {
      headers: {
        "Authorization": `Bearer ${token}`          
      }
    })
    .then(response => {
      if(response.status === 201) {  
        this.setState({
          announcementsError: false,
          modal2: false
        });
        this.toastAnnouncementPost();
        setTimeout(() => {
          this.getAnnouncement();        
        }, 2000);
      }
      else {
        alert("could not post data !");
      }
    })
    .catch( error => {     
      new Error(error);
      this.setState({
        announcementsError: true
      });
    });
  }

  render() {
    const { announcements } = this.state;
    const { title, description, linkedEvent, trainee, organizer, sponsor } = this.state;
    return (
      <div>
        <MDBRow className="mt-5">
          <MDBCol sm="10" className="mx-auto mt-5 mb-2">
            <MDBCard>
              <MDBCol sm="12" className="float-left ml-3 py-2">
                <MDBCardTitle tag="h3" className="float-left">
                  Announcement
                </MDBCardTitle>
                <MDBCol sm="3" className="mx-auto float-right">
                  <MDBBtn
                    color="primary"
                    className="px-2 d-block"
                    size="md"
                    onClick={this.toggle(2)}
                  >
                    {/* <MDBIcon icon="plus-square" /> */}
                    <MDBIcon far icon="bell" className="mr-1" />
                    Create new
                  </MDBBtn>
                  {/* <MDBDropdown dropleft className="ml-1 float-right">
                    <MDBDropdownToggle caret color="white" className="">
                      <MDBIcon icon="sliders-h" className="mr-1" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic className="">
                      <MDBDropdownItem header>Filter by</MDBDropdownItem>
                      <MDBDropdownItem>Category</MDBDropdownItem>
                      <MDBDropdownItem>Location</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown> */}
                </MDBCol>
              </MDBCol>

              <MDBCardBody>
                <fragment className="text-center my-2">
                  {/* map all Announcements for current user here */}
                  { announcements.map( announcement => {
                    return <MDBCol key={announcement._id} md="12" className="text-center mb-2">
                      <MDBCard>
                        <MDBCardBody className='elegant-color white-text rounded-bottom'>
                          {/* <a href='#!' className='activator waves-effect waves-light mr-4'>
                            <MDBIcon icon='share-alt' className='white-text' />
                          </a> */}
                          <MDBCardTitle className="text-capitaliz">{announcement.title}</MDBCardTitle>
                          <hr className='hr-light' />
                          <MDBCardText className='white-text'>
                            {announcement.description}
                          </MDBCardText>
                          <a>
                            <p className='white-text text-underline'  onClick={(e) => {
                              const detailContainer = announcement;
                              return (
                                this.getEvent(e, detailContainer)
                              );
                            }}>
                              <small>Linked Event: </small>
                              {/* { console.log(announcement.linkedEvent) } */}
                              { announcement.linkedEvent === "" ?
                              " No linked event" :
                              <u>{announcement.linkedEvent}</u>
                              }
                            </p>
                          </a>

                          <a href="#" className='white-text d-flex justify-content-center'>
                            {/* <MDBIcon icon='user' className='mr-2' /> */}
                            <p className='white-text text-capitaliz'>
                              <small>Posted By </small> {announcement.postedBy}
                            </p>
                          </a>

                          <p className='white-text text-capitalize'>
                            <small>Role </small> {announcement.role}
                          </p>

                          <MDBCardText className='white-text font-weight-lighter white-text'> {announcement.createdDate}
                          </MDBCardText>

                        </MDBCardBody>
                        <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
                          <ul className="list-unstyled list-inline font-small">
                            <li className="list-inline-item pr-2 white-text float-left pl-1">
                              {/* <MDBIcon far icon="clock" /> Last updated {event.createdDate} */}
                            </li>

                            {/* delete event button */}
                            <li className="list-inline-item float-right pr-1">
                              <a href="#" className="text-danger" onClick={(e) => {
                                const announcementDelete = announcement;
                                return (
                                  this.deleteAnnouncement(e, announcementDelete)
                                )}}>  
                                <MDBIcon far icon="trash-alt" />
                              </a>
                            </li>

                            {/* update event button */}
                            <li className="list-inline-item float-right pr-2">
                              <a href="#" className="white-text" onClick={(e) => {
                                this.setState({
                                  hideAddDetail: true,
                                  title: announcement.title,
                                  description: announcement.description,
                                  linkedEvent: announcement.linkedEvent,
                                  announcementingBody: announcement.announcementingBody,
                                  id: announcement._id
                                });
                                const announcementUpdate = announcement;
                                return (
                                  this.showUpdateForm(e, announcementUpdate)
                                )
                              }}>              
                                <MDBIcon far icon="edit" />
                              </a>
                            </li>

                            {/* share button */}
                            <li className="list-inline-item pr-3 float-right">
                              <a href="#!" className="white-text">
                                <MDBIcon icon="share-alt" className="mr-1" />
                              </a>
                            </li>

                          </ul>
                        </div>
                      </MDBCard>
                    </MDBCol>
                  })}

                </fragment>

                {/* modal for create Announcement */}
                <MDBModal
                  isOpen={this.state.modal2}
                  toggle={this.toggle(2)}
                  size="lg"
                  cascading
                >
                  <MDBModalHeader
                    toggle={this.toggle(2)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  >
                    <MDBIcon />
                    <MDBIcon icon="pencil-alt" className="px-3" />
                    New Announcement
                  </MDBModalHeader>
                  <MDBModalBody>
                    <form>
                      {/* Default inline 1 */}
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input
                          name="trainee"
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultInline1"
                          onClick={this.handleCheck(1)}
                          onChange={this.changeHandler}
                          value={trainee}
                        />
                        {/* { console.log("trainee state", this.state.trainee)} */}
                        <label class="custom-control-label" for="defaultInline1">
                          Trainees
                        </label>
                      </div>

                      {/* Default inline 2 */}
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input
                          name="organizer"
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultInline2"
                          onClick={this.handleCheck(2)}
                          onChange={this.changeHandler}
                          value={organizer}
                        />
                        <label class="custom-control-label" for="defaultInline2">
                          Organizers
                        </label>
                      </div>

                      {/* Default inline 3 */}
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input
                          name="sponsor"
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultInline3"
                          onClick={this.handleCheck(3)}
                          onChange={this.changeHandler}
                          value={sponsor}
                        />
                        <label class="custom-control-label" for="defaultInline3">
                          Sponsors
                        </label>
                      </div>

                      <div className="text-left">
                        <MDBInput
                          name="title"
                          label="Title"
                          type="text"
                          iconClass="dark-grey"
                          onChange={this.changeHandler}
                          value={title}
                        />
                        <MDBInput
                          name="description"
                          type="textarea"
                          rows="2"
                          label="Description"
                          iconClass="pencil-alt"
                          onChange={this.changeHandler}
                          value={description}
                        />
                        <MDBInput
                          label="linked Event (Enter event id)"
                          name="linkedEvent"
                          type="text"
                          iconClass="dark-grey"
                          onChange={this.changeHandler}
                          value={linkedEvent}
                        />
                        <div className="text-center mt-1-half">
                          {
                            this.state.announcementsError === true ?
                              <MDBAlert color="danger">
                                <strong>Oops!</strong> Something went wrong
                              </MDBAlert> : null
                          }
                          <MDBBtn
                            color="primary"
                            type="submit"
                            className="mb-2"
                            onClick={this.newAnnoucementSubmit}
                          >
                            Send
                            <MDBIcon icon="paper-plane" className="ml-1" />
                          </MDBBtn>
                        </div>
                      </div>
                    </form>

                    {/* <ToastContainer pauseOnFocusLoss={true} /> */}

                  </MDBModalBody>
                </MDBModal>

                {/* modal for update Announcement */}
                <MDBModal
                  isOpen={this.state.modal3}
                  toggle={this.showUpdateForm}
                  size="lg"
                  cascading
                >
                  <MDBModalHeader
                    toggle={this.showUpdateForm}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  >
                    <MDBIcon />
                    <MDBIcon icon="pencil-alt" className="px-3" />
                    New Announcement
                  </MDBModalHeader>
                  <MDBModalBody>
                    <form>
                      {/* Default inline 1 */}
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input
                          name="trainee"
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultInline1"
                          onClick={this.handleCheck(1)}
                          onChange={this.changeHandler}
                          value={trainee}
                        />
                        {/* { console.log("trainee state", this.state.trainee)} */}
                        <label class="custom-control-label" for="defaultInline1">
                          Trainees
                        </label>
                      </div>

                      {/* Default inline 2 */}
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input
                          name="organizer"
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultInline2"
                          onClick={this.handleCheck(2)}
                          onChange={this.changeHandler}
                          value={organizer}
                        />
                        <label class="custom-control-label" for="defaultInline2">
                          Organizers
                        </label>
                      </div>

                      {/* Default inline 3 */}
                      <div class="custom-control custom-checkbox custom-control-inline">
                        <input
                          name="sponsor"
                          type="checkbox"
                          class="custom-control-input"
                          id="defaultInline3"
                          onClick={this.handleCheck(3)}
                          onChange={this.changeHandler}
                          value={sponsor}
                        />
                        <label class="custom-control-label" for="defaultInline3">
                          Sponsors
                        </label>
                      </div>

                      <div className="text-left">
                        <MDBInput
                          name="title"
                          label="Title"
                          type="text"
                          iconClass="dark-grey"
                          onChange={this.changeHandler}
                          value={title}
                        />
                        <MDBInput
                          name="description"
                          type="textarea"
                          rows="2"
                          label="Description"
                          iconClass="pencil-alt"
                          onChange={this.changeHandler}
                          value={description}
                        />
                        <MDBInput
                          label="linked Event (Enter event id)"
                          name="linkedEvent"
                          type="text"
                          iconClass="dark-grey"
                          onChange={this.changeHandler}
                          value={linkedEvent}
                        />
                        <div className="text-center mt-1-half">
                          {
                            this.state.announcementsError === true ?
                              <MDBAlert color="danger">
                                <strong>Oops!</strong> Something went wrong.
                              </MDBAlert> : null
                          }
                          <MDBBtn
                            color="primary"
                            type="submit"
                            className="mb-2"
                            onClick={this.updateAnnouncementSubmit}
                          >
                            Send
                            <MDBIcon icon="paper-plane" className="ml-1" />
                          </MDBBtn>
                        </div>
                      </div>
                    </form>
                  </MDBModalBody>
                </MDBModal>

                {/* UI for Event Details */}
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="md" cascading>
                  <MDBModalHeader
                    toggle={this.toggle(1)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  >
                    <h4>Event Details</h4>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
                    />
                    <div className="text-left">
                      <MDBCol className="float-left">
                        <p className="float-left">
                          <small>
                            {this.state.eventDetails._id}
                          </small></p>
                        <a href="#!" className="white-text float-right" onClick={this.toggleLike}>
                          {
                            this.state.likeEvent === false ?

                              <MDBIcon size="lg" color="white" fab icon="gratipay" className="dark-text darken-5" />:
                              <MDBIcon size="lg" color="white" fab icon="gratipay" className="pink-text" />
                          }
                        </a>
                      </MDBCol>
                      <MDBCol className="float-left">
                        <h4> {this.state.eventDetails.title} </h4>
                        <p>{this.state.eventDetails.description}</p>
                        <p> <small>Last updated:</small> {this.state.eventDetails.createdDate}</p>
                        <p> <small>Location: </small>{this.state.eventDetails.location}</p>
                        <p> <small>Industry: </small>{this.state.eventDetails.industry}</p>
                        <p> <small>category: </small>{this.state.eventDetails.category}</p>
                        <p> <small>Amount: </small>{this.state.eventDetails.amountToPay}</p>
                        <p> <small>PAyment Details: </small>{this.state.eventDetails.paymentDetail}</p>
                        <p> <small>Registration Ends: </small> {this.state.eventDetails.dueRegDate}
                        </p>
                        <p> <small>Event Date: </small> {this.state.eventDetails.startDate}
                        </p>
                        <a href="/profile" onClick={this.toggle(2)}>
                          <h6> {this.state.eventDetails.organizerId} </h6>
                        </a>
                      </MDBCol>

                      {/* Modal for organizer view */}
                      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="md" cascading>
                        <MDBModalHeader
                          toggle={this.toggle(2)}
                          titleClass="d-inline title"
                          className="text-center light-blue darken-3 white-text"
                        >
                          <a href="#!" className="white-text">
                            <MDBIcon color="white" fab icon="user-tie" className="pink-text" />
                            Organizer
                          </a>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
                          />
                          <div className="text-left">
                            <p><small>organizer name</small></p>
                            <h4> organization name </h4>
                            <p className="">organizer phone</p>
                            <p>orgnizer email</p>
                            <p>organizer website</p>
                            <p>organizer enabled</p>
                          </div>
                        </MDBModalBody>
                      </MDBModal>
                      {/* end of modal for organizer */}

                      <a href="/Contact">
                        <small className="pb-2">Give feedback on this event</small>
                      </a>
                    </div>
                    <div className="text-center mt-1-half">
                      <MDBBtn
                        color="primary"
                        className="my-2"
                        onClick={this.toggle(3)}
                      >
                        <MDBIcon icon="user-check" className="mr-1" />
                        Enrol
                        {/* This button should dd user_id and event_id to RegisteredForEvent table on db. <MDBIcon icon="sign-in-alt" className="ml-1" /> */}
                      </MDBBtn>
                      {/* <ToastContainer pauseOnFocusLoss={true} /> */}
                      <MDBBtn
                        color="white"
                        className="my-2"
                        onClick={this.toggle(4)}
                      >
                        Sponsor
                        <MDBIcon icon="crown" className="text-primary ml-1" />
                      </MDBBtn>
                      {/* Modal for sponsor view */}
                      <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="md" cascading>
                        <MDBModalHeader
                          toggle={this.toggle(4)}
                          titleClass="d-inline title"
                          className="text-center light-blue darken-3 white-text"
                        >
                          <a href="#!" className="white-text">
                            <MDBIcon color="white" fab icon="user-tie" className="pink-text" />
                            Sponsor
                          </a>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
                          />
                          <div className="text-left">
                            <p><small>sponsor name</small></p>
                            <h4> organization name </h4>
                            <p className="">sponsor phone</p>
                            <p>orgnizer email</p>
                            <p>sponsor website</p>
                            <p>sponsor enabled</p>
                          </div>
                        </MDBModalBody>
                      </MDBModal>
                      {/* end of modal for sponsor */}

                    </div>
                  </MDBModalBody>
                </MDBModal>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <ToastContainer pauseOnFocusLoss={true} />
        </MDBRow>
      </div>
    );
  }
}

export default Announcement;



              
