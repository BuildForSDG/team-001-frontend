import React from "react";
import { MDBDataTableV5 } from "mdbreact";
// import Result from "../components/result";

export default function Users() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "User Id",
        field: "userid",
        width: 80,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "User Id",
        },
      },
      {
        label: "First Name",
        field: "firstName",
        width: 70,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "First Name",
        },
      },
      {
        label: "Last Name",
        field: "lastName",
        width: 80,
      },
      {
        label: "Role",
        field: "role",
        width: 70,
      },
      {
        label: "Location",
        field: "location",
        width: 200,
      },
      {
        label: "Enabled",
        field: "enabled",
        sort: "asc",
        width: 100,
      },
      {
        label: "Signup date",
        field: "date",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        userid: "t001",
        firstName: "Emeka",
        lastName: "Nixxon",
        role: "Trainee",
        location: "Lagos",
        enabled: "yes",
        date: "2011/04/25",
        email: "xxx@zzz.com",
      },
      {
        userid: "t002",
        firstName: "Bimbo",
        lastName: "Winters",
        role: "Trainee",
        location: "Lagos",
        enabled: "no",
        date: "2011/07/25",
        email: "zxz@rrr.com",
      },
      {
        userid: "u003",
        firstName: "Akpan",
        lastName: "Udo",
        role: "Sponsor",
        location: "Uyo",
        enabled: "yes",
        date: "2009/01/12",
        email: "usq@ddd.com",
      },
      {
        userid: "o004",
        firstName: "Cedric",
        lastName: "Kelly",
        role: "Organizer",
        location: "Port Harcourt",
        enabled: "yes",
        date: "2012/03/29",
        email: "tur@jdjd.com",
      },
      {
        userid: "t005",
        firstName: "Davidson",
        lastName: "Davidson",
        role: "Trainee",
        location: "Abuja",
        enabled: "yes",
        date: "2010/10/14",
        email: "dsds@sds.com",
      },
      {
        userid: "t006",
        firstName: "Colleen",
        lastName: "Hurst",
        role: "Trainee",
        location: "Lagos",
        enabled: "yes",
        date: "2009/09/15",
        email: "fsd@iia.com",
      },
      {
        userid: "o007",
        firstName: "Sonya",
        lastName: "Frost",
        role: "Organizer",
        location: "Edinburgh",
        enabled: "yes",
        date: "2008/12/13",
        email: "qqq@uum.com",
      },
      {
        userid: "o008",
        firstName: "Jena Gaines",
        lastName: "Gaines",
        role: "Organizer",
        location: "London",
        enabled: "yes",
        date: "2008/12/19",
        email: "wiw@rrr.com",
      },
      {
        userid: "s009",
        firstName: "Quinn",
        lastName: "Flynn",
        role: "Sponsor",
        location: "Edinburgh",
        enabled: "yes",
        date: "2013/03/03",
        email: "akk@tta.com",
      },
      {
        userid: "o010",
        firstName: "Shou",
        lastName: "Itou",
        role: "Organiser",
        location: "Tokyo",
        enabled: "yes",
        date: "2011/08/14",
        email: "msn@akdn.com",
      },
      {
        userid: "t011",
        firstName: "Michelle",
        lastName: "House",
        role: "Trainee",
        location: "Sidney",
        enabled: "yes",
        date: "2011/06/02",
        email: "sffs@udaia.com",
      },
      {
        userid: "t012",
        firstName: "Donna",
        lastName: "Snider",
        role: "Trainee",
        location: "New York",
        enabled: "yes",
        date: "2011/01/25",
        email: "yyb@kmm.com",
      },
    ],
  });
  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  return (
    <>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        penabledsAmount={4}
        data={datatable}
        checkbox
        headCheckboxID="id2"
        bodyCheckboxID="checkboxes2"
        getValueCheckBox={(e) => {
          showLogs2(e);
        }}
      />

      {/* <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result> */}
    </>
  );
}
