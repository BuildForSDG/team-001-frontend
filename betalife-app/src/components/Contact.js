import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";

import Footer from "./Footer";

class Contact extends Component {

  render() {
    return (
      <div>
        <div className="mt-5 pt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h1 className="text-left mb-5">Contact Us</h1>
              </MDBCol>
              <MDBCol md="3"/>
              <MDBCol md="6">
                <form>
                  <p className="h5 text-center mb-4">Write to us</p>
                  <div className="grey-text">
                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" />
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                    <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                  </div>
                  <div className="text-center pb-2 mb-5">
                    <MDBBtn outline color="primary">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
              <MDBCol md="3"/>
            </MDBRow>
          </MDBContainer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
