import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="SignIn__main">
      <div className="SignIn__middleCont">
        <h2>Sign in</h2>

        <form className="SignIn__form">
          <input
            type="text"
            className="SignIn__neumorphicInput"
            placeholder="Username"
          />
          <input
            type="password"
            className="SignIn__neumorphicInput"
            placeholder="Password"
          />
        </form>

        <button className="SignIn__gradientBtn">Proceed</button>

        <p className="SignIn__grayText">
          New to Krpal?{" "}
          <Link className="SignIn__link" to="/signup">
            Create your account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
