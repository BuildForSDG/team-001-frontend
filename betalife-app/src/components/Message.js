import React, { Component } from "react";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from "mdbreact";

class Messasge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false
    };
  }

  // nr represents modal number
  toggle = (nr) => (e) => {
    // 1 represents toggling for Event Details modal.
    if (nr === 1) {
      this.setState({
        modal1: !this.state.modal1
      });
    }
    else if (nr === 2) {
      this.setState({
        modal2: !this.state.modal2
      });
    }
  }

  render() {
    return (
      <div>
        <MDBRow className="mt-5">
          <MDBCol md="12" className="mx-auto mt-5 mb-2">
            <MDBCard>
              <MDBRow className="">
                <MDBCol className="float-left ml-2 py-2">
                  <MDBCardTitle tag="h3" className="">
                    All Messages
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol className="float-right">
                  <MDBBtn color="primary" className="float-right px-3"  onClick={this.toggle(2)}>
                    Write Message
                    <MDBIcon far icon="comment-alt" className="ml-2" />
                  </MDBBtn>
                </MDBCol>
              </MDBRow>

              <MDBCardBody>
                <fragment className="btn-group text-center my-2">
                  {/* map all messages for current user here */}
                  <p color="white" className="px-3 text-capitalize" > <a href="#" onClick={this.toggle(1)}>
                  Message Title - this link should open Message details for each unique message mapped</a>
                  </p>
                </fragment>
                <fragment className="btn-group text-center my-2">
                  {/* map all messages for current user here */}
                  <p color="white" className="px-3 text-capitalize" > <a href="#">
                  Message Title 2 - Another link... Be sure to remove these hard coded lines before mapping messages.</a>
                  </p>
                </fragment>

                {/* modal for Message detail */}
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="md" cascading>
                  <MDBModalHeader
                    toggle={this.toggle(1)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  >
                    <MDBIcon color="white" far icon="comment-alt" className="text-capitalize" />
                    Message title here
                  </MDBModalHeader>
                  <MDBModalBody>
                    {/* <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
                    /> */}
                    <div className="text-left">
                      <h5 className="text-capitalize"> show name of sender here </h5>
                      <p className="">
                        <small>Detail:</small> Message description goes here.</p>
                      <p>
                        <small>Time / Date sent:</small> 3:18pm. 4th June 2020</p>
                      <a href="/contact">
                        <small className="pb-2">Report this message</small>
                      </a>
                    </div>
                    <div className="text-center mt-1-half">
                      <MDBBtn
                        color="primary"
                        className="mb-2"
                        onClick={this.toggle(2)}
                      >
                        Reply
                        <MDBIcon icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </MDBModalBody>
                </MDBModal>

                {/* modal for write message */}
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg" cascading>
                  <MDBModalHeader
                    toggle={this.toggle(2)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  ><MDBIcon />
                    <MDBIcon icon="pencil-alt" className="px-3" />
                    New Message
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className="text-left">
                      <MDBInput
                        label="Enter recipient id"
                        type="text"
                        iconClass="dark-grey"
                      />
                      <MDBInput
                        label="Message Title"
                        type="text"
                        iconClass="dark-grey"
                      />
                      <MDBInput
                        type="textarea"
                        rows="2"
                        label="Your message"
                        iconClass="pencil-alt"
                      />

                      <div className="text-center mt-1-half">
                        <MDBBtn
                          color="primary"
                          className="mb-2"
                          onClick={this.toggle(2)}
                        >
                          Send
                          <MDBIcon icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </div>
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

export default Messasge;
