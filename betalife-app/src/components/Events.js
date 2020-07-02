import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalBody, MDBModalHeader, MDBFormInline, MDBInput , MDBAlert} from "mdbreact";

import axios from 'axios';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import bgTech from "../images/event_bg1.jpg";
import bgFashion from "../images/butterfly_bg.jpg";

// page reset attempt

// Events UI
class Events extends Component {
  constructor(props) {
    super(props);    
    const userData = JSON.parse(localStorage.getItem("localData"));
    const name = `${userData.user.firstName} ${userData.user.lastName}`;
    const posterId = JSON.parse(localStorage.getItem("localData")).user.adminId ?
    JSON.parse(localStorage.getItem("localData")).user.adminId :
    JSON.parse(localStorage.getItem("localData")).user.userId;
    this.state = {
      events: [],
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      showDetailContainer: '',
      likeEvent: false,
      id: '',
      userId: '',
      organizerId: posterId,
      postedBy: name,
      sponsorId: '',
      title: '',
      description: '',
      dueRegDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      targetAudience: '',
      category: '',
      amountToPay: '',
      paymentDetail: '',
      like: '',
      location: '',
      industry: '',
      eventsError: false,
      createdDate: Date.now(),
      // imageUrl: null,
      // selectedFile: null
    };
    this.newEventSubmit = this.newEventSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    // fetch all events data here
    this.getEvents();    
  }

  // checkStatus = () => {
  // // check if user is logged in
  // }
  
  // function for Home page redirect.  
  handleHome = () => {
    this.props.history.push("/App");
  }

  // nr represents number for each modal to be displyed.
  toggle = (nr) => (e) => {
    // modal. View event detail.
    if (nr === 1) {
      this.setState({
        modal1: !this.state.modal1
      });
    }
    // Modal. View event organizer.
    if (nr === 2) {
      this.setState({
        modal2: !this.state.modal2
      });
    }
    // Modal. View event enrol.
    else if (nr === 3) {
      this.setState({
        modal3: !this.state.modal3
      });
      this.notify()
    }
    // Modal. View event sponsor .
    else if (nr === 4) {
      this.setState({
        modal4: !this.state.modal4
      });
    }
    // Modal. Add Event .
    else if (nr === 5) {      
      this.setState({
        modal5: !this.state.modal5
        });
    }
    // Modal.Update Event .
    else if (nr === 6) {
      // e.preventDefault();
      this.setState({
        modal6: !this.state.modal6
      });
    }
  }
  
  // function for event details view (UI)
  handleViewEventDetail = (e, detailContainer) => {
    this.setState({
      modal1: !this.state.modal1,
      showDetailContainer: detailContainer
    });
  }
  
  // function for like button
  toggleLike = (e) => {
    e.preventDefault();
    this.setState({
      likeEvent: !this.state.likeEvent
    });
  }
  
  // function for choosing category on Add Event form.
  handleRadio = (nr) => () => {
    if (nr === 1) {
      this.setState({
        radio: nr,
        category: "free ",
      });
    }
    else if (nr === 2) {
      this.setState({
        radio: nr,
        category: "paid",
      });
    }
  }
  
  // date select function. nr represents the number for each date field.
  handleDateSelect = (nr) => (date) => {
    if (nr === 1) {
      this.setState({
        createdDate: date
      });
    }
    else if (nr === 2) {
      this.setState({
        dueRegDate: date
      });
    }
    else if (nr === 3) {
      this.setState({
        startDate: date
      });
    }
    else if (nr === 4) {
      this.setState({
        endDate: date
      });
    }
  }
  
  // date change function. nr represents toggle number for different date fields
  handleDate = (nr, date , e) => () => {
    if (nr === 1) {
      this.setState({
        createdDate: date
      });
    }
    else if (nr === 2) {
      this.setState({
        dueRegDate: date
      });
    }
    else if (nr === 3) {
      this.setState({
        startDate: date
      });
    }
    else if (nr === 4) {
      this.setState({
        endDate: date
      });
    }
  }

