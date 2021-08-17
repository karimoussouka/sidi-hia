import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import meetingsList from "../Assets/JsonData/meetings-list.json";
import { Link } from "react-router-dom";
import "./style.css";

const Edit_Meeting = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [list, setList] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [doctor, setDoctore] = useState([]);
  const [hospital, setHopital] = useState([]);
  const [date,setDate] = useState([]);
  const [time,setTime] = useState([]);

  const meeting = () => {
    if (props.match.params.customer) {
      const data = meetingsList.filter(
        meeting => props.match.params.customer === meeting.customer
      );
      setList(data);
    }
  };

  const info = () => {

  }

  useEffect(() => {
    meeting();
  }, []);

  function Submit(data) {
    console.log(data);
  }
  return (
    <div>
      {list.map((item) => {
        return (
          <div>
            <Link to="/meetings">
              <i className="bx bx-arrow-back back"></i>
            </Link>
            <div className="add_cus">
              <h1 className="titel">{item.customer}</h1>
              <form
                action=""
                className="newCustomer"
                onSubmit={handleSubmit(Submit)}
              >
                <div className="Item">
                  <label htmlFor="">Customer :</label>
                  <input
                    onChange = {e =>{ setCustomer(e.target.value) } }
                    value = {customer.cin}
                    type="text"
                    placeholder={item.customer}
                    required
                    {...register("cin", { required: true, maxLength: 8 })}
                  />
                  {errors.cin && errors.cin.type === "maxLength" && (
                    <span role="alert">
                      {" "}
                      <p style={{ color: "red" }}>Max length 8 caracteres</p>
                    </span>
                  )}
                </div>
                <div className="Item">
                  <label htmlFor="">Doctor :</label>
                  <input
                    type="text"
                    placeholder={item.doctor}
                    autoComplete="off"
                    required
                    {...register("name", { required: true, maxLength: 30 })}
                  />
                  {errors.name && errors.name.type === "maxLength" && (
                    <span role="alert">
                      {" "}
                      <p style={{ color: "red" }}>Max length 30 caracteres</p>
                    </span>
                  )}
                </div>
                <div className="Item">
                  <label htmlFor="">Hospital :</label>
                  <input
                    type="email"
                    placeholder={item.hospital}
                    {...register("hospital", { required: true, maxLength: 30 })}
                  />
                  {errors.hospital && errors.hospital.type === "maxLength" && (
                    <span role="alert">
                      {" "}
                      <p style={{ color: "red" }}>Max length 30 caracteres</p>
                    </span>
                  )}
                </div>
                <div className="Item">
                  <label htmlFor="">Date :</label>
                  <input
                    type="text"
                    placeholder={item.date}
                    required
                    {...register("date", { required: true, maxLength: 10 })}
                  />
                  {errors.date && errors.date.type === "maxLength" && (
                    <span role="alert">
                      {" "}
                      <p style={{ color: "red" }}>Max length 10 caracteres</p>
                    </span>
                  )}
                </div>
                <div className="Item">
                  <label htmlFor="">Time :</label>
                  <input
                    type="text"
                    placeholder={item.time}
                    required
                    {...register("time", { required: true, maxLength: 30 })}
                  />
                  {errors.time && errors.time.type === "maxLength" && (
                    <span role="alert">
                      {" "}
                      <p style={{ color: "red" }}>Max length 30 caracteres</p>
                    </span>
                  )}
                </div>
                <button className="btnInsert">Update</button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Edit_Meeting;
