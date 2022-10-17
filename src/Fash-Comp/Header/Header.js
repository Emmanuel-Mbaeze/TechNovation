import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import BarMenu from "./BarMenu";

const Header = () => {
  const [close, setClose] = useState(false);
  const [close1, setClose1] = useState(false);
  const [bar, setBar] = useState(false);
  return (
    <>
      {" "}
      <Container>
        <Wrapper>
          <Navs>
            <Nav
              onMouseOver={() => {
                setClose(true);
              }}
              onMouseLeave={() => {
                setClose(false);
              }}
            >
              {close ? (
                <div>
                  <Menu1 />
                </div>
              ) : null}
              Men
            </Nav>
            <Nav
              onMouseOver={() => {
                setClose1(true);
              }}
              onMouseLeave={() => {
                setClose1(false);
              }}
            >
              {close1 ? (
                <div>
                  <Menu2 />
                </div>
              ) : null}
              Women
            </Nav>
            <Nav>Contact</Nav>
          </Navs>
          <Logo src="logo192.png" alt="" />
        </Wrapper>
        <Hold>
          {bar ? (
            <BsThreeDots
              size={"25px"}
              onClick={() => {
                setBar(false);
              }}
            />
          ) : (
            <BsThreeDotsVertical
              size={"25px"}
              onClick={() => {
                setBar(true);
              }}
            />
          )}
        </Hold>
      </Container>
      {bar ? <BarMenu /> : null}
    </>
  );
};

export default Header;
const Hold = styled.div`
  width: 30px;
  /* background: blue; */
  display: none;
  margin-left: 200px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 425px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 320px) {
    margin-right: 20px;
  }
`;
const Nav = styled.div`
  height: 68px;
  width: 70px;
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  @media screen and (max-width: 375px) {
    margin-left: -40px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
  }
`;
const Navs = styled.div`
  width: 250px;
  /* background: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  /* background: red; */
  justify-content: space-between;
  margin-left: 80px;

  @media screen and (max-width: 320px) {
    margin: 0;
  }
`;
const Container = styled.div`
  width: 100% auto;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: lightgrey;
  font-family: poppins;
`;
