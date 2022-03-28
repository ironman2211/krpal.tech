import Homepage from "./components/homepage/homepage.js";
import Login from "./components/signIn/Signin.js";
import Signup from "./components/signup/signUp.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import {AnimatePresence} from "framer-motion"
function App() {
  return (
    <div className="app">
      
     <AnimatePresence  exitBeforeEnter>
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
