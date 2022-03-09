import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputForm from "./input/inputfield.js";
const Container = styled.div`
  background-image: linear-gradient(to bottom right, #7903ab, #cf39cb);
  width: 60vw;
  height: 65vh;
  margin: auto;
  margin-top: 50px;
  border-radius: 50px;
  diplay: flex;
  align-items: center;
  form {
    diplay: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: space-between;
    h1{
      font-size:45px;
      margin:0px;
      padding:0px;
      font-weight:1000;
    }
    h3{
      font-size:20px;
      margin:0px;
      padding:0px;
      font-weight:500;
      letter-spacing:2;
    }
    p{
      font-size:20px;
   
      padding:0px;
      font-weight:600;
      
    }
  }
`;
const Button = styled.button`
  height: 53px;
  width: 200px;
  background-color:#B300FF;
  border-radius: 50px;
  border: none;
  color: #FFFFFF;
  font-size:20px;
  font-weight:bold;
`;
const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
   
     console.log('am submited')
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name);  
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>LOG IN</h1>
        <h3>with Email and Password</h3>
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
        <p>
          Dont have an account ? <Link to="/signup"  style={{ color: '#FB0000' , textDecoration:'none'}} >signup</Link>
        </p>
        <Button>LOG IN</Button>
      </form>
    </Container>
  );
};
export default Login;
