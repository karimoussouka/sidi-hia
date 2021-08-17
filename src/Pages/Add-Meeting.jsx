import "./style.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import customerList from "../Assets/JsonData/customers-list.json";
import dcotorsList from "../Assets/JsonData/doctors-list.json";
import hospitalsList from "../Assets/JsonData/hospitals-list.json";
import { useState } from "react";

export default function AddMeeting() {
  document.title = "Add meeting";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [suggestionCustomer, setSuggestionCustomer] = useState([]);
  const [suggestionDoctor, setSuggestionDoctor] = useState([]);
  const [suggestionHospital, setSuggestioHospital] = useState([]);

  const [customerValue , setCustomerValue] = useState('')
  const [doctorValue , setDoctorValue] = useState('')
  const [hospitalValue , setHospitalValue] = useState('')

  async function Submit(data) {
    await console.log(data);
  }

  const customersuggestionSelected = value => {
    setCustomerValue(value)
    setSuggestionCustomer([])
  }
  const doctorsuggestionSelected = value => {
    setDoctorValue(value)
    setSuggestionDoctor([])
  }
  const hospitalsuggestionSelected = value => {
    setHospitalValue(value)
    setSuggestioHospital([])
  }
  return (
    <div>
      <Link to="/meetings">
        <i className="bx bx-arrow-back back"></i>
      </Link>
      <div className="add_cus">
        <h1 className="titel">New Meeting</h1>
        <form action="" className="newCustomer" onSubmit={handleSubmit(Submit)}>
          <div className="Item">
            <label htmlFor="">Customer :</label>
            <input
              value = {customerValue}
              type="text"
              placeholder="name of customer"
              required
              autoComplete="off"
              {...register("Customer", { required: true, maxLength: 8 })}
              onChange={(e) => {
                setSuggestionCustomer(e.target.value);
                setCustomerValue(e.target.value);
              }}
            />
            {errors.Customer && errors.Customer.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 8 caracteres</p>
              </span>
            )}

            <ul className="listSuggestion">
              {customerList
                .filter((val) => {
                  if (suggestionCustomer.length === 0) {
                    return null;
                  } else if (
                    val.name
                      .toString()
                      .toLowerCase()
                      .includes(suggestionCustomer.toString().toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => {
                  return <li onClick = {() => customersuggestionSelected(item.name)}>{item.name}</li>;
                })}
            </ul>
          </div>
          <div className="Item">
            <label htmlFor="">Doctor :</label>
            <input
              type="text"
              value = {doctorValue}
              placeholder="name of doctor"
              autoComplete="off"
              required
              {...register("Doctor", { required: true, maxLength: 30 })}
              onChange={(e) => {
                setSuggestionDoctor(e.target.value);
                setDoctorValue(e.target.value);
              }}
            />
            {errors.Doctor && errors.Doctor.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 30 caracteres</p>
              </span>
            )}
            <ul className="listSuggestion">
              {dcotorsList
                .filter((val) => {
                  if (suggestionDoctor.length === 0) {
                    return null;
                  } else if (
                    val.name
                      .toString()
                      .toLowerCase()
                      .includes(suggestionDoctor.toString().toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => {
                  return <li onClick = {() => doctorsuggestionSelected(item.name)}>{item.name}</li>;
                })}
            </ul>
          </div>
          <div className="Item">
            <label htmlFor="">Hospital :</label>
            <input
              value = {hospitalValue}
              type="text"
              placeholder="name of hospital"
              {...register("Hospital", { required: true, maxLength: 30 })}
              onChange={(e) => {
                setSuggestioHospital(e.target.value);
                setHospitalValue(e.target.value)
              }}
            />
            {errors.Hospital && errors.Hospital.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 30 caracteres</p>
              </span>
            )}
            <ul className="listSuggestion">
              {hospitalsList
                .filter((val) => {
                  if (suggestionHospital.length === 0) {
                    return null;
                  } else if (
                    val.name
                      .toString()
                      .toLowerCase()
                      .includes(suggestionHospital.toString().toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => {
                  return <li onClick = {() => hospitalsuggestionSelected(item.name)}>{item.name}</li>;
                })}
            </ul>
          </div>
          <div className="Item btm">
            <label htmlFor="">Date :</label>
            <input
              type="date"
              placeholder="06 XX XX XX XX"
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
          <div className="Item btm">
            <label htmlFor="">Time :</label>
            <input
              type="text"
              placeholder="time of the meeting"
              required
              {...register("Time", { required: true, maxLength: 30 })}
            />
            {errors.Time && errors.Time.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 30 caracteres</p>
              </span>
            )}
          </div>

          <button className="btnInsert">Create</button>
        </form>
      </div>
    </div>
  );
}
