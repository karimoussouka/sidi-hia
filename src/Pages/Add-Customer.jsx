import "./style.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function AddCustomer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function Submit(data) {
    await console.log(data);
  }

  return (
    <div>
      <Link to="/sidi-hia/customers">
        <i className="bx bx-arrow-back back"></i>
      </Link>
      <div className="add_cus">
        <h1 className="titel">New Customer</h1>
        <form action="" className="newCustomer" onSubmit={handleSubmit(Submit)}>
          <div className="Item">
            <label htmlFor="">CIN :</label>
            <input
              type="text"
              placeholder="EE XX XX XX"
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
            <label htmlFor="">Name :</label>
            <input
              type="text"
              placeholder="put name"
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
            <label htmlFor="">E-mail :</label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              {...register("email", { required: true, maxLength: 30 })}
            />
            {errors.email && errors.email.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 30 caracteres</p>
              </span>
            )}
          </div>
          <div className="Item">
            <label htmlFor="">Phone :</label>
            <input
              type="text"
              placeholder="06 XX XX XX XX"
              required
              {...register("phone", { required: true, maxLength: 10 })}
            />
            {errors.phone && errors.phone.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 10 caracteres</p>
              </span>
            )}
          </div>
          <div className="Item">
            <label htmlFor="">Location :</label>
            <input
              type="text"
              placeholder="put location"
              required
              {...register("location", { required: true, maxLength: 30 })}
            />
            {errors.location && errors.location.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 30 caracteres</p>
              </span>
            )}
          </div>
          <div className="Item">
            <label htmlFor="">Birthday :</label>
            <input
              type="date"
              required
              {...register("birthday", { required: true, maxLength: 30 })}
            />
            {errors.birthday && errors.birthday.type === "maxLength" && (
              <span role="alert">
                {" "}
                <p style={{ color: "red" }}>Max length 30 caracteres</p>
              </span>
            )}
          </div>
          <div className="Item">
            <label htmlFor="">Gender :</label>
            <div className="Gender">
              <input
                type="radio"
                name="gender"
                id="Male"
                value="Male"
                required
                {...register("genre", { required: true, maxLength: 30 })}
              />
              {errors.genre && errors.genre.type === "maxLength" && (
                <span role="alert">
                  {" "}
                  <p style={{ color: "red" }}>Max length 30 caracteres</p>
                </span>
              )}
              <label htmlFor="Male">Male</label>
              <input
                type="radio"
                name="gender"
                id="Female"
                value="Female"
                required
                {...register("genre", { required: true, maxLength: 30 })}
              />
              {errors.genre && errors.genre.type === "maxLength" && (
                <span role="alert">
                  {" "}
                  <p style={{ color: "red" }}>Max length 30 caracteres</p>
                </span>
              )}
              <label htmlFor="Female">Female</label>
            </div>
          </div>
          <button className="btnInsert">Create</button>
        </form>
      </div>
    </div>
  );
}
