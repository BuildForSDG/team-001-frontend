// import React, { Component } from "react";
//
// import { Redirect } from "react-router-dom";
//
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
//
// import bgTech from "../images/event_bg1.jpg";
//
// import Events from "./Events"
//
// // for later possible use
// class EventDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal1: true,
//       modal2: false,
//       modal3: false,
//       modal4: false,
//       redirect: ''
//     };
//   }
//
//   // componentDidMount() {
//   // }
//
//   toggle = (nr) => () => {
//     if (this.state.modal1 === false) {
//       this.props.history.push();
//     }
//     if (nr === 1) {
//       this.setState({
//         modal1: !this.state.modal1,
//         redirect: <Events />
//       });
//     }if (nr === 2) {
//       this.setState({
//         modal2: !this.state.modal2
//       });
//     }
//     // Modal. View event enrol.
//     else if (nr === 3) {
//       this.setState({
//         modal3: !this.state.modal3
//       });
//     }
//     // Modal. View event sponsor .
//     else if (nr === 4) {
//       this.setState({
//         modal4: !this.state.modal4
//       });
//     }
//   }
//
//   // backToEvents = () => {
//   //   if (this.state.modal1 === false) {
//   //     return (
//   //       <Events />
//   //         // <Redirect to="/Events" />
//   //         )
//   //         // this.props.history.push("/Events")
//   //         }
//   //         else {};
//   //         }
//
//   render() {
//   const {eventDetailsProps} = this.props;
//
//   return (
//   <div>
//     {/* { console.log("key is ", event._id) } */}
//
//     {/* { (events.indexOf(event) === (index-1)) ? {}} */}
//     <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="md" cascading>
//       {/* { console.log("current index is", events.indexOf(event)) } */}
//       {/* { console.log("current index is", event._id) } */}
//       <MDBModalHeader
//         toggle={this.toggle(1)}
//         titleClass="d-inline title"
//         className="text-center light-blue darken-3 white-text"
//       >
//         <a href="#!" className="white-text">
//           <MDBIcon color="white" fab icon="gratipay" className="pink-text" />
//           Like
//         </a>
//       </MDBModalHeader>
//       <MDBModalBody>
//         <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
//         />
//         <div className="text-left">
//           <p><small>Key: {eventDetailsProps.id} </small></p>
//           <h4> {eventDetailsProps.title} </h4>
//           <p className="">{eventDetailsProps.description}</p>
//           <p>{eventDetailsProps.createdDate}</p>
//           <p>{eventDetailsProps.location}</p>
//           <p>{eventDetailsProps.industry}</p>
//           <p>{eventDetailsProps.category}</p>
//           <p>{eventDetailsProps.amountToPay}</p>
//           <p>{eventDetailsProps.paymentDetail}</p>
//           <p> Start Date
//             <span className="text-muted"> {eventDetailsProps.dueRegDate}</span>
//           </p>
//           <p> Start Date
//             <span className="text-muted"> {eventDetailsProps.startDate}</span>
//           </p>
//           <p>{eventDetailsProps.like}</p>
//           <a href="/profile" onClick={this.toggle(2)}>
//             <h6> {eventDetailsProps.organizerId} </h6>
//           </a>
//           {/* Modal for organizer view */}
//           <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="md" cascading>
//             <MDBModalHeader
//               toggle={this.toggle(2)}
//               titleClass="d-inline title"
//               className="text-center light-blue darken-3 white-text"
//             >
//               <a href="#!" className="white-text">
//                 <MDBIcon color="white" fab icon="user-tie" className="pink-text" />
//                 Organizer
//               </a>
//             </MDBModalHeader>
//             <MDBModalBody>
//               <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
//               />
//               <div className="text-left">
//                 <p><small>organizer name</small></p>
//                 <h4> organization name </h4>
//                 <p className="">organizer phone</p>
//                 <p>orgnizer email</p>
//                 <p>organizer website</p>
//                 <p>organizer enabled</p>
//               </div>
//             </MDBModalBody>
//           </MDBModal>
//           {/* end of modal for organizer */}
//
//           <a href="/Contact">
//             <small className="pb-2">Give feedback on this event</small>
//           </a>
//         </div>
//         <div className="text-center mt-1-half">
//           <MDBBtn
//             color="primary"
//             className="my-2"
//             onClick={this.toggle(3)}
//           >
//             <MDBIcon icon="user-check" className="mr-1" />
//             Enrol
//             {/* This button should dd user_id and event_id to RegisteredForEvent table on db. <MDBIcon icon="sign-in-alt" className="ml-1" /> */}
//           </MDBBtn>
//           <MDBBtn
//             color="white"
//             className="my-2"
//             onClick={this.toggle(4)}
//           >
//             Sponsor
//             <MDBIcon icon="crown" className="text-primary ml-1" />
//           </MDBBtn>
//           {/* Modal for sponsor view */}
//           <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="md" cascading>
//             <MDBModalHeader
//               toggle={this.toggle(4)}
//               titleClass="d-inline title"
//               className="text-center light-blue darken-3 white-text"
//             >
//               <a href="#!" className="white-text">
//                 <MDBIcon color="white" fab icon="user-tie" className="pink-text" />
//                 Sponsor
//               </a>
//             </MDBModalHeader>
//             <MDBModalBody>
//               <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
//               />
//               <div className="text-left">
//                 <p><small>sponsor name</small></p>
//                 <h4> organization name </h4>
//                 <p className="">sponsor phone</p>
//                 <p>orgnizer email</p>
//                 <p>sponsor website</p>
//                 <p>sponsor enabled</p>
//               </div>
//             </MDBModalBody>
//           </MDBModal>
//           {/* end of modal for sponsor */}
//
//         </div>
//       </MDBModalBody>
//     </MDBModal>
//   </div>
//   );
//   }
//
// }
//
// export default EventDetails;
