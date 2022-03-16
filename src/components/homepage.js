import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TypeAnimation from "react-type-animation";
// import Ripples from 'react-ripples'
const Container = styled.div`
  height: 90vh;

  padding: 0px 75px;
  background-color: black;
  // background: linear-gradient(#000000, #7c17a8);
  &:after {
    color: red;
    background-color: red;
  }
`;
const Discover = styled.div`
position:absolute;
  top:10vh;
  left: 150px;
  padding-top: 70px;
  width: 60vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  z-index: 999px;

  span {
    font-weight: 900;
    font-size: 90px;
    color: white;
  }

`;
const Button = styled.button`
  height: 60px;
  width: 160px;
  padding: 10px;
  font-size: 25px;
  text-transform: uppercase;
  border-radius: 50px;
  border: none;
  background-color: #7c17a8;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    
    color: #7c17a8;
    background-color: #ffffff;
    
  }

  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;

const Start = styled.button`
  height: 70px;
  width: 260px;
  padding:15px;
  font-size:28px;
  text-transform: uppercase;
  border-radius: 50px;
  border: none;
  background-color: #7c17a8;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    
    color: #7c17a8;
    background-color: #ffffff;
    
  }
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;

const Bcontainer = styled.div`
  display: flex;
  gap: 30px;
`;

const Homepage = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  return (
    <Container>
      
      <Discover>
        <span>
          Joining WEB3 <br></br>
          Taking Shit
          <br></br> to {" "}
          <TypeAnimation
            cursor={false}
            sequence={["next level", 1000, ""]}
            wrapper="span"
            repeat={Infinity}
        
          />
        </span>
        {isActive ? (
          
          <Start onClick={() => setIsActive(false)}>Get Started</Start>
         
        ) : (
          <Bcontainer>
           
            <Button onClick={() => navigate("/login")}>Log In</Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
         
          </Bcontainer>
        )}
      </Discover>
    </Container>
  );
};
export default Homepage;
