import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
const Container = styled.div`
  height: 90vh;
  padding: 0px 75px;
  background-color: black;
  position: absolute;
  top: 20vh;
  left: 150px;
  background: transparent;
`;
const Discover = styled.div`
  width: 70vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    margin: 0px;
    padding: 0px;
    font-weight: 900;
    font-size: 70px;
    color: white;
    width: 900px;
    letter-spacing: 1.5px;
    b {
      font-weight: 900;
      font-size: 99px;
      background: -webkit-linear-gradient(#9602bb, #8c00ff, #6942ef);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 70px;
    }
  }
  div:nth-child(2) {
    font-size: 90px;
  }
  div:nth-child(3) {
    font-size: 80px;
  }
`;
const Button = styled.button`
  margin-top: 40px;
  height: 60px;
  width: 160px;
  padding: 10px;
  font-size: 25px;
  text-transform: uppercase;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(
    90deg,
    #7700ff,
    #7a07e6,
    #cd28ff,
    #0059ff,
    #c300ff,
    #f82cf8
  );
  background-size: 400%;
  background-position: 0% 0%;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 26px;
    background-image: linear-gradient(
      90deg,
      #7700ff,
      #7a07e6,
      #cd28ff,
      #0059ff,
      #c300ff,
      #f82cf8
    );
    background-size: 500%;
    background-position: 0% 0%;
    filter: blur(10px);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s;
  }
  &:hover {
    animation: gradientRotate 2s infinite;
    &::before {
      opacity: 1;
      animation: gradientRotate 2s infinite;
    }
    transform: scale(1.01);
  }
  &:active {
    color: #c3c4d5;
  }

  &:focus {
    &::before {
      opacity: 1;
    }
  }
  @keyframes gradientRotate {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;

const Start = styled.button`
  margin-top: 40px;
  height: 70px;
  width: 260px;
  padding: 15px;
  font-size: 28px;
  text-transform: uppercase;
  border-radius: 50px;
  border: none;
  background-color: #7c17a8;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(
    90deg,
    #7700ff,
    #7a07e6,
    #cd28ff,
    #0059ff,
    #c300ff,
    #f82cf8
  );
  background-size: 400%;
  background-position: 0% 0%;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 26px;
    background-image: linear-gradient(
      90deg,
      #7700ff,
      #7a07e6,
      #cd28ff,
      #0059ff,
      #c300ff,
      #f82cf8
    );
    background-size: 500%;
    background-position: 0% 0%;
    filter: blur(10px);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s;
  }
  &:hover {
    animation: gradientRotate 2s infinite;
    &::before {
      opacity: 1;
      animation: gradientRotate 2s infinite;
    }
    transform: scale(1.01);
  }
  &:active {
    color: #c3c4d5;
  }

  &:focus {
    &::before {
      opacity: 1;
    }
  }
  @keyframes gradientRotate {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
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
        <div>
          Joining <b>WEB 3.0</b>
        </div>
        <div>
          taking{" "}
          <Typewriter
            words={["", "Sh"]}
            loop={Infinity}
            typeSpeed={120}
            deleteSpeed={100}
            delaySpeed={5000}
          />
          it{" "}
        </div>
        <div>To next level</div>
        {isActive ? (
          <Start onClick={() => setIsActive(false)}>Get Started</Start>
        ) : (
          <Bcontainer>
            <Button onClick={() => navigate("/signin")}>Log In</Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </Bcontainer>
        )}
      </Discover>
    </Container>
  );
};
export default Homepage;
