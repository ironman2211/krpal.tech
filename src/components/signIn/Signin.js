import React from 'react';
import "./Signin.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

import lava1 from "../../assets/lava1.jpg"

export default function SignIn() {

  const variants = {
    in: { opacity: 1, x: "0%" },
    out: { opacity: 0,x: "100%" },
  }
  
  
    return (
      <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.9}}
    >
        <div className="SignIn__main">

            <div className="SignIn__card">

                <div className="SignIn__leftCont">
                    <h2>Sign In</h2>


                    <form className="SignIn__form">
                        <input type="text" className="SignIn__neumorphicInput" placeholder="Username" />
                        <input type="password" className="SignIn__neumorphicInput" placeholder="Password" />
                    </form>

                    <button className="SignIn__gradientBtn">Proceed</button>

                    <p className="SignIn__grayText">New to Krpal? <Link className="SignIn__link" to="/signup">Create your account</Link></p>
                </div>


                <div className="SignIn__rightCont"
                    style={{ backgroundImage: "url('" + lava1 + "')" }}>
                </div>

            </div >
        </div >
      </motion.div>
    )
}
