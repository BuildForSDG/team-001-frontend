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
      hideAddDetail: false,
      fundsError: false,
      userId: 
        JSON.parse(localStorage.getItem("localData")).user.userId,
      title: '',
      description: '',
      website: '',
      fundingBody: '',
      funds: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.newFundSubmit = this.newFundSubmit.bind(this);
  }
  
  componentDidMount() {
    this.getFunds();
  }
  
  // add funds form 
  toggle = (nr) => () => {
    if (nr === 5) {
      this.setState({
        modal5: !this.state.modal5
      });
    }
  }  
  
  getFunds = () => {
    axios.get('https://betalife-backend.herokuapp.com/api/funds')
    .then(response => {
      if(response.status === 200) {
        // console.log(response)
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
  
  // function for displaying Update Event form 
  showUpdateForm = (e, fundUpdate) => {
    e.preventDefault();
    this.setState({
      modal5: !this.state.modal5
    });
  }
  
  toastFundDelete = () => {
    toast("Deletee Fund successful !");
  }
  
  deleteFund = (e, fundDelete) => {
    e.preventDefault();
    console.log(fundDelete._id);
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;    
      axios.delete(`https://betalife-backend.herokuapp.com/api/funds/${fundDelete._id}`, {
        headers: {
          "Authorization": `Bearer ${token}`          
        }
      })
      .then(response => {
        if(response.status === 200) { 
        this.toastFundDelete();
          window.location.reload(true);
        }
        else {
          alert("Delete failed !");
        }
      })
      .catch( error => {
        console.log(error);      
        new Error(error);
        this.setState({
          fundsError: true
        });
      });
  }
  
  toastFundUpdate = () => {
    toast("Update Fund successful !");
  }  
  
  updateFundSubmit = (e, fundUpdate) => {
    e.preventDefault();
    let tokenId = JSON.parse(localStorage.getItem("localData"));
    const token = tokenId.user.token;
      e.preventDefault();     
      axios.put(`https://betalife-backend.herokuapp.com/api/funds/${this.state.id}`, this.state, {
        headers: {
          "Authorization": `Bearer ${token}`          
        }
      })
      .then(response => {
        if(response.status === 201) { 
        this.toastFundUpdate();
          window.location.reload(true);
        }
        else {
          alert("could not post data !");
        }
      })
      .catch( error => {
        console.log(error);      
        new Error(error);
        this.setState({
          fundsError: true
        });
      });
  }
    
  // Toast  signup successful
  toastFundPost = () => {
    toast("Add Funding successful!");
  }
  
  newFundSubmit = (e) => {
  let tokenId = JSON.parse(localStorage.getItem("localData"));
  const token = tokenId.user.token;
    e.preventDefault();     
    axios.post('https://betalife-backend.herokuapp.com/api/funds', this.state, {
      headers: {
        "Authorization": `Bearer ${token}`          
      }
    })
    .then(response => {
      if(response.status === 201) {  
        this.setState({
          fundsError: false,
          modal5: !this.state.modal5
        });
        this.toastFundPost();
        setTimeout(() => {
          this.getFunds();        
        }, 2000);
      }
      else {
        alert("could not post data !");
      }
    })
    .catch( error => {
      console.log(error);      
      new Error(error);
      this.setState({
        fundsError: true
      });
    });
  }
  
  render() {    
      // console.log(JSON.parse(localStorage.getItem("localData")).user.userId);
    const { funds } = this.state;
    const { title, description, website, fundingBody } = this.state
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
              <MDBIcon icon="money-bill-wave" onClick={() => {
                this.toggle(5)
                this.setState({ hideAddDetail: true });}} className="mr-2" />
              Add Fund
            </MDBBtn>
            <input type="text" placeholder="Search funds" className="form-control float-left" />
          </div>
          <MDBRow className="mb-4 pb-4 mx-auto">
            {funds.map((fund) => {
              return <MDBCol key={fund._id} md="12" className="text-center mb-2">
                <MDBCard>
                  <MDBCardBody className='elegant-color white-text rounded-bottom'>
                    {/* <a href='#!' className='activator waves-effect waves-light mr-4'>
                      <MDBIcon icon='share-alt' className='white-text' />
                    </a> */}
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
                  <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
                    <ul className="list-unstyled list-inline font-small">
                      <li className="list-inline-item pr-2 white-text float-left pl-1">
                        {/* <MDBIcon far icon="clock" /> Last updated {event.createdDate} */}
                      </li>

                      {/* delete event button */}
                      <li className="list-inline-item float-right pr-1">
                        <a href="#" className="text-danger" onClick={(e) => {
                          const fundDelete = fund;
                          return (
                            this.deleteFund(e, fundDelete)
                          )}}>  
                          <MDBIcon far icon="trash-alt" />
                        </a>
                      </li>

                      {/* update event button */}
                      <li className="list-inline-item float-right pr-2">
                        <a href="#" className="white-text" onClick={(e) => {
                          this.setState({
                            hideAddDetail: true,
                            title: fund.title,
                            description: fund.description,
                            website: fund.website,
                            fundingBody: fund.fundingBody,
                            id: fund._id
                          });
                          const fundUpdate = fund;
                          return (
                            this.showUpdateForm(e, fundUpdate)
                          )
                        }}>              
                          <MDBIcon far icon="edit" />
                        </a>
                      </li>

                      {/* share button */}
                      <li className="list-inline-item pr-2 float-right">
                        <a href="#!" className="white-text">
                          <MDBIcon icon="share-alt" className="mr-1" />
                        </a>
                      </li>

                      {/* like button */}
                      <li className="list-inline-item float-right px-2">
                        <a href="#!" className="white-text">
                          <MDBIcon color="white" fab icon="gratipay" className="pink-text mr-1" />
                          {/* {event.like} */}
                        </a>
                      </li>

                    </ul>
                  </div>

                  {/* Add/ Update fund form Modal */}
                  <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="lg" cascading>
                    <MDBModalHeader
                      toggle={this.toggle(5)}
                      titleClass="d-inline title"
                      className="text-center light-blue darken-3 white-text"
                    ><MDBIcon />
                      <MDBIcon icon="calendar-check" className="px-3" />
                      { this.state.hideAddDetail === false ? "Add Funding Body" :
                      "Edit Funding Body" }
                    </MDBModalHeader>
                    <MDBModalBody>
                      <div className="text-left">
                        <form>
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
                            {/* show error message if form can't submit */}
                            {
                              this.state.fundsError === true ?
                                <p className="text-danger my-2">Something went wrong!</p> : null
                            }

                            {/* show Add or Edit fund buttom based on state */}
                            { this.state.hideAddDetail === false ?
                              <MDBBtn
                                color="info"
                                type ="submit"
                                className="mb-2"
                                onClick={this.newFundSubmit}
                              >
                                Create
                                <MDBIcon icon="paper-plane" className="ml-1" />
                              </MDBBtn> :
                              <MDBBtn
                                color="info"
                                type ="submit"
                                className="mb-2"
                                onClick={(e) => {
                                  const fundUpdate = fund;
                                  return (
                                    this.updateFundSubmit(e,fundUpdate)
                                  )
                                }}
                              >
                                Update
                                <MDBIcon icon="paper-plane" className="ml-1" />
                              </MDBBtn> }
                          </div>
                        </form>
                      </div>
                    </MDBModalBody>
                  </MDBModal>
                  {/* end of add/ update form modal */}

                </MDBCard>
              </MDBCol>
            })
            }
          </MDBRow>
        </div>
        <ToastContainer pauseOnFocusLoss={true} />
      </div>
    );
  }

}

export default Funds;