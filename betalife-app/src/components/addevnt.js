// import React, { Component } from "react";
// import { Link } from "react-router-dom";
//
// import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBModal, MDBModalBody, MDBModalHeader, MDBFormInline, MDBInput } from "mdbreact";
//
// import axios from 'axios';
// import DatePicker from "react-datepicker";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import nextId, { setPrefix } from "react-id-generator";
// // import uniqueId from "react-html-id";
//
// import bgTech from "../images/event_bg1.jpg";
// import bgFashion from "../images/butterfly_bg.jpg";
//
// // Events UI
// class Events extends Component {
//   constructor(props) {
//     super(props);
//     // const genUserId = nextId("evt0");
//     // setPrefix("eve0")
//     // uniqueId.enableUniqueIds(this);
//     this.state = {
//       events: [],
//       modal1: false,
//       modal2: false,
//       modal3: false,
//       modal4: false,
//       modal5: false,
//       showDetailContainer: '',
//       likeEvent: false,
//       // _id: 'evet001',
//       organizerId: '',
//       sponsorId: '',
//       title: '',
//       description: '',
//       imageUrl: '',
//       createdDate: new Date(),
//       dueRegDate: new Date(),
//       startDate: new Date(),
//       endDate: new Date(),
//       targetAudience: '',
//       category: '',
//       amountToPay: '',
//       paymentDetail: '',
//       like: '',
//       location: '',
//       industry: ''
//     };
//   }
//
//   componentDidMount() {
//     // fetch data here
//     axios.get('http://localhost:4000/api/events')
//     .then(response => {
//       console.log(response);
//       if(response.status === 201) {
//         this.setState({
//           events: response.data
//         });
//       }
//       else {
//         alert("could not retrieve data");
//         // response.status(400).json({
//         //   message: "COuld not retrieve data"
//         // });
//       }
//     })
//     .catch( error => error );
//   }
//
//   checkStatus(){
//   // check if user is logged in
//   }
//
//   handleHome= (e) => {
//     e.preventDefault();
//     this.props.history.push("/App");
//   }
//
//   // nr represents modal number
//   toggle = (nr) => () => {
//     // modal. View event detail.
//     if (nr === 1) {
//       this.setState({
//         modal1: !this.state.modal1
//       });
//     }
//     // Modal. View event organizer.
//     if (nr === 2) {
//       this.setState({
//         modal2: !this.state.modal2
//       });
//     }
//     // Modal. View event enrol.
//     else if (nr === 3) {
//       this.setState({
//         modal3: !this.state.modal3
//       });
//       this.notify()
//     }
//     // Modal. View event sponsor .
//     else if (nr === 4) {
//       this.setState({
//         modal4: !this.state.modal4
//       });
//     }
//     // Modal. Add Event .
//     else if (nr === 5) {
//       this.setState({
//         modal5: !this.state.modal5
//       });
//       this.newEvent();
//     }
//   }
//
//   // handleViewEventDetail = (e, detailContainer) => {
//   //   // this.props.history.push("/EventDetails");
//   //   const { eventDetailsProps } = this.props;
//   //   eventDetailsProps(detailContainer);
//   // }
//
//   handleViewEventDetail = (e, detailContainer) => {
//       this.setState({
//         modal1: !this.state.modal1,
//         showDetailContainer: detailContainer
//       });
//   }
//
//   toggleLike = (e) => {
//     e.preventDefault();
//     this.setState({
//       likeEvent: !this.state.likeEvent
//     });
//   }
//
//   handleRadio = (nr) => () => {
//     if (nr === 1) {
//       this.setState({
//         radio: nr,
//         category: "free ",
//       });
//     }
//     else if (nr === 2) {
//       this.setState({
//         radio: nr,
//         category: "paid",
//       });
//     }
//   }
//
//   handleDate = (nr, date) => () => {
//     if (nr === 1) {
//       this.setState({
//         createdDate: date
//       });
//     }
//     else if (nr === 2) {
//       this.setState({
//         dueRegDate: date
//       });
//     }
//     else if (nr === 3) {
//       this.setState({
//         startDate: date
//       });
//     }
//     else if (nr === 4) {
//       this.setState({
//         endDate: date
//       });
//     }
//   }
//
//   notify = () => {
//     toast("You've successfully enrolled!");
//   }
//
//   newEvent = () => {
//     axios.post("http://localhost:4000/api/events", this.state)
//     .then(response => {
//       console.log(response);
//       toast("Event created successfully. Awaiting review!");
//       })
//       .catch(error => {
//         console.log(error);
//     })
//   }
//
//   render(){
//   const eventDetailsProp2 = this.state.showDetailContainer;
//     const {events} = this.state;
//     const {
//       organizerId,
//       sponsorId,
//       title,
//       description,
//       imageUrl,
//       createdDate,
//       dueRegDate,
//       startDate,
//       endDate,
//       targetAudience,
//       category,
//       payAmount,
//       paymentDetail,
//       location,
//       industry
//     } = this.state
//     return (
//       <div>
//         <div className="row mt-4 pt-5">
//           <div className="col-12 mb-4">
//             <h1 className="text-center float-left">All Events</h1>
//             <MDBBtn
//               color="primary"
//               className="float-right"
//               onClick={this.newEvent()}
//             >
//               <MDBIcon icon="calendar-check" onClick={this.toggle(5)} className="mr-2" />
//               Add Event
//             </MDBBtn>
//             <MDBDropdown className="float-right">
//               <MDBDropdownToggle caret color="primary">
//                 Filter by
//               </MDBDropdownToggle>
//               <MDBDropdownMenu basic>
//                 <MDBDropdownItem href="#">Past</MDBDropdownItem>
//                 <MDBDropdownItem active href="#">Up coming</MDBDropdownItem>
//                 <MDBDropdownItem>Industry</MDBDropdownItem>
//                 <MDBDropdownItem href="#">
//                   Location
//                 </MDBDropdownItem>
//                 <MDBDropdownItem href="#">Popularity</MDBDropdownItem>
//               </MDBDropdownMenu>
//             </MDBDropdown>
//             <input type="text" placeholder="Search events" className="form-control float-left" />
//           </div>
//         </div>
//
//         <MDBRow className="mb-4 pb-4">
//           {events.map((event) => {
//             const detailContainer = event;
//             return <MDBCol key={event._id} md="10" className="text-center mx-auto mb-2">
//               <MDBCard
//                 className="card-image"
//                 style={{
//                     backgroundImage:
//           `url( ${bgTech} )`
//                 }}
//               >
//                 <div className="text-white text-center d-flex align-items-center rgba-black-strong py-2 px-4">
//                   <div className="w-100">
//                     <h5 className="light-blue-text pt-2">
//                       <MDBIcon icon="chart-pie" className="capitalize" /> {event.industry} Category
//                     </h5>
//                     <MDBCardTitle tag="h3" className="pt-2">
//                       <strong>{event.title}</strong>
//                     </MDBCardTitle>
//                     <p>
//                       {event.description}
//                     </p>
//                     <a href="#"><h6> {event.organizerId} </h6></a>
//
//                     <MDBBtn color="primary" onClick={ (e) => {
//                       const detailContainer = event;
//                       return (
//                         this.handleViewEventDetail(e, detailContainer)
//                       );
//                     }}>
//                       <MDBIcon icon="clone left" /> View
//                     </MDBBtn>
//
//                   </div>
//                 </div>
//                 <div className="rounded-bottom mdb-color lighten-3 text-center py-1 px-2">
//                   <ul className="list-unstyled list-inline font-small">
//                     <li className="list-inline-item pr-2 white-text float-left pl-1">
//                       <MDBIcon far icon="clock" /> Last updated {event.createdDate}
//                     </li>
//                     <li className="list-inline-item pl-2 float-right">
//                       <a href="#!" className="white-text">
//                         <MDBIcon far icon="comments" className="mr-1" />
//                         Share
//                       </a>
//                     </li>
//                     <li className="list-inline-item float-right pr-1">
//                       <a href="#!" className="white-text">
//                         <MDBIcon color="white" fab icon="gratipay" className="pink-text mr-1" />
//                         {event.like}
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </MDBCard>
//
//             </MDBCol>
//           })}
//
//           {/* UI for Event Details */}
//           <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="md" cascading>
//             <MDBModalHeader
//               toggle={this.toggle(1)}
//               titleClass="d-inline title"
//               className="text-center light-blue darken-3 white-text"
//             >
//               <h4>Event Details</h4>
//             </MDBModalHeader>
//             <MDBModalBody>
//               <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
//               />
//               <div className="text-left">
//                 <MDBCol className="float-left">
//                   <p className="float-left">
//                     <small>
//                       {eventDetailsProp2._id}
//                     </small></p>
//                   <a href="#!" className="white-text float-right" onClick={this.toggleLike}>
//                     {
//                       this.state.likeEvent === false ?
//
//                         <MDBIcon size="lg" color="white" fab icon="gratipay" className="dark-text darken-5" />:
//                         <MDBIcon size="lg" color="white" fab icon="gratipay" className="pink-text" />
//                     }
//                   </a>
//                 </MDBCol>
//                 <MDBCol className="float-left">
//                   <h4> {eventDetailsProp2.title} </h4>
//                   <p>{eventDetailsProp2.description}</p>
//                   <p> <small>Last updated:</small> {eventDetailsProp2.createdDate}</p>
//                   <p> <small>Location: </small>{eventDetailsProp2.location}</p>
//                   <p> <small>Industry: </small>{eventDetailsProp2.industry}</p>
//                   <p> <small>category: </small>{eventDetailsProp2.category}</p>
//                   <p> <small>Amount: </small>{eventDetailsProp2.amountToPay}</p>
//                   <p> <small>PAyment Details: </small>{eventDetailsProp2.paymentDetail}</p>
//                   <p> <small>Registration Ends: </small> {eventDetailsProp2.dueRegDate}
//                   </p>
//                   <p> <small>Event Date: </small> {eventDetailsProp2.startDate}
//                   </p>
//                   <a href="/profile" onClick={this.toggle(2)}>
//                     <h6> {eventDetailsProp2.organizerId} </h6>
//                   </a>
//                 </MDBCol>
//
//                 {/* Modal for organizer view */}
//                 <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="md" cascading>
//                   <MDBModalHeader
//                     toggle={this.toggle(2)}
//                     titleClass="d-inline title"
//                     className="text-center light-blue darken-3 white-text"
//                   >
//                     <a href="#!" className="white-text">
//                       <MDBIcon color="white" fab icon="user-tie" className="pink-text" />
//                       Organizer
//                     </a>
//                   </MDBModalHeader>
//                   <MDBModalBody>
//                     <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
//                     />
//                     <div className="text-left">
//                       <p><small>organizer name</small></p>
//                       <h4> organization name </h4>
//                       <p className="">organizer phone</p>
//                       <p>orgnizer email</p>
//                       <p>organizer website</p>
//                       <p>organizer enabled</p>
//                     </div>
//                   </MDBModalBody>
//                 </MDBModal>
//                 {/* end of modal for organizer */}
//
//                 <a href="/Contact">
//                   <small className="pb-2">Give feedback on this event</small>
//                 </a>
//               </div>
//               <div className="text-center mt-1-half">
//                 <MDBBtn
//                   color="primary"
//                   className="my-2"
//                   onClick={this.toggle(3)}
//                 >
//                   <MDBIcon icon="user-check" className="mr-1" />
//                   Enrol
//                   {/* This button should dd user_id and event_id to RegisteredForEvent table on db. <MDBIcon icon="sign-in-alt" className="ml-1" /> */}
//                 </MDBBtn>
//                 <ToastContainer pauseOnFocusLoss={true} />
//                 <MDBBtn
//                   color="white"
//                   className="my-2"
//                   onClick={this.toggle(4)}
//                 >
//                   Sponsor
//                   <MDBIcon icon="crown" className="text-primary ml-1" />
//                 </MDBBtn>
//                 {/* Modal for sponsor view */}
//                 <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="md" cascading>
//                   <MDBModalHeader
//                     toggle={this.toggle(4)}
//                     titleClass="d-inline title"
//                     className="text-center light-blue darken-3 white-text"
//                   >
//                     <a href="#!" className="white-text">
//                       <MDBIcon color="white" fab icon="user-tie" className="pink-text" />
//                       Sponsor
//                     </a>
//                   </MDBModalHeader>
//                   <MDBModalBody>
//                     <img src={bgTech} className="img-fluid mb-2" alt="Event detail"
//                     />
//                     <div className="text-left">
//                       <p><small>sponsor name</small></p>
//                       <h4> organization name </h4>
//                       <p className="">sponsor phone</p>
//                       <p>orgnizer email</p>
//                       <p>sponsor website</p>
//                       <p>sponsor enabled</p>
//                     </div>
//                   </MDBModalBody>
//                 </MDBModal>
//                 {/* end of modal for sponsor */}
//
//               </div>
//             </MDBModalBody>
//           </MDBModal>
//
//           {/* Add Event Modal */}
//           <MDBModal isOpen={this.state.modal5} toggle={this.toggle(5)} size="lg" cascading>
//             <MDBModalHeader
//               toggle={this.toggle(5)}
//               titleClass="d-inline title"
//               className="text-center light-blue darken-3 white-text"
//             ><MDBIcon />
//               <MDBIcon icon="calendar-check" className="px-3" />
//               Add Event
//             </MDBModalHeader>
//             <MDBModalBody>
//               <div className="text-left">
//                 <MDBInput
//                   label="Event Title"
//                   name="title"
//                   type="text"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={title}
//                 />
//                 <MDBInput
//                   label="Description"
//                   name="description"
//                   type="text"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={description}
//                 />
//                 <MDBFormInline className="my-4">
//                   <label className="mr-2">Date created</label>
//                   <DatePicker anme="createdDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
//                     selected={this.state.createdDate}
//                     omChange={this.handleDate(1)}
//                   />
//                 </MDBFormInline>
//                 <MDBFormInline className="my-4">
//                   <label className="mr-2">Registration due date</label>
//                   <DatePicker anme="dueRegDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
//                     selected={this.state.dueRegDate}
//                     omChange={this.handleDate(2)}
//                   />
//                 </MDBFormInline>
//                 <MDBFormInline className="my-4">
//                   <label className="mr-2">Start Date</label>
//                   <DatePicker anme="startDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
//                     selected={this.state.startDate}
//                     omChange={this.handleDate(3)}
//                   />
//                 </MDBFormInline>
//                 <MDBFormInline className="my-4">
//                   <label className="mr-2">End date</label>
//                   <DatePicker anme="endDate" className="border border-top-0 border-left-0 border-right-0 border-bottom border-dark-grey pb-1"
//                     selected={this.state.endDate}
//                     omChange={this.handleDate(4)}
//                   />
//                 </MDBFormInline>
//                 <MDBInput
//                   label="Taget audience"
//                   name="targetAudience"
//                   type="text"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={targetAudience}
//                 />
//                 <fragment className="form-check-inline mb-3">
//                   <label className="mr-5">Category</label>
//                   <MDBInput
//                     gap
//                     onClick={this.handleRadio(1)}
//                     checked={this.state.radio === 1 ? true : false}
//                     label="Free"
//                     name="category"
//                     type="radio"
//                     id="radio1"
//                     size="sm"
//                     containerClass="mr-3"
//                   />
//                   <MDBInput
//                     gap
//                     onClick={this.handleRadio(2)}
//                     checked={this.state.radio === 2 ? true : false}
//                     label="Paid"
//                     name="category"
//                     type="radio"
//                     id="radio2"
//                     size="sm"
//                     containerClass="mr-3"
//                   />
//                 </fragment>
//                 <MDBInput
//                   className="d-inline"
//                   label="Amount to be paid"
//                   name="payAmount"
//                   type="number"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={payAmount}
//                 />
//                 <MDBInput
//                   className="d-inline"
//                   label="Payment detail"
//                   name="paymentDetail"
//                   type="textarea"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={paymentDetail}
//                 />
//                 <MDBInput
//                   className="d-inline"
//                   label="Location"
//                   name="location"
//                   type="text"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={location}
//                 />
//                 <MDBInput
//                   className="d-inline"
//                   label="Industry"
//                   name="industry"
//                   type="number"
//                   iconClass="dark-grey"
//                   onChange={this.changeHandler}
//                   value={industry}
//                 />
//                 <div className="input-group mb-4">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text" id="inputGroupFileAddon01">
//                       Upload
//                     </span>
//                   </div>
//                   <div className="custom-file">
//                     <input
//                       name="photo"
//                       type="file"
//                       className="custom-file-input"
//                       id="inputGroupFile01"
//                       aria-describedby="inputGroupFileAddon01"
//                     />
//                     <label className="custom-file-label" htmlFor="inputGroupFile01">
//                       Choose file
//                     </label>
//                   </div>
//                 </div>
//
//                 <div className="text-center mt-1-half">
//                   <MDBBtn
//                     color="info"
//                     className="mb-2"
//                     onClick={this.toggle(5)}
//                   >
//                     Create
//                     <MDBIcon icon="paper-plane" className="ml-1" />
//                   </MDBBtn>
//                 </div>
//               </div>
//             </MDBModalBody>
//           </MDBModal>
//
//         </MDBRow>
//       </div>
//     );
//   }
//   }
//
// export default Events;



