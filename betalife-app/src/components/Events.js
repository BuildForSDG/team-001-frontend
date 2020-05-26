import React, { Component } from "react";
import { Link } from "react-router-dom";

import bgTech from "../images/event_bg1.jpg";
import bgFashion from "../images/butterfly_bg.jpg";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";

// initial Events UI

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
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

  render(){
    // const {events} = this.state;
    return (
      <div>
        <div className="row mt-4 pt-5">
          <div className="col-12 mb-4">
            <h1 className="text-center float-left">All Events</h1>
            <Link to="" className="btn btn-light btn-sm float-right"> filter </Link>
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
                  <MDBBtn color="primary">
                    <MDBIcon icon="clone left" /> View
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
            <div className="rounded-bottom mdb-color lighten-3 text-center py-2 px-2">
              <ul className="list-unstyled list-inline font-small">
                <li className="list-inline-item pr-2 white-text float-left pl-2">
                  <MDBIcon far icon="clock" /> Last updated 3 mins ago
                </li>
                <li className="list-inline-item px-2 float-right">
                  <a href="#!" className="white-text">
                    <MDBIcon far icon="comments" className="mr-1" />
                    18
                  </a>
                </li>
                <li className="list-inline-item px-2 float-right">
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
            <div className="rounded-bottom mdb-color lighten-3 text-center py-2 px-2">
              <ul className="list-unstyled list-inline font-small">
                <li className="list-inline-item pr-2 white-text float-left pl-2">
                  <MDBIcon far icon="clock" /> Last updated 10 mins ago
                </li>
                <li className="list-inline-item px-2 float-right">
                  <a href="#!" className="white-text">
                    <MDBIcon far icon="comments" className="mr-1" />
                    12
                  </a>
                </li>
                <li className="list-inline-item px-2 float-right">
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
