
import React, { useState , useContext } from "react";
import "./style.css";
import customerList from "../Assets/JsonData/customers-list.json";
import { Link } from "react-router-dom";
import "../Components/Table/Table.css";
import {DataContext} from '../Context/ContextApi';
import Swal from 'sweetalert2'




const customerTableHead = [
  "N°",
  "cin",
  "name",
  "phone",
  "location",
  "save",
];

const Archived_Customers = () => {

  const xx = (customer) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to restore ${customer}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restore him (her)!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          `${customer} has been restored`,
          'success'
        )
      }
    })
  }
  
  document.title = "Archived Customers";
  const [search, setSearch] = useState([]);

  const {customers} = useContext(DataContext);
  return (
    <div>
      <div className = "top">
          <Link to="/archive">
            <i className="bx bx-arrow-back archive "></i>
          </Link>
          <div className="page-header">
            <h2>Archived Customers</h2>
            
          </div>
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
                    {customerList
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
                          <tr key={custom.number}>
                            <td>{custom.number}</td>
                            <td>{custom.cin}</td>
                            <td>{custom.name}</td>
                            <td>{custom.phone}</td>
                            <td>{custom.location}</td>
                            <td>
                              <i className="bx bx-save" onClick = {() => {xx(custom.name)}} style={{ cursor: "pointer"}} >
                              </i>
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

export default Archived_Customers;
