import React,{useState,useEffect} from "react";
import "./signup.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import lava1 from "../../assets/lava1.jpg";
import { signUpStart } from "../../redux/user/user-action";
export default function SignUp() {
  const variants = {
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-100%" },
  };
  // const [userCredential, setUserCredential] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   displayName: "",
  // });


  // const [userCredentials, setUserCredentials] = useState();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
   const {username,confirmPassword,email,password}=formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
   
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
      console.log(username,confirmPassword,email,password);
      signUpStart(username,confirmPassword,email,password);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

      if (!values.confirmPassword ) {
        errors.confirmPassword = "confirm your password";
      }else if (values.confirmPassword !==values.password) {
        errors.confirmPassword = "Password does not match";
      }
    return errors;
  }



  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     alert("enter the same password");
  //     return;
  //   }
  //   console.log(email,password,confirmPassword,displayName)
  //   signUpStart({ email, password, displayName });
  // };
  // const handleChange = (e) => {
  //   const { value, name } = e.target;

  //   setUserCredential({ ...userCredential, [name]: value });
  // };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={variants} transition={{ duration: 0.9}}>
      <div className="SignUp__main">
        <div className="SignUp__card">
          <div className="SignUp__leftCont">
            <h2>Make Profile</h2>

            <div className="SignUp__connectWallet">
              <p className="SignUp__gradientText">Connect your wallet</p>
              <button className="SignUp__gradientBtn">Connect</button>
            </div>
    
            <form className="SignUp__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="SignUp__neumorphicInput"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
              <input
                type="text"
                className="SignUp__neumorphicInput"
                placeholder="username"
                name="username"
                onChange={handleChange}
              />
              <p>{formErrors.username}</p>
              <div className="SignUp__flexRowBetween">
                <input
                  type="password"
                  className="SignUp__neumorphicInput"
                  placeholder="Password"
                  name="password"
                onChange={handleChange}
                
                />
               
                <input
                  type="password"
                  className="SignUp__neumorphicInput"
                  placeholder="Repeat Password"
                  name="confirmPassword"
                onChange={handleChange}
                />
              </div>
              <div className="passwordValidation">
              <p>{formErrors.password}</p>  
              <p>{formErrors.confirmPassword}</p>
              </div>
              
            </form>

            <button className="SignUp__gradientBtn" onClick={handleSubmit}>Proceed</button>

            <p className="SignUp__grayText">
              Already have an account?{" "}
              <br/>
              <Link className="SignUp__link" to="/signin">
                Sign In
              </Link>
            </p>
          </div>

          <div
            className="SignUp__rightCont"
            style={{ backgroundImage: "url('" + lava1 + "')" }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
}
