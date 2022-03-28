import React from "react";
import "./signup.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import lava1 from "../../assets/lava1.jpg";

export default function SignUp() {
  const variants = {
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: "-100%" },
  };

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

            <form className="SignUp__form">
              <input
                type="text"
                className="SignUp__neumorphicInput"
                placeholder="Email"
              />
              <input
                type="text"
                className="SignUp__neumorphicInput"
                placeholder="Username"
              />
              <div className="SignUp__flexRowBetween">
                <input
                  type="password"
                  className="SignUp__neumorphicInput"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="SignUp__neumorphicInput"
                  placeholder="Repeat Password"
                />
              </div>
            </form>

            <button className="SignUp__gradientBtn">Proceed</button>

            <p className="SignUp__grayText">
              Already have an account?{" "}
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
