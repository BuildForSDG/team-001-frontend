import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["User Id", "Person Name", "Role", "Event id", "Announcement"];

const data = [
  ["o022", "Amos Bala", "Organizer", "e01015",
  "Hello trainees, Our monthly event has been postponed till further notice. Thank you."],

  ["o043", "Kadija Muhammed ", "Organizer", "e22991", "Please Trainees ensure you come with your given permit for tomorrow's event."],
  ["s04281", "Salmon Templer", "Sponsor", "", "We are sponsoring uptwo events that has to do with entertainment. Interested Organizers please send in your applications."],
  ["035017", "Margret Henshaw", "Organizer", "e77001", "Time for our event has been chnged from 2pm to 4pm on same day. Please note."]
];

const Announcement = (props) => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Announcements
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Announcement;
