import React from "react";
import axios from "axios";
//import { MDBDataTable } from "mdbreact";
import DatatablePage from "./Datatablemdb";
//import dataTable
class Datastore extends React.Component {
  state = {
    employeeRecord: []
  };
  componentDidMount = () => {
    axios.get("https://randomuser.me/api/?results=50&nat=us").then(record => {
      console.log(record);
      var employeeRecord = [];
      for (var i = 0; i < record.data.results.length; i++) {
        let records = {
          name:
            record.data.results[i].name.first +
            " " +
            record.data.results[i].name.last,
          email: record.data.results[i].email,
          image: record.data.results[i].image,
          phone: record.data.results[i].phone,
          dob: record.data.results[i].dob.date
        };
        employeeRecord.push(records);
      }
      this.setState({
        employeeRecord
      });
    });
  };
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <DatatablePage employeeRecord={this.state.employeeRecord} />
      </div>
    );
  }
}
export default Datastore;