  // toaster function for showing alerts
  notify = () => {
    toast("You've successfully enrolled!");
  }

  // function for displaying all events
  getEvents = () => {
    this.setState({
      events: [],
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      showDetailContainer: '',
      likeEvent: false,
      id: '',
      userId: '',
      sponsorId: '',
      title: '',
      description: '',
      dueRegDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      targetAudience: '',
      category: '',
      amountToPay: '',
      paymentDetail: '',
      like: '',
      location: '',
      industry: '',
      eventsError: false,
      createdDate: null,
      // imageUrl: null,
      // selectedFile: null
    });
    // fetch data here
    axios.get('https://betalife-backend.herokuapp.com/api/events')
    .then(response => {
      // console.log(response);
      if(response.status === 200) {
        this.setState({
          events: response.data
        });
      }
      else {
        alert("could not retrieve data");
        // response.status(400).json({
        //   message: "COuld not retrieve data"
        // });
      }
    })
    .catch( error => error );
  }

  // function for capturing user input as they type
  imgChangeHandler = (e) => {
    e.preventDefault();
    // this.setState({
    // // selectedFile: e.target.files[0],
    // imageUrl: e.target.files[0],
    // loaded: 0
    // });
  }

  // function for capturing user input as they type
  changeHandler = (e) => {
    // e.preventDefault();
    // console.log(e.target.files[0]);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  toastEventDelete = () => {
    toast("Event deleted successfully!");
  }

  //  delete Event function
  deleteEvent = (e, eventId) => {
    e.preventDefault();
    console.log(eventId._id);
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;    
    axios.delete(`https://betalife-backend.herokuapp.com/api/events/${eventId._id}`, {
      headers: {
          "Authorization": `Bearer ${token}`          
      }
    })
    .then(response => {
      if(response.status === 200) {
        this.setState({
          eventsError: false
        }); 
        this.toastEventDelete();
        setTimeout(() => {
          this.getEvents();            
        }, 2000);
      }
      else {
        this.setState({
            eventsError: true            
        })
      }
    })
    .catch( error => {
      console.log(error);      
      new Error(error);
      this.setState({
          eventsError: true
      });
    });
  }

  // function for displaying Update Event form 
  handleViewUpdate = (e, eventId) => {
    // e.preventDefault();
    // this.toggle(6);
    this.setState({
      modal6: !this.state.modal6,
      id: eventId._id,
      title: eventId.title,
      description: eventId.description,
      dueRegDate: eventId.dueRegDate,
      startDate: eventId.startDate,
      endDate: eventId.endDate,
      targetAudience: eventId.targetAudience,
      category: eventId.category,
      amountToPay: eventId.amountToPay,
      paymentDetail: eventId.paymentDetail,
      like: eventId.like,
      location: eventId.location,
      industry: eventId.Industry,
      createdDate: new Date()
    });
  }

  toastEventUpdate = () => {
    toast("Event updated successfully!");
  }

  // submit function for Update Event form
  updateEventSubmit = (e) => {
    e.preventDefault();
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;    
    axios.put(`https://betalife-backend.herokuapp.com/api/events/${this.state.id}`, this.state, {
      headers: {
          "Authorization": `Bearer ${token}`          
      }
    })
    .then(response => {
      console.log(response);
      if(response.status === 201) {
        this.toastEventUpdate();
        setTimeout(() => {
          this.setState({
              eventsError: false,
              modal6: !this.state.modal6
          })            
        }, 1000)
          // window.location.reload(true);
      }
      else {
        this.setState({
            eventsError: true,
        })
      }
      window.location.reload(true);
      // this.getEvents();
      // this.setState({
      //   modal5: false
      // });
    })
    .catch( error => {
      this.setState({
          eventsError: true,
      })
      new Error(error) 
    });
  }

  // Toast  signup successful
  toastEventPost = () => {
    toast("Event created successful!");
  }

