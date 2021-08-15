import React, { useState } from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import dcotorsList from "../Assets/JsonData/doctors-list.json";

const customerTableHead = [
  "N°",
  "CIn",
  "Nane",
  "Speciality",
  "Hospital",
  "Email",
  "Phone",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.number}</td>
    <td>{item.cin}</td>
    <td>{item.name}</td>
    <td>{item.specialite}</td>
    <td>{item.hospital}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
  </tr>
);

const Customers = () => {

  const [search, setSearch] = useState([]);

  return (
    <div>
      <div className="page-header">
        <h2>Doctors</h2>
      </div>
      <div className="topnavp__search">
      <input type="text" placeholder="Search here...." onChange = {e => {setSearch(e.target.value)}} />
        <i className="bx bx-search"></i>
    </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={dcotorsList}
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
