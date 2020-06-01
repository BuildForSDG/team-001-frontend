<header>
  <MDBNavbar color="indigo" dark expand="md" scrolling fixed="top">
    <MDBNavbarBrand href="#" onClick={this.closeNav}>
      <strong className="font-italic">Betalife</strong>
    </MDBNavbarBrand>
    {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.doCollapse} />}
    <MDBCollapse isOpen={this.state.collapse} navbar>
      <MDBNavbarNav left>
        <MDBNavItem active>
          <MDBNavLink to="#">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#">About Us</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/Events"
            onClick={this.handleDisplay}>Events</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#">Contact</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#" onClick={() => {
            // this.toggle(4);
            this.setState({
              modal4: true
            });
          }}
          >Portal</MDBNavLink>

          <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="md" cascading>
            <MDBModalHeader
              toggle={this.toggle(4)}
              titleClass="d-inline title"
              className="text-center light-blue darken-3 white-text"
            >
              <MDBIcon icon="pencil-alt" className="px-3" />
              Admin Login
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label="Your email"
                type="email"
              />
              <MDBInput
                label="Your password"
                type="password"
                iconClass="dark-grey"
              />
              <div className="text-center mt-1-half">
                <MDBBtn
                  color="info"
                  className="mb-2"
                  onClick={this.handleLogin}
                >
                  login
                  <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModal>

        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          { this.state.loggedIn === true ?
            <MDBNavLink to="/" onClick={this.handleLogout}> Log out
            </MDBNavLink> :
            <MDBNavLink to="/Profile" onClick={this.handleLogin}><MDBIcon far icon="image" />
            </MDBNavLink>
          }
        </MDBNavItem>

      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>

  { this.state.showSignupPg !== "d-block" ? null :
  <Signup />
  }
</header>

<main>
  <MDBContainer>
    { this.state.loggedIn === true ?
      <Route path="/" exact component={Events}/> :
      <Route path="/Signup" Component={Signup} />
    }
    {/* <Route path="/" exact component={Signup} /> */}
    <Route path="/Events" exact component={Events} />
    {/* { this.state.showEventPg === "d-block" ? <Events exact/> : null } */}
    <Route path="/Profile" exact component={Profile} />
    {/* <Route path="/Profile" component={Profile} /> */}
  </MDBContainer>
</main>
