import React, { useEffect,useState } from "react";
import "./Signin.css";
import { motion } from "framer-motion";
import { Link ,useNavigate} from "react-router-dom";
import { emailSigninStart } from "../../redux/user/user-action";
import lava1 from "../../assets/lava1.jpg";
// import { Formik, Form } from "formik";
// import { TextField } from "./TextField";
// import * as Yup from "yup";
const SignIn = () => {
  const variants = {
    in: { opacity: 1, x: "0%" },
    out: { opacity: 0, x: "100%" },
  };

  // const [userCredentials, setUserCredentials] = useState();
  const [formValues, setFormValues] = useState({ username: "",password: ""});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
   const {username,password}=formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(username,password);
      emailSigninStart(username, password);
      navigate('/scout');
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
   
    if (!values.username) {
      errors.username = "username is required!";
    } 
    // else if (!regex.test(values.email)) {
    //   errors.username = "This is not a valid email format!";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  
  // const { email, password } = userCredentials;
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   emailSigninStart(email, password);
  // };

  // const handleChange = (e) => {
  //   const { value, name } = e.target;
  //   setUserCredentials({ ...userCredentials, [name]: value });
  // };

}


const navigate=useNavigate();

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.9 }}
    >
      <div className="SignIn__main">
        <div className="SignIn__card">
          <div className="SignIn__leftCont">
            <h2>Sign In</h2>

            <form className="SignIn__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="SignIn__neumorphicInput"
                placeholder="username"
                name="username"
                onChange={handleChange}
              />
               <p>{formErrors.username}</p>
              
              <input
                type="password"
                className="SignIn__neumorphicInput"
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
               <p>{formErrors.password}</p>
               <Link  style={{textAlign:"right",color:"white",width:"95%",cursor:"pointer",textDecoration:"none",fontSize:'20px'}} to={"/Reset"}> Forgot password ?</Link>
             
            </form>

            <button className="SignIn__gradientBtn" onClick={handleSubmit}>
              Proceed
            </button>

            <p className="SignIn__grayText">
              New to Krpal?{" "}
              <br/>
              <Link className="SignIn__link" to="/signup">
                Create your account
              </Link>
            </p>
          </div>

          <div
            className="SignIn__rightCont"
            style={{ backgroundImage: "url('" + lava1 + "')" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;
