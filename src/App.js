import Header from "./components/Header.js";
import Homepage from "./components/homepage.js";
import Login from "./components/signIn/Signin.js";
import Signup from "./components/signup/signUp.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components'

const Blob = styled.div`
  overflow:hidden;
  border-radius: 46% 54% 42% 58% / 58% 62% 38% 42% !important;
  animation: move 10s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  transform-origin: center;
  background-color:#EF03E8;
  height: 350px;
  width: 350px;
  z-index: 2;
  transition: all 0.3s;
  filter: blur(50px);
  // box-shadow: rgba(253,22,248,1) 0px 19px 38px, rgba(253,22,248,1) 0px 15px 12px;

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -10px) rotate(0deg);
    
    }
    38% {
      transform: scale(0.8, 1) translate(100vw, 30vh) rotate(85deg);
     
    }
    40% {
      transform: scale(0.8, 1) translate(100vw, 30vh) rotate(90deg);
     
    }
    78% {
      transform: scale(1) translate(10vw, 30vh) rotate(175deg);
     
    }
    80% {
      transform: scale(1) translate(10vw, 30vh) rotate(180deg);
      
    }
    100% {
      transform: scale(1) translate(10px, -10px) rotate(360deg);
      
  }
  }
`;


const Blob2 = styled.div`
 
  overflow:hidden;
  border-radius: 46% 54% 42% 58% / 58% 62% 38% 42% !important;
  animation: rotate 10s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  transform-origin: center;
  margin-left:100px;

  background-color:#7C17A8;
  height: 350px;
  width: 350px;
  z-index: 2;
  transition: all 0.3s;
  filter: blur(50px);
  // box-shadow: rgba(253,22,248,1) 0px 19px 38px, rgba(253,22,248,1) 0px 15px 12px;
  
  @keyframes rotate {
    0% {
      transform: scale(1) translate(-10px, 10px) rotate(0deg);
    
    }
    38% {
      transform: scale(0.8, 1) translate(70vw, -30vh) rotate(85deg);
     
    }
    40% {
      transform: scale(0.8, 1) translate(70vw, -30vh) rotate(90deg);
      
    }
    78% {
      transform: scale(1.2) translate(10vw, -30vh) rotate(175deg);
     
    }
    80% {
      transform: scale(1.2) translate(10vw, -30vh) rotate(180deg);
      
    }
    100% {
      transform: scale(1) translate(-10px, 10px) rotate(360deg);
      
  }
  }
`;

function App() {
  return (
    <div className="app">
       <Blob />
       <Blob2/>
      <Header></Header>
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
