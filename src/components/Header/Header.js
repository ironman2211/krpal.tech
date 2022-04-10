import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Logo = styled.div`
  height: 40px;
  width: 50px;
  margin: 2px 15px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  margin-bottom: 2px;
`;
const Title = styled.span`
  font-size: 25px;
  letter-spacing: 2px;
`;
const Subtitle = styled.span`
  font-size: 8px;
  letter-spacing: 1px;
`;
const LOGOCONT=styled.div`
display:flex;

cursor:pointer;
`
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
  const navigate=useNavigate();
  return (
    <header className="Header__main">
      <div className="Header__left">
        <div
          className={`Header__hamburger${hamburgerOpen ? " open" : ""}`}
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        < LOGOCONT onClick={()=>navigate('/')}>
          <Logo >
            <img src="/images/krapal.png" alt="logo"></img>
          </Logo>

          <Description>
          
            <Title>K R P A L</Title>
            <Subtitle>WHERE YOU'RE IN CONTROL</Subtitle>
            
          </Description>
        </LOGOCONT>
        <ul className="Header__navList">
          <li>
            <Link to="/scout">Scout</Link>
          </li>
          <li>
            <Link to="/following">Following</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>

      {/* <div className="Header__right">
        <p>Every word contains value</p>
      </div> */}

      <Sidebar isOpen={hamburgerOpen} />
    </header>
  );
}
