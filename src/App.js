import Header from "./components/Header.js";
import Homepage from "./components/homepage.js";
import Login from "./components/login.js";
import Signup from "./components/signUp.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'

const Blob = styled.div`
overflow:hidden;
  border-radius: 46% 54% 42% 58% / 58% 62% 38% 42% !important;
  animation: move 10s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  transform-origin: center;
  background-image:linear-gradient(90deg, rgba(147,20,237,1) , rgba(253,22,248,1) 92%);
  height: 500px;
  width: 600px;
  z-index: 6;
  transition: all 0.3s;
  filter: blur(100px);
  // box-shadow: rgba(253,22,248,1) 0px 19px 38px, rgba(253,22,248,1) 0px 15px 12px;

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, 100px) rotate(0deg);
    
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(85deg);
     
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(90deg);
      background-color: #900493;
    }
    78% {
      transform: scale(1.3) translate(0vw, 40vh) rotate(175deg);
     
    }
    80% {
      transform: scale(1.3) translate(0vw, 40vh) rotate(180deg);
      
    }
    100% {
      transform: scale(1) translate(10px, 80px) rotate(360deg);
      
  }
  }
`;
function App() {
  return (
    <div className="app">
      <Header></Header>
      <Blob />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
