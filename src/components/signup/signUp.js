import React from 'react';
import "./signup.css";

import { Link } from 'react-router-dom';

const SignUp=()=> {
    return (
       
            <div className="SignUp__main">

                <div className="SignUp__middleCont">
                    <h2>Make Profile</h2>

                    <div className="SignUp__connectWallet">
                        <p className="SignUp__gradientText">Connect your wallet</p>
                        <button className="SignUp__gradientBtn">Connect</button>
                    </div>

                    <form className="SignUp__form">
                        <input type="text" className="SignUp__neumorphicInput" placeholder="Username" />
                        <input type="password" className="SignUp__neumorphicInput" placeholder="Password" />
                        <input type="password" className="SignUp__neumorphicInput" placeholder="Confirm Password" />
                    </form>

                    <button className="SignUp__gradientBtn">Proceed</button>

                    <p className="SignUp__grayText">Already have an account? <Link className="SignUp__link" to="/signin">Sign In</Link></p>
                </div>

            </div>
       
    )
}
export default SignUp;