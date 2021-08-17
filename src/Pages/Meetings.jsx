import React, { useState } from "react";
import "./style.css";
import Table from "../Components/Table/Table";
import meetingsList from "../Assets/JsonData/meetings-list.json";
import Badge from "../Components/Badge/Badge";
import { Link } from "react-router-dom";
import Add from "../Components/AddBtn/Add";

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

const Meetings = () => {
  document.title = "Meetings";
  const [search, setSearch] = useState([]);
  return (
    <div>
      <div className="page-header">
        <h2>Meetings</h2>
        <Add link="/add-meeting" />
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
                            <Badge
                              content={meeting.status}
                              type={meetingsStatus[meeting.status]}
                            ></Badge>
                          </td>
                          <td>
                            <i
                              className="bx bx-trash"
                              style={{ marginRight: "5px" }}
                            ></i>
                            <Link
                              to={
                                 "/edit-meeting/" + meeting.customer
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

export default Meetings;
