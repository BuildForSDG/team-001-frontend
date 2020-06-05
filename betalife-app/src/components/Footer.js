import React, { Component } from "react";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {

  render() {
    return (
      <div>
        <MDBFooter color="white" outline
        expand="md" scrolling className="font-small pt-1 mt-2 fixed-bottom">

          <div className="footer-copyright text-center py-1">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright <a href="/events" className="pl-5"> Betalife </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default Footer;
