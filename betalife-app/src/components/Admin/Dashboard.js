import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

import Users from "./Users";
import Feedback from "./Feedback";
import Announcement from "./Announcement";

  class Dashboard extends Component {
    state = {
      activeItem: "1"
    };

    toggle = (tab) => (e) => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <MDBContainer className="mb-2">
          <MDBNav className="nav-tabs mt-4 pt-5">
            <MDBNavItem>
              <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                Users
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                Feedback
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
                Announcements
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItem} >
            <MDBTabPane tabId="1" role="tabpanel">
              <Users />
              {/* <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nihil odit magnam minima, soluta doloribus reiciendis
                molestiae placeat unde eos molestias. Quisquam aperiam,
                pariatur. Tempora, placeat ratione porro voluptate odit
                minima.
              </p> */}
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <Feedback />
              {/* <p className="mt-2">
                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                voluptate odit minima. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nihil odit magnam minima,
                soluta doloribus reiciendis molestiae placeat unde eos
                molestias.
              </p> */}
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <Announcement />
            </MDBTabPane>
          </MDBTabContent>
        </MDBContainer>
    );
  }
}
export default Dashboard;
