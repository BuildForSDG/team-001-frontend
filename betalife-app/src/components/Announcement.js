import React, { Component } from "react";

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from "mdbreact";

class Announcement extends Component {
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

    // 2 represents toggling for Write Announcement modal
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
                <MDBCol sm="6" className="float-left ml-3 py-2">
                  <MDBCardTitle tag="h3" className="">
                    Announcement
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol className="">
                  <MDBBtn color="primary" className="px-2"  onClick={this.toggle(2)}>
                    New
                    <MDBIcon far icon="bell" className="ml-2" />
                  </MDBBtn>
                </MDBCol>
                <MDBCol>
                  <MDBDropdown dropleft>
                    <MDBDropdownToggle caret color="white" className="">
                      <MDBIcon icon="sliders-h" className="mr-1" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu  basic>
                      <MDBDropdownItem header>Filter by</MDBDropdownItem>
                      <MDBDropdownItem>Category</MDBDropdownItem>
                      <MDBDropdownItem>Location</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBCol>
              </MDBRow>

              <MDBCardBody>
                <fragment className="btn-group text-center my-2">
                  {/* map all Announcements for current user here */}
                  <p color="white" className="px-3 text-capitalize" > <a href="#" onClick={this.toggle(1)}>
                  Announcement Title - this link should open Message details for each unique Announcement mapped</a>
                  </p>
                </fragment>
                <fragment className="btn-group text-center my-2">
                  {/* map all Announcements for current user here */}
                  <p color="white" className="px-3 text-capitalize" > <a href="#">
                  Announcement Title 2 - Another link... Be sure to remove these hard coded lines before mapping Announcements.</a>
                  </p>
                </fragment>

                {/* modal for write Announcement */}
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg" cascading>
                  <MDBModalHeader
                    toggle={this.toggle(2)}
                    titleClass="d-inline title"
                    className="text-center light-blue darken-3 white-text"
                  ><MDBIcon />
                    <MDBIcon icon="pencil-alt" className="px-3" />
                    New Announcement
                  </MDBModalHeader>
                  <MDBModalBody>
                    {/* Default inline 1 */}
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" id="defaultInline1" />
                      <label class="custom-control-label" for="defaultInline1">Trainees</label>
                    </div>

                    {/* Default inline 2 */}
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" id="defaultInline2" />
                      <label class="custom-control-label" for="defaultInline2">Organizers</label>
                    </div>

                    {/* Default inline 3 */}
                    <div class="custom-control custom-checkbox custom-control-inline">
                      <input type="checkbox" class="custom-control-input" id="defaultInline3" />
                      <label class="custom-control-label" for="defaultInline3">Sponsors</label>
                    </div>

                    <div className="text-left">
                      <MDBInput
                        label="Title"
                        type="text"
                        iconClass="dark-grey"
                      />
                      <MDBInput
                        type="textarea"
                        rows="2"
                        label="Details"
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

export default Announcement;
