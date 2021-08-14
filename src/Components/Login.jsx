import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Email = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 12px;
  border: solid 2px black;
`;
const Password = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 12px;
  border: solid 2px black;
`;
const Form = styled.form`
  width: 500px;
  height: 400px;
  margin: auto;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  height: 50px;
  width: 200px;
  border: solid 2px black;
  border-radius: 20px;
`;

const Login = () => {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((responcse) => {
      console.log(responcse);
    });
  console.log(data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form-login">
        <Email
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Email>
        <br />
        <Password
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Password>
        <br />
        <Button type="submit" disabled={!validateForm()}>
          Log In{" "}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
