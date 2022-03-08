import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 90vh;
  position: relative;
  padding: 0px 75px;
  background-color:black;
  // background: linear-gradient(#000000, #7c17a8);
  &:after {
    color: red;
    background-color: red;
  }
`;
const Discover = styled.div`
  position: absolute;
  top: 30px;
  left:65px;
  padding-top: 70px;
  width: 60vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  z-index: 999px;
  
  span {
    font-weight: 900;
    font-size: 65px;
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
`;
const Blob = styled.div`
  // position:fixed;
  border-radius: 46% 54% 42% 58% / 58% 62% 38% 42% !important;
  animation: move 20s cubic-bezier(0.42,0,0.58,1) infinite;
  transform-origin: center;
  // position: absolute;
  bottom: -300px;
  left: 0px;
  background-color: #ef03e8;
  height: 700px;
  width: 800px;
  z-index: 6;
  transition:all 0.3s;
filter:blur(200px);
  @keyframes move {
    0% {
      transform: scale(1) translate(10px, 100px) rotate(0deg);
      background-color: #900493;
    }
    38% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(85deg);
      background-color: #7C17A8;
    }
    40% {
      transform: scale(0.8, 1) translate(80vw, 30vh) rotate(90deg);
      background-color: #900493;
    }
    78% {
      transform: scale(1.3) translate(0vw, 40vh) rotate(175deg);
      background-color: #7C17A8;
    }
    80% {
      transform: scale(1.3) translate(0vw, 40vh) rotate(180deg);
      background-color: #900493;
    }
    100% {
      transform: scale(1) translate(10px, 80px) rotate(360deg);
      background-color: #7C17A8;
    }
  }
`;
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Blob />
      <Discover>
        <span>
          Krpal is a Web3.0 platform based on the blockchain where people can
          freely express their thoughts
        </span>
        <Button onClick={() => navigate("/login")}>Log In</Button>
      </Discover>
    </Container>
  );
};
export default Homepage;
