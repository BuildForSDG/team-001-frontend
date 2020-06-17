import React, { Component } from "react";

import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  MDBCardText
} from "mdbreact";

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      announcements: [],
      _id: '',
      title: '',
      description: '',
      createdDate: new Date(),
      trainee: false,
      organizer: false,
      sponsor: false
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
    // 1 represents toggling for Event Details modal.
    if (nr === 1) {
      this.setState({
        modal1: !this.state.modal1,
      });
    }
    // 2 represents toggling for Write Announcement modal
    else if (nr === 2) {
      this.setState({
        modal2: !this.state.modal2,
      });
    }
  };
  
  getAnnouncement = () => {
    axios.get('http://localhost:4000/api/announcement')
      .then(response => {
        if (response.status == 200) {
          // console.log(response);
          this.setState({
            announcements: response.data
          });
        }
        else {
          console.log("Oops! Something went wrong");
        }
      })
    .catch(error => error);
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
    console.log(this.state.trainee);
  }
  
  newAnnoucementSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/announcement", this.state)
    .then(response => {   
      console.log(response);
      response.status === 201 ?
      this.setState({
        modal2: false
      }) :
      alert("could not post data");     
    })
    .catch( error => error );
  }

  render() {
    const { announcements } = this.state;
    const { title, description, createdDate, trainee, organizer, sponsor } = this.state;
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
                          <a href='#!' className='activator waves-effect waves-light mr-4'>
                            <MDBIcon icon='share-alt' className='white-text' />
                          </a>
                          <MDBCardTitle>{announcement.title}</MDBCardTitle>
                          <hr className='hr-light' />
                          <MDBCardText className='white-text'>
                            {announcement.description}
                          </MDBCardText>
                          <MDBCardText className='white-text font-weight-bold white-text'> {announcement.createdDate}
                          </MDBCardText>

                          <a href="#" className='white-text d-flex justify-content-center'>
                            {/* <MDBIcon icon='user' className='mr-2' /> */}
                            <p className='white-text'>
                              <small>Posted By </small> {announcement.postedBy}
                            </p>
                          </a>

                          <a href="#" className='black-text d-flex justify-content-center'>
                            <p className='white-text'>
                              <small>Linked Event: </small> {announcement.linkedEvent}
                            </p>
                          </a>
                        </MDBCardBody>
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
                        { console.log("trainee state", this.state.trainee)}
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
                        <div className="text-center mt-1-half">
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

                  </MDBModalBody>
                </MDBModal>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Announcement;
