import React, { Component } from "react";
import { Link } from "react-router-dom";

import bgTech from "../images/event_bg1.jpg";
import bgFashion from "../images/butterfly_bg.jpg";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from "mdbreact";

// initial Events UI

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      modal1: false,
    };
  }

  com1onentDidMount() {
    // fetch data here
  }

  checkStatus(){
  // check if user is logged in
  }

  handleHome= (e) => {
    e.preventDefault();
    this.props.history.push("/App");
  }


  handleViewArticle = (e, eventContainer) => {
    // handle displaying event details UI
  }

  // nr represents modal number
  toggle = (nr) => () => {
    // 1 represents toggling for Event Details modal.
    if (nr === 1) {
      this.setState({
        modal1: !this.state.modal1
      });
    }
    else {}
  }

  render(){
    // const {events} = this.state;
    return (
      <div>
        <div className="row mt-4 pt-5">
          <div className="col-12 mb-4">
            <h1 className="text-center float-left">All Events</h1>

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

        <MDBRow>
          <MDBCol md="10" className="text-center mx-auto mb-2">
            <MDBCard
              className="card-image"
              style={{
                  backgroundImage:
        `url( ${bgTech} )`
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-2 px-4">
                <div>
                  <h5 className="light-blue-text pt-2">
                    <MDBIcon icon="chart-pie" /> Technology Category
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Sample Event Title</strong>
                  </MDBCardTitle>
                  <p>
                    Sample description goes here along with any other content. This is just a sample. Events will be pulled in automatically. Add as much as you want for  betalife app.
                  </p>
                  <h6> Organizer link </h6>

                  <MDBBtn color="primary" onClick={this.toggle(1)}>
                    <MDBIcon icon="clone left" /> View
                  </MDBBtn>
                  {/* UI for Event details */}
                  <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="md" cascading>
                    <MDBModalHeader
                      toggle={this.toggle(1)}
                      titleClass="d-inline title"
                      className="text-center light-blue darken-3 white-text"
                    >
                      <a href="#!" className="white-text">
                        <MDBIcon color="white" fab icon="gratipay" className="pink-text" />
                        Like
                      </a>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
                      />
                      <div className="text-left">
                        <h4> Event Title </h4>
                        <p className="">Event description goes here.</p>
                        <p>Event date: (event date)</p>
                        <p>Location: (Location)</p>
                        <p>Type (free/paid)</p>
                        <p>Category (Industry)</p>
                        <p> Published
                          <span className="text-muted"> (today at 10:24 am)</span>
                        </p>
                        <a href="">
                          <h6> Organizer name (links to profile) </h6>
                        </a>
                        <a href="">
                          <small className="pb-2">Give feedback on this event</small>
                        </a>
                      </div>
                      <div className="text-center mt-1-half">
                        <MDBBtn
                          color="info"
                          className="my-2"
                          onClick={this.toggle(1)}
                        >
                          Enrol
                          <MDBIcon icon="sign-in-alt" className="ml-1" />
                        </MDBBtn>
                        <MDBBtn
                          color="info"
                          className="my-2"
                          onClick={this.toggle(1)}
                        >
                          Sponsor
                          <MDBIcon  icon="crown" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </MDBModalBody>
                  </MDBModal>
                </div>
              </div>
            </MDBCard>
            <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
              <ul className="list-unstyled list-inline font-small">
                <li className="list-inline-item pr-2 white-text float-left pl-1">
                  <MDBIcon far icon="clock" /> Last updated 3 mins ago
                </li>
                <li className="list-inline-item pl-2 float-right">
                  <a href="#!" className="white-text">
                    <MDBIcon far icon="comments" className="mr-1" />
                    18
                  </a>
                </li>
                <li className="list-inline-item float-right pr-1">
                  <a href="#!" className="pink-text">
                    <MDBIcon fab icon="gratipay" className="mr-1" />
                    7
                  </a>
                </li>
              </ul>
            </div>

          </MDBCol>

          <MDBCol md="10" className="text-center mx-auto mb-2">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                `url( ${bgFashion} )`
              }}
            >
              <div className="text-white text-center d-flex align-items-center rgba-black-strong py-2 px-4">
                <div>
                  <h5 className="light-blue-text pt-2">
                    <MDBIcon icon="chart-pie" /> Fashion Category
                  </h5>
                  <MDBCardTitle tag="h3" className="pt-2">
                    <strong>Another Event Title</strong>
                  </MDBCardTitle>
                  <p>
                    Sample description goes here along with any other content. This is just a sample. Events will be pulled in automatically. Add as much as you want for  betalife app.
                  </p>
                  <h6> Organizer link </h6>
                  <MDBBtn color="primary">
                    <MDBIcon icon="clone left" /> View
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
            <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
              <ul className="list-unstyled list-inline font-small">
                <li className="list-inline-item pr-2 white-text float-left pl-1">
                  <MDBIcon far icon="clock" /> Last updated 10 mins ago
                </li>
                <li className="list-inline-item pl-2 float-right">
                  <a href="#!" className="white-text">
                    <MDBIcon far icon="comments" className="mr-1" />
                    12
                  </a>
                </li>
                <li className="list-inline-item float-right pr-1">
                  <a href="#!" className="pink-text">
                    <MDBIcon fab icon="gratipay" className="mr-1" />
                    21
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>

        </MDBRow>

      </div>
    );
  }
  }

export default Events;
