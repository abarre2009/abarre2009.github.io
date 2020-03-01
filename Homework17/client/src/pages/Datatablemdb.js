import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = props => {
  const data = {
    columns: [
      {
        Name: "name",
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: "email",
        field: "email",
        sort: "asc",
        width: 270
      },
      {
        label: "image",
        field: "image",
        sort: "asc",
        width: 200
      },
      {
        label: "phone",
        field: "phone",
        sort: "asc",
        width: 100
      },
      {
        label: "dob",
        field: "dob",
        sort: "asc",
        width: 150
      }
    ]
  };
  console.log(data, props);
  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={{ columns: data.columns, rows: props.employeeRecord }}
    />
  );
};

export default DatatablePage;
