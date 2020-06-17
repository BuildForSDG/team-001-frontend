import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { MDBCard, MDBCardImage, MDBCardTitle, MDBCardBody, MDBCardText, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalBody, MDBModalHeader, MDBFormInline, MDBInput } from "mdbreact";

import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import UniqueId from "react-html-id";


class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal5: false,
      funds: [],
      _id: '',
      title: '',
      description: '',
      website: '',
      fundingBody: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.newFundSubmit = this.newFundSubmit.bind(this);
  }
  
  componentDidMount() {
    this.getfunds();
  }
  
  // add funds UI
  toggle = (nr) => () => {
    if (nr === 5) {
      this.setState({
        modal5: !this.state.modal5
      });
    }
  }
  
  getfunds = () => {
    axios.get('http://localhost:4000/api/funds')
    .then(response => {
      if(response.status === 200) {
        console.log(response)
        // "Oops! Somthing went wrong."
        this.setState({
          funds: response.data
        })
      }
      else {
        console.log("Oops! Something went wrong");
      }
    })    
    .catch( error => error);
  }
  
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
    [e.target.name]: e.target.value
  });
  }
  
  newFundSubmit = (e) => {
    console.log("inside newFundSubmit function");
    e.preventDefault();
    this.setState({
      modal5: false      
    });        
    axios.post('http://localhost:4000/api/funds', this.state)
    .then(response => {
      console.log(response);
      if(response.status === 201) {
      }
      else {
        alert("could not post data");
      }
    })
    .catch( error => error); 
    // console.log(this.state);
  }
  
  // BE SURE AUTO TO ADD USERiD (IE _ID) to new events and funds during creation.

  render() {
    const { funds } = this.state;
    const { _id, title, description, website, fundingBody } = this.state
    return (
      <div>
        <div className="row mt-4 pt-5">
          <div className="col-12 mb-4">
            <h1 className="text-center float-left">Funds</h1>
            <MDBBtn
              color="primary"
              className="float-right"
              onClick={this.toggle(5)}
            >
              <MDBIcon icon="money-bill-wave" onClick={this.toggle(5)} className="mr-2" />
              Add Fund
            </MDBBtn>
            <input type="text" placeholder="Search funds" className="form-control float-left" />
          </div>
          <MDBRow className="mb-4 pb-4 mx-auto">
            {funds.map((fund) => {
              return <MDBCol key={fund._id} md="12" className="text-center mb-2">
                <MDBCard>
                  <MDBCardBody className='elegant-color white-text rounded-bottom'>
                    <a href='#!' className='activator waves-effect waves-light mr-4'>
                      <MDBIcon icon='share-alt' className='white-text' />
                    </a>
                    <MDBCardTitle>{fund.title}</MDBCardTitle>
                    <hr className='hr-light' />
                    <MDBCardText className='white-text'>
                      {fund.description}
                    </MDBCardText>
                    <MDBCardText className='white-text font-weight-bold'> {fund.fundingBody}
                    </MDBCardText>

                    <a href={fund.website} className='black-text d-flex justify-content-end'>
                      <h5 className='white-text'>
                        Website
                        <MDBIcon icon='angle-double-right' className='ml-2' />
                      </h5>
                    </a>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            })
            }

            {/* Add funding body Modal */}
            <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="lg" cascading>
              <MDBModalHeader
                toggle={this.toggle(5)}
                titleClass="d-inline title"
                className="text-center light-blue darken-3 white-text"
              ><MDBIcon />
                <MDBIcon icon="calendar-check" className="px-3" />
                Add Funding body
              </MDBModalHeader>
              <MDBModalBody>
                <div className="text-left">
                  <form onSubmit={this.newFundSubmit}>
                    <MDBInput
                      label="Fund Title"
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
                    <MDBInput
                      label="website"
                      name="website"
                      type="text"
                      iconClass="dark-grey"
                      onChange={this.changeHandler}
                      value={website}
                    />
                    <MDBInput
                      className="d-inline"
                      label="Funding Body"
                      name="fundingBody"
                      type="text"
                      iconClass="dark-grey"
                      onChange={this.changeHandler}
                      value={fundingBody}
                    />
                    <div className="text-center mt-1-half">
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
          </MDBRow>
        </div>
      </div>
    );
  }

}

export default Funds;