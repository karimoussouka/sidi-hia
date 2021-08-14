import React from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import meetingsList from "../Assets/JsonData/meetings-list.json";
import Badge from "../Components/Badge/Badge";

const customerTableHead = [
  "N°",
  "Customer",
  "Doctor",
  "Hospital",
  "Date",
  "Time",
  "Status",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.number}</td>
    <td>{item.customer}</td>
    <td>{item.doctor}</td>
    <td>{item.hospital}</td>
    <td>{item.date}</td>
    <td>{item.time}</td>
    <td>
      <Badge content={item.status} type={meetingsStatus[item.status]}></Badge>
    </td>
  </tr>
);

const meetingsStatus = {
  Pending: "primary",
  Finished: "warning",
  Now: "success",
};

const Customers = () => {
  return (
    <div>
      <div className="page-header">
        <h2>Meetings</h2>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={meetingsList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
