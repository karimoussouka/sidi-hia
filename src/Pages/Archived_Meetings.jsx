import React, { useState } from "react";
import "./style.css";
import meetingsList from "../Assets/JsonData/meetings-list.json";
import { Link } from "react-router-dom";
import Add from "../Components/AddBtn/Add";
import Swal from "sweetalert2";

const customerTableHead = [
  "N°",
  "Customer",
  "Doctor",
  "Hospital",
  "Date",
  "Time",
  "Status",
];

const meetingsStatus = {
  Pending: "primary",
  Finished: "warning",
  Now: "success",
};

const Archived_Meetings = () => {

    const xx = (meeting) => {
        Swal.fire({
          title: 'Are you sure?',
          text: `You want to restore the meeting number ${meeting}!`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, restore it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Saved!',
              ` Meeting number ${meeting} has been restored`,
              'success'
            )
          }
        })
      }

  document.title = "Archived Meetings";
  const [search, setSearch] = useState([]);
  return (
    <div>
        <div className = "top">
            <Link to="/archive">
                <i className="bx bx-arrow-back archive "></i>
            </Link>
            <div className="page-header">
                <h2>Archived Meetings</h2>
            </div>
        </div>

      <div className="topnavp__search">
        <input
          type="text"
          placeholder="XX / XX / XXXX"
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
                  {meetingsList
                    .filter((val) => {
                      if (search === "") {
                        return val;
                      } else if (
                        val.date
                          .toString()
                          .toLowerCase()
                          .includes(search.toString().toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((meeting) => {
                      return (
                        <tr key={meeting.number}>

                          <td>{meeting.number}</td>
                          <td>{meeting.customer}</td>
                          <td>{meeting.doctor}</td>
                          <td>{meeting.hospital}</td>
                          <td>{meeting.date}</td>
                          <td>{meeting.time}</td>
                          <td>
                              <i className="bx bx-save" onClick = {() => {xx(meeting.number)}} style={{ cursor: "pointer"}} >
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

export default Archived_Meetings;
