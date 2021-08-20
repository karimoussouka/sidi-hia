import React, { useState } from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import hospitalsList from "../Assets/JsonData/hospitals-list.json";
import Badge from "../Components/Badge/Badge";
import { Link } from "react-router-dom";
import Add from "../Components/AddBtn/Add";

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

const Hospital = () => {

  document.title = "Hospital";
  

  const [search, setSearch] = useState([]);
  return (
    <div>
      <div className="page-header">
        <h2>Hospitals</h2>
        <Add link="/add-hospital" />
      </div>

      <div className="topnavp__search">
        <input
          type="text"
          placeholder="XXXXXX"
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
                  {hospitalsList
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.name
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
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.adress}</td>
                          <td>
                          </td>
                          <td>
                            <i
                              className="bx bx-trash"
                              style={{ marginRight: "5px" }}
                            ></i>
                            <Link
                              to={
                                 "/edit-hospital/" + item.name
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

export default Hospital;
