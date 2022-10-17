import React from "react";
import styled from "styled-components";
import { BiCaretDown } from "react-icons/bi";

const Cover = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Stext>Clinton collection</Stext>
          <Btext>Dress For Kings And Queens</Btext>
          <Ltext>
            Made From Fine Quality fabric with Market Leading equipment
          </Ltext>
          <Btn>
            Shop Now
            <Icon>
              <BiCaretDown size={"20px"} />
            </Icon>
          </Btn>
        </Left>
        <Right>
          <img src="" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Cover;

const Icon = styled.div`
  height: 100%;
  width: 20px;
  margin-left: 5px;
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.div`
  width: 150px;
  height: 45px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 130px;
    height: 43px;
    margin-top: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
  :hover {
    background: red;
    color: white;
    transition: all 500ms;
  }
`;
const Ltext = styled.div`
  margin-bottom: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
`;
const Btext = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
  @media screen and (max-width: 320px) {
    font-size: 22px;
  }
`;
const Stext = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    font-size: 13px;
  }
`;
const Right = styled.div`
  width: 600px;
  height: 100%;
  background: blue;
  @media screen and (max-width: 768px) {
    width: 370px;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    height: 500px;
  }
  @media screen and (max-width: 375px) {
    height: 470px;
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    height: 400px;
  }
`;
const Left = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */
  @media screen and (max-width: 768px) {
    width: 370px;
    height: 100%;
  }
  @media screen and (max-width: 425px) {
    height: 300px;
  }
  @media screen and (max-width: 375px) {
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    height: 250px;
  }
`;
const Wrapper = styled.div`
  width: 1200px;
  height: 550px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 1000px;
    height: 470px;
  }
  @media screen and (max-width: 768px) {
    width: 750px;
    height: 470px;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  /* background: yellow; */
`;