// 
// <Formik
//   initialvalues = {{
//     title: '',
//     description: '',
//     dueRegDate: new Date(),
//     startDate: new Date(),
//     endDate: new Date(),
//     targetAudience: '',
//     category: '',
//     amountToPay: '',
//     paymentDetail: '',
//     location: '',
//     industry: '',
//     imageUrl: '',
//   }}
//   validationSchema = {Yup.object({
//     title: Yup.string()
//     . min(3, 'Must be at least 3 characters')
//     .max(50, 'Must 50 characters or less')
//     .required('Required'),
//     description: Yup.string()
//     .min(10, 'Must be at least 10 characters')
//     .max(200, 'Must be 200 characters or less'),
//     // .required('Required'),
//     dueRegDate: Yup.date()
//     .min(dueDateMin, 'Must be in 3 days at least'),
//     startDate: Yup.date()
//     .min(dueDateMin, 'Must be in 3 days at least'),
//     endDate: Yup.date()
//     .min(dueDateMin, 'Must be in 3 days at least'),
//     targetAudience: Yup.string(),
//     catogory: Yup.string()
//     .oneOf(['male', 'female'], 'Select one'),
//     amountToPay: Yup.number()
//     .min(1, 'Must be at least 1')
//     .max(1000000, 'Must not exceed 1000000'),
//     paymentDetail: Yup.string()
//     .min(5, 'Must be at least 5 characters'),
//     location: Yup.string()
//     .min(2, 'Must be at least 2 characters')
//     .max(50, 'Must be 50 characters or less')
//     .required('Required'),
//     industry: Yup.string()
//     .min(2, 'Must be at least 2 characters')
//     .max(50, 'Must be 50 characters or less'),
//   })}
//   onsublit = {(values,{ setSubmitting, resetForm}) => {
//     // make api call here
//   }}
// >
// </Formik>
