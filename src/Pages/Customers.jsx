
import React, { useState , useContext } from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import customerList from "../Assets/JsonData/customers-list.json";
import { Link } from "react-router-dom";
import Add from "../Components/AddBtn/Add";
import "../Components/Table/Table.css";
import {DataContext} from '../Context/ContextApi';


const customerTableHead = [
  "N°",
  "cin",
  "name",
  "phone",
  "location",
  "action",
];

const Customers = () => {
  
  document.title = "Customers";
  const [search, setSearch] = useState([]);

  const {customers} = useContext(DataContext);
  return (
    <div>
      <div className="page-header">
        <h2>Customers</h2>
        <Add link="/add-customer" />
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
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      {customerTableHead.map((title) => {
                        return <th>{title}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody className="tb-body">
                    {customers
                      .filter((val) => {
                        if (search == "") {
                          return val;
                        } else if (
                          val.cin.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((custom) => {
                        return (
                          <tr key={custom.id}>
                            <td>{custom.id}</td>
                            <td>{custom.cin}</td>
                            <td>{custom.full_name}</td>
                            <td>{custom.phone}</td>
                            <td>{custom.adress}</td>
                            <td>
                              <i
                                className="bx bx-trash"
                                style={{ marginRight: "5px" }}
                              ></i>
                              <Link to={"/edit-customer/" + custom.cin}>
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
    </div>
  );
};

export default Customers;
