import Header from "./components/Header.js";
import Homepage from "./components/homepage.js";
import Login from "./components/login.js";
import Signup from "./components/Signin.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
     

      <Header></Header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
