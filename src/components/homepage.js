import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 90vh;

  padding: 0px 75px;

  background: linear-gradient(#000000, #7c17a8);
`;
const Discover = styled.div`
  padding-top: 70px;
  width: 60vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 50px;
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

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Container>
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
