import React, { useState } from "react";
import "./style.css";
import dcotorsList from "../Assets/JsonData/doctors-list.json";
import Add from '../Components/AddBtn/Add'
import { Link } from "react-router-dom";

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

const Doctors = () => {

  document.title = "Doctors";
  const [search, setSearch] = useState([]);
  return (
    <div>
      <div className="page-header">
        <h2>Doctors</h2>
        <Add link="/add-doctor" />
      </div>

      <div className="topnavp__search">
        <input
          type="text"
          placeholder="EE XX XX XX"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <table>
                <thead>
                  <tr>
                    {customerTableHead.map((title) => {
                      return <th>{title}</th>;
                    })}
                  </tr>
                </thead>

                <tbody className="tb-body">
                  {dcotorsList
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.cin
                          .toString()
                          .toLowerCase()
                          .includes(search.toString().toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item) => {
                      return (
                        <tr key={item.number}>
                        <td>{item.number}</td>
                        <td>{item.cin}</td>
                        <td>{item.name}</td>
                        <td>{item.specialite}</td>
                        <td>{item.hospital}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                          <td>
                          </td>
                          <td>
                            <i
                              className="bx bx-trash"
                              style={{ marginRight: "5px" }}
                            ></i>
                            <Link
                              to={
                                 "/edit-doctor/" + item.cin
                              }
                            >
                              <i className="bx bx-pencil"></i>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
