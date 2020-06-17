import React, { Component } from "react";

import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends Component {

  render() {
    return (
      <div>
        <MDBFooter color="white" outline
        expand="md" scrolling className="font-small mt-5 fixed-bottom">

          <div className="footer-copyright text-center py-1 text-primary">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright <a href="/events" className="pl-5 text-primary"> Betalife </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Footer;
