import React, { useState } from "react";
import "./Reset.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import lava1 from "../../assets/lava1.jpg";
const Reset = () => {
  const variants = {
    in: { opacity: 1, x: "0%" },
    out: { opacity: 0, x: "-100%" },
  };

  // const [userCredentials, setUserCredentials] = useState();
  const [formValues, setFormValues] = useState({ email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { email } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    handleAction(email)
  };
  const handleAction=(email)=>{
    
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //do rdux action hear
      console.log(email)
    }
  }

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "email or username is required!";
    }
    return errors;
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.9 }}
    >
      <div className="Reset__main">
        <div className="Reset__card">
          <div className="Reset__leftCont">
            <Link
              to="/signin"
              style={{
                textAlign: "left",
                color: "white",
                width: "85%",
                cursor: "pointer",
                fontSize: "18px",
                textDecoration: "none",
                marginTop:"30px",
               
              }}
            >
              <div
              className="hover_back"
              style={{
                display:"flex",
                alignItems:"center",
                gap:' 5px'
                
              }}>
                <svg
                  style={{
                    textAlign: "left",
                    color: "white",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    fontSize: "18px",
                    textDecoration: "none",
                   
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>{" "}
                BACK
              </div>
            </Link>

            <h2>Forgot Password</h2>

            <form className="Reset__form" onSubmit={handleSubmit}>
              <p
               style={{
                textAlign: "center",
                color: "rgb(177, 162, 204)",
                width: "90%",
                cursor: "pointer",
                fontSize: "17px",
                textDecoration: "none",
                marginBottom:"20px",
               
              }}
              >
                Enter your email address or Username and we’ll send you instructions to
                reset your password.
              </p>

              <input
                type="text"
                className="Reset__neumorphicInput"
                placeholder="Email/Username"
                name="email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </form>

            <button className="Reset__gradientBtn" onClick={handleSubmit}>
              Reset Password
            </button>
          </div>

          <div
            className="Reset__rightCont"
            style={{ backgroundImage: "url('" + lava1 + "')" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reset;
