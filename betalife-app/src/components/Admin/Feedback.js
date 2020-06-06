import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["User Id", "Person Name", "Location", "Country", "Feedback"];

const data = [
  ["t022", "Bimbo Babatunde", "Lagos", "NIgeria",
  "Hi. I love the event that held yesterday. Does it come every month ?"],

  ["t043", "Musa Muhammed ", "Kano", "Nigeria", "I couldn't register for the this Training, Grow Your Wealth. Plase help."],
  ["t081", "Idris Bello", "Abuja", "Nigeria", "Please let me know when the organizers of Millionaire Midset are coming to Abuja."],
  ["s017", "Elisa Gallagher", "Portica", "United Kingdom", "Is this organizer with userId o331 duely registered ?"]
];

const Feedback = props => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        User Feedback
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Feedback;