  // submit function for Add Event form
  newEventSubmit = (e) => {
    e.preventDefault();
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token; 
    axios.post('https://betalife-backend.herokuapp.com/api/events', this.state, {
      headers: {
        "Authorization": `Bearer ${token}`          
      }
    })
    .then(response => {
      console.log(response);
      if(response.status === 201) {
        this.setState({
          eventsError: false
        })
        this.toastEventPost()
      }
      else {
        this.setState({
          eventsError: true,
        })
      }
      this.getEvents();
      this.setState({
        modal5: false
      });
    })
    .catch( error => {
      this.setState({
        eventsError: true,
      })
      new Error(error) 
    });
  }

  render(){
    // const dueDateMin = new Date(Date.now() + (86400000 * 3));
    const eventDetailsProp2 = this.state.showDetailContainer;
    const {events} = this.state;
    const { id, title, description, dueRegDate, startDate, endDate, targetAudience, category, payAmount, paymentDetail, location, industry, imageUrl } = this.state;
    return (
      <div>
        <div className="row mt-4 pt-5">
          <div className="col-12 mb-4">
            <h1 className="text-center float-left">All Events</h1>
            {console.log(JSON.parse(localStorage.getItem("localData")).user.role)}
            {/* Restrict display of Add Event button to Admin or Organizer */}
            { JSON.parse(localStorage.getItem("localData")).user.role === 'admin' || JSON.parse(localStorage.getItem("localData")).user.role === 'organizer' ?
              <MDBBtn
                color="primary"
                className="float-right"
                onClick={this.toggle(5)}
              >
                <MDBIcon icon="calendar-check" onClick={this.toggle(5)} className="mr-2" />
                Add Event
              </MDBBtn> : null
            }
            <MDBDropdown className="float-right">
              <MDBDropdownToggle caret color="primary">
                Filter by
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem href="#">Past</MDBDropdownItem>
                <MDBDropdownItem active href="#">Up coming</MDBDropdownItem>
                <MDBDropdownItem>Industry</MDBDropdownItem>
                <MDBDropdownItem href="#">
                  Location
                </MDBDropdownItem>
                <MDBDropdownItem href="#">Popularity</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <input type="text" placeholder="Search events" className="form-control float-left" />
          </div>
        </div>

        <MDBRow className="mb-4 pb-4">
          {events.map((event) => {
            const detailContainer = event;
            return <MDBCol key={event._id} md="10" className="text-center mx-auto mb-2">
              <MDBCard
                className="card-image"
                style={{
                    backgroundImage:
          `url( ${bgTech} )`
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-2 px-4">
                  <div className="w-100">
                    <h5 className="light-blue-text pt-2">
                      <MDBIcon icon="chart-pie" className="capitalize" />
                      {event.industry}
                    </h5>
                    <MDBCardTitle tag="h3" className="pt-2">
                      <strong>
                        {/* truncate long title */}
                        { event.title.length > 26 ?
                          event.title.substr(0, 26-1) + '...' : event.title }
                      </strong>
                    </MDBCardTitle>
                    <p>
                      {/* truncate long description */}
                      { event.description.length > 60 ?
                        event.description.substr(0, 60-1) + '...' : event.description }
                    </p>
                    <a href="#">
                      <h6> Posted by {event.postedBy} </h6></a>

                    <MDBBtn color="primary" onClick={ (e) => {
                      const detailContainer = event;
                      return (
                        this.handleViewEventDetail(e, detailContainer)
                      );
                    }}>
                      <MDBIcon icon="clone left" /> View
                    </MDBBtn>

                  </div>
                </div>
                <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
                  <ul className="list-unstyled list-inline font-small">
                    <li className="list-inline-item pr-2 white-text float-left pl-1">
                      <MDBIcon far icon="clock" /> Last updated {event.createdDate}
                    </li>

                    {/* delete event button.  Display restricted to Admin */}
                    { JSON.parse(localStorage.getItem("localData")).role === "admin" ?
                      <li className="list-inline-item float-right pr-1">
                        <a href="#" className="white-text" onClick={(e) => {
                          const eventId = event;
                          return (
                            this.deleteEvent(e, eventId)
                          )}}>  
                          <MDBIcon far icon="trash-alt" />
                        </a>
                      </li>  : null }

                    {/* update event button. Display restricted to Event creator */}
                    { this.state.organizerId === event.organizerId ?
                      <li className="list-inline-item float-right pr-1">
                        <a href="#" className="white-text" onClick={(e) => {
                          const eventId = event;
                          return (
                            this.handleViewUpdate(e, eventId)
                          )}}>                      
                          <MDBIcon far icon="edit" />
                        </a>
                      </li> : null
                    }

                    {/* share button */}
                    <li className="list-inline-item pl-2 float-right">
                      <a href="#!" className="white-text">
                        <MDBIcon icon="share-alt" className="mr-2" />
                        {/* Share */}
                      </a>
                    </li>

                    {/* like button */}
                    <li className="list-inline-item float-right pr-1">
                      <a href="#!" className="white-text">
                        <MDBIcon color="white" fab icon="gratipay" className="pink-text mr-1" />
                        {event.like}
                      </a>
                    </li>

                  </ul>
                </div>
              </MDBCard>

            </MDBCol>
          })}

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
                      {eventDetailsProp2._id}
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
                  <h4> {eventDetailsProp2.title} </h4>
                  <p>{eventDetailsProp2.description}</p>
                  <p> <small>Last updated:</small> {eventDetailsProp2.createdDate}</p>
                  <p> <small>Location: </small>{eventDetailsProp2.location}</p>
                  <p> <small>Industry: </small>{eventDetailsProp2.industry}</p>
                  <p> <small>category: </small>{eventDetailsProp2.category}</p>
                  <p> <small>Amount: </small>{eventDetailsProp2.amountToPay}</p>
                  <p> <small>PAyment Details: </small>{eventDetailsProp2.paymentDetail}</p>
                  <p> <small>Registration Ends: </small> {eventDetailsProp2.dueRegDate}
                  </p>
                  <p> <small>Event Date: </small> {eventDetailsProp2.startDate}
                  </p>
                  <a href="/profile" onClick={this.toggle(2)}>
                    <h6> {eventDetailsProp2.organizerId} </h6>
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
                <ToastContainer pauseOnFocusLoss={true} />
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

          {/* Add Event Modal */}
          <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="lg" cascading>
            <MDBModalHeader
              toggle={this.toggle(5)}
              titleClass="d-inline title"
              className="text-center light-blue darken-3 white-text"
            ><MDBIcon />
              <MDBIcon icon="calendar-check" className="px-3" />
              Add Event
            </MDBModalHeader>
            <MDBModalBody>
              <div className="text-left">
                <form onSubmit={this.newEventSubmit}>
                  <MDBInput
                    label="Event Title"
                    name="title"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={title}
                  />
                  <MDBInput
                    label="Description"
                    name="description"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={description}
                  />
                  {/* <MDBFormInline className="my-4">
                      <label className="mr-2">Date created</label>
                      <DatePicker anme="createdDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={createdDate}
                      onSelect={this.handleDateSelect(1)}
                      omChange={this.handleDate(1)}
                      />
                  </MDBFormInline> */}
                  <MDBFormInline className="my-4">
                    Due Registration Date: 
                    <input
                      className="ml-2"
                      name="dueRegDate"
                      type="date"
                      min={new Date()}
                      max="2031-12-31"
                      onChange={this.changeHandler}
                      value={dueRegDate}
                    />

                    {/* <label className="mr-2">Registration due date</label>
                      <DatePicker anme="dueRegDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={dueRegDate}
                      onSelect={this.handleDateSelect(2)}
                      omChange={this.handleDate(2)}
                    /> */}
                  </MDBFormInline>
                  <MDBFormInline className="my-4">
                    Start Date: 
                    <input
                      className="ml-2"
                      name="startDate"
                      type="date"
                      min={new Date()}
                      max="2031-12-31"
                      onChange={this.changeHandler}
                      value={startDate}
                    />
                    {/* <label className="mr-2">Start Date</label>
                      <DatePicker anme="startDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={startDate}
                      onSelect={this.handleDateSelect(3)}
                      omChange={this.handleDate(3)}
                    /> */}
                  </MDBFormInline>
                  <MDBFormInline className="my-4">
                    End Date: 
                    <input
                      className="ml-2"
                      name="endDate"
                      type="date"
                      min={new Date()}
                      max="2030-12-31"
                      onChange={this.changeHandler}
                      value={endDate}
                    />
                    {/* <label className="mr-2">End date</label>
                      <DatePicker anme="endDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={endDate}
                      onSelect={this.handleDateSelect(4)}
                      omChange={this.handleDate(4)}
                    /> */}
                  </MDBFormInline>
                  <MDBInput
                    label="Taget audience"
                    name="targetAudience"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={targetAudience}
                  />
                  <fragment className="form-check-inline mb-3">
                    <label className="mr-5">Category</label>
                    <MDBInput
                      gap
                      onClick={this.handleRadio(1)}
                      checked={this.state.radio === 1 ? true : false}
                      label="Free"
                      name="category"
                      type="radio"
                      id="radio1"
                      size="sm"
                      containerClass="mr-3"
                    />
                    <MDBInput
                      gap
                      onClick={this.handleRadio(2)}
                      checked={this.state.radio === 2 ? true : false}
                      label="Paid"
                      name="category"
                      type="radio"
                      id="radio2"
                      size="sm"
                      containerClass="mr-3"
                    />
                  </fragment>

                  {/* hide or show payment detail besed on category selected */}
                  { this.state.radio === 1 ? '' :
                  <fragment>
                    <MDBInput
                      className="d-inline"
                      label="Amount to be paid"
                      name="payAmount"
                      type="number"
                      iconClass="dark-grey"
                      onChange={this.changeHandler}
                      value={payAmount}
                    />
                    <MDBInput
                      className="d-inline"
                      label="Payment detail"
                      name="paymentDetail"
                      type="textarea"
                      iconClass="dark-grey"
                      onChange={this.changeHandler}
                      value={paymentDetail}
                    />
                  </fragment>
                  }
                  <MDBInput
                    className="d-inline"
                    label="Location"
                    name="location"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={location}
                  />
                  <MDBInput
                    className="d-inline"
                    label="Industry"
                    name="industry"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={industry}
                  />
                  <input
                    type="file"
                    name="imageUrl"
                    onChange={this.imgChangeHandler}
                    // value={imageUrl}
                  />
                  {/* <input
                    className="d-inline"
                    label="Image Url"
                    name="imageUrl"
                    type="file"
                    placeholder="https://"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={imageUrl}
                  /> */}

                  <div className="text-center mt-1-half">
                    {
                      this.state.eventsError === true ?
                        <MDBAlert color="danger" className="mt-3">
                          <strong>Oops!</strong> Something went wrong.
                        </MDBAlert> : null
                    }
                    <MDBBtn
                      color="info"
                      type ="submit"
                      className="mb-2"
                    >
                      Create
                      <MDBIcon icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </div>
            </MDBModalBody>
          </MDBModal>

          {/* Update Event Modal */}
          <MDBModal isOpen={this.state.modal6} toggle={this.toggle(6)} size="lg" cascading>
            <MDBModalHeader
              toggle={this.toggle(6)}
              titleClass="d-inline title"
              className="text-center light-blue darken-3 white-text"
            >
              <MDBIcon icon="calendar-check" className="px-3" />
              Update Event
            </MDBModalHeader>
            <MDBModalBody>
              <div className="text-left">
                <form onSubmit={this.updateEventSubmit}>
                  {/* { console.log(id._id) } */}
                  <MDBInput className=""
                    label="Event Id"
                    name="id"
                    type="text"
                    iconClass="dark-grey"
                    value={id}
                  />

                  <MDBInput
                    label="Event Title"
                    name="title"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={title}
                  />
                  <MDBInput
                    label="Description"
                    name="description"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={description}
                  />
                  <MDBFormInline className="my-4">
                    Due Registration Date: 
                    <input
                      className="ml-2"
                      name="dueRegDate"
                      type="date"
                      min={new Date()}
                      max="2031-12-31"
                      onChange={this.changeHandler}
                      value={dueRegDate}
                    />

                    {/* <label className="mr-2">Registration due date</label>
                      <DatePicker name="dueRegDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={dueRegDate}
                      onSelect={this.handleDateSelect(2)}
                      onChange={this.handleDate(2)}
                    /> */}
                  </MDBFormInline>
                  <MDBFormInline className="my-4">
                    Start Date: 
                    <input
                      className="ml-2"
                      name="startDate"
                      type="date"
                      min={new Date()}
                      max="2031-12-31"
                      onChange={this.changeHandler}
                      value={startDate}
                    />

                    {/* <label className="mr-2">Start Date</label>
                      <DatePicker name="startDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={startDate}
                      onSelect={this.handleDateSelect(3)}
                      onChange={this.handleDate(3)}
                    /> */}
                  </MDBFormInline>
                  <MDBFormInline className="my-4">
                    End Date: 
                    <input
                      className="ml-2"
                      name="endDate"
                      type="date"
                      min={new Date()}
                      max="2030-12-31"
                      onChange={this.changeHandler}
                      value={endDate}
                    />
                    {/* <label className="mr-2">End date</label>
                      <DatePicker name="endDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
                      selected={endDate}
                      onSelect={this.handleDateSelect(4)}
                      onChange={this.handleDate(4)}
                    /> */}
                  </MDBFormInline>
                  <MDBInput
                    label="Taget audience"
                    name="targetAudience"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={targetAudience}
                  />
                  <fragment className="form-check-inline mb-3">
                    <label className="mr-5">Category</label>
                    <MDBInput
                      gap
                      onClick={this.handleRadio(1)}
                      checked={this.state.radio === 1 ? true : false}
                      label="Free"
                      name="category"
                      type="radio"
                      id="radio1"
                      size="sm"
                      containerClass="mr-3"
                    />
                    <MDBInput
                      gap
                      onClick={this.handleRadio(2)}
                      checked={this.state.radio === 2 ? true : false}
                      label="Paid"
                      name="category"
                      type="radio"
                      id="radio2"
                      size="sm"
                      containerClass="mr-3"
                    />
                  </fragment>

                  {/* hide or show payment detail besed on category selected */}
                  { this.state.radio === 1 ? '' :
                  <fragment>
                    <MDBInput
                      className="d-inline"
                      label="Amount to be paid"
                      name="payAmount"
                      type="number"
                      iconClass="dark-grey"
                      onChange={this.changeHandler}
                      value={payAmount}
                    />
                    <MDBInput
                      className="d-inline"
                      label="Payment detail"
                      name="paymentDetail"
                      type="textarea"
                      iconClass="dark-grey"
                      onChange={this.changeHandler}
                      value={paymentDetail}
                    />
                  </fragment>
                  }
                  <MDBInput
                    className="d-inline"
                    label="Location"
                    name="location"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={location}
                  />
                  <MDBInput
                    className="d-inline"
                    label="Industry"
                    name="industry"
                    type="text"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={industry}
                  />
                  <MDBInput
                    className="d-inline"
                    label="Image Url"
                    name="imageUrl"
                    type="text"
                    placeholder="https://"
                    iconClass="dark-grey"
                    onChange={this.changeHandler}
                    value={imageUrl}
                  />

                  <div className="text-center mt-1-half">
                    <MDBBtn
                      color="info"
                      type ="submit"
                      className="mb-2"
                    >
                      Update
                      <MDBIcon far icon="edit" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </div>
            </MDBModalBody>
          </MDBModal>

        </MDBRow>
      </div>
    );
  }
  }

export default Events;
