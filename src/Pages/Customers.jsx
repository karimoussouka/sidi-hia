import React from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import customerList from "../Assets/JsonData/customers-list.json";

const customerTableHead = [
  "N°",
  "cin",
  "name",
  "email",
  "phone",
  "location",
  "last Visite",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.number}</td>
    <td>{item.cin}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.location}</td>
    <td>{item.lastVisite}</td>
  </tr>
);
const Customers = () => {
  return (
    <div>
      <div className="page-header">
        <h2>Customers</h2>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
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
