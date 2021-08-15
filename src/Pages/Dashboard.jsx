import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";


import StatusCard from "../Components/Status-card/StatusCard";
import statusCards from "../Assets/JsonData/status-card-data.json";
import Table from "../Components/Table/Table";
import Badge from "../Components/Badge/Badge";

const chartOptions = {
  series: [
    {
      name: "Total Customers",
      data: [51, 54, 65, 57, 28, 69, 62, 41, 49, 63, 46, 53],
    },
    {
      name: "Hommes",
      data: [10, 26, 35, 12, 7, 27, 31, 16, 9, 44, 24, 28],
    },
    {
      name: "Femmes",
      data: [41, 28, 30, 45, 21, 42, 31, 25, 40, 19, 22, 25],
    },
  ],

  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparnt",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "jan",
        "feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Dec",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};
const topCustomersHead = {
  head: ["N°", "Customer", "Total visites", "Last visite"],
};
const topCustomers = {
  body: [
    {
      number: "1",
      name: "Omnia Moutaa",
      total_Visites: "15",
      lastVisite: "21-06-2021",
    },
    {
      number: "2",
      name: "Ibrahim Hani",
      total_Visites: "14",
      lastVisite: "12-01-2021",
    },
    {
      number: "3",
      name: "Imane Rabiae",
      total_Visites: "13",
      lastVisite: "23-05-2021",
    },
    {
      number: "4",
      name: "Loubna Assili",
      total_Visites: "12",
      lastVisite: "14-12-2020",
    },
    {
      number: "5",
      name: "Mohammed Hamdi",
      total_Visites: "12",
      lastVisite: "14-12-2020",
    },
  ],
};

const renderCostumersHead = (item, index) => <th key={index}>{item}</th>;
const renderCostumersBody = (item, index) => (
  <tr key={index}>
    <td>{item.number}</td>
    <td>{item.name}</td>
    <td>{item.total_Visites}</td>
    <td>{item.lastVisite}</td>
  </tr>
);

const latestMeetings = {
  head: ["N°", "Customer", "Doctor", "Hospital", "Date", "Time", "Status"],
  body: [
    {
      number: "1",
      customer: "Houssein kamal",
      doctor: "Ali Chaab",
      clinic: "Narjiss",
      date: "13-08-2021",
      time: "10:00-12:00",
      status: "Finished",
    },
    {
      number: "2",
      customer: "Hafida Lahcen",
      doctor: "Ahmed Nabi",
      clinic: "Touimi",
      date: "13-08-2021",
      time: "15:00-17:00",
      status: "Now",
    },
    {
      number: "3",
      customer: "Malika Jaadi",
      doctor: "Innes Rayssi",
      clinic: "Sbaaii",
      date: "14-08-2021",
      time: "10:00-12:30",
      status: "Pending",
    },
    {
      number: "4",
      customer: "Jama Bendhou",
      doctor: "Said Balkass",
      clinic: "Sbaii",
      date: "15-08-2021",
      time: "08:00-10:00",
      status: "Pending",
    },
    {
      number: "5",
      customer: "Hania Halimi",
      doctor: "Souad Lwafi",
      clinic: "Najmi",
      date: "15-08-2021",
      time: "16:00-17:30",
      status: "Pending",
    },
  ],
};

const meetingsStatus = {
  Pending: "primary",
  Finished: "warning",
  Now: "success",
};

const renderMeetingsHead = (item, index) => <th key={index}>{item}</th>;
const renderMeetingsBody = (item, index) => (
  <tr key={index}>
    <td>{item.number}</td>
    <td>{item.customer}</td>
    <td>{item.doctor}</td>
    <td>{item.clinic}</td>
    <td>{item.date}</td>
    <td>{item.time}</td>
    <td>
      <Badge content={item.status} type={meetingsStatus[item.status]}></Badge>
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div>
      <h2 className="pag-header">Dahsboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6">
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <div className="card full-height">
            <Chart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="100%"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h3>Top Customers</h3>
            </div>
            <div className="card__body">

            <table>
              <th>N°</th>
              <th>Customer</th>
              <th>Total visites</th>
              <th>Last visite</th>
              <tr>
                <td></td>
              </tr>
            </table>
            {/*  <Table
                headData={topCustomersHead.head}
                renderHead={(item, index) => renderCostumersHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCostumersBody(item, index)}
              />
            */}
            </div>
            <div className="card__footer">
              <Link to="/customers">View all</Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card__header">
              <h3>Latest Meetings</h3>
            </div>
            <div className="card__body">
            <table>
              <th>N°</th>
              <th>Customer</th>
              <th>Total visites</th>
              <th>Last visite</th>
              
            </table>
            { /*  <Table
                headData={latestMeetings.head}
                renderHead={(item, index) => renderMeetingsHead(item, index)}
                bodyData={latestMeetings.body}
                renderBody={(item, index) => renderMeetingsBody(item, index)}
              />
            */ }
            </div>
            <div className="card__footer">
              <Link to="/">View all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
