import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputForm from "./input/inputfield.js";
const Container = styled.div`
  background-image: linear-gradient(to bottom right, #7903ab, #cf39cb);
  width: 70vw;
  height: 88h;
  margin: auto;
  margin-top: 20px;
  border-radius: 50px;
  diplay: flex;
  align-items: center;
  form {
    diplay: flex;
    flex-direction: column;
    padding: 30px;
  
    h1 {
      font-size: 45px;
      margin: 0px;
      padding: 0px;
      font-weight: 1000;
    }
    h3 {
      font-size: 20px;
      margin: 0px;
      padding: 0px;
      font-weight: 500;
      letter-spacing: 2;
    }
    p {
      font-size: 20px;

      padding: 0px;
      font-weight: 600;
    }
  }
`;
const Button = styled.button`
  height: 53px;
  width: 200px;
  background-color: #b300ff;
  border-radius: 50px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

const Login = () => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  });
  const { email, password, confirmPassword, displayName } = userCredential;
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("am submited");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name);
   
    setUserCredential({ ...userCredential, [name]: value });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <h3>Create a new account</h3>
        <InputForm
          type="name"
          name="displayName"
          value={displayName}
          label="UserName"
          handleChange={handleChange}
        />
        <InputForm
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
        />
        <InputForm
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
        />
         <InputForm
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm password"
          handleChange={handleChange}
        />
        <p>
          Alredy have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#FB0000", textDecoration: "none" }}
          >
          Login
          </Link>
        </p>
        <Button>SIGN UP</Button>
      </form>
    </Container>
  );
};
export default Login;
