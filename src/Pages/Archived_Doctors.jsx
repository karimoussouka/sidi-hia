import React, { useState } from "react";
import "./style.css";
import dcotorsList from "../Assets/JsonData/doctors-list.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const customerTableHead = [
    "N°",
    "CIN",
    "Name",
    "Speciality",
    "Hospital",
    "Email",
    "Phone",
    "Restore"
  ];



const Archived_Doctors = () => {

    const xx = (doctor) => {
        Swal.fire({
          title: 'Are you sure?',
          text: `You want to restore the doctor  ${doctor}!`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, restore it!'
        }).then((result) => {
          if (result.isConfirmed) {

            

            Swal.fire(
              'Saved!',
              `The doctor ${doctor} has been restored`,
              'success'
            )
          }
        })
      }

  document.title = "Archived Doctors";
  const [search, setSearch] = useState([]);
  return (
    <div>
        <div className = "top">
            <Link to="/archive">
                <i className="bx bx-arrow-back archive "></i>
            </Link>
            <div className="page-header">
                <h2>Archived Doctors</h2>
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
                        <i className="bx bx-save" onClick = {() => {xx(item.name)}} style={{ cursor: "pointer"}} >
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
  );
};

export default Archived_Doctors;
