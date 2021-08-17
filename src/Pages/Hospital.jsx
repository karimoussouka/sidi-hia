import React from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import hospitalsList from "../Assets/JsonData/hospitals-list.json";
import Badge from "../Components/Badge/Badge";

const customerTableHead = ["N°", "id", "name", "adress", "phone"];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.number}</td>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.phone}</td>
    <td>{item.adress}</td>
  </tr>
);

const meetingsStatus = {
  Pending: "primary",
  Finished: "warning",
  "Meeting Now": "success",
};

const Customers = () => {

  document.title = "Hospital";
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
                bodyData={hospitalsList}
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
