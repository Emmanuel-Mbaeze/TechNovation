import React from "react";
import styled from "styled-components";

import { GoThreeBars, GoLocation } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import { FiMap } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <Container>
      <Top>
        <Title>NewsLetter</Title>
        <Line></Line>
        <Pos>
          <FiMap color="grey" fontSize="25px" cursor="pointer" />
        </Pos>
        <Text>Join Our e-newsletter list to follow closely all news.</Text>
      </Top>
      <Events>
        <Form>
          <Name>
            <GoThreeBars color="orange" fontSize="20px" cursor="pointer" />
            <input placeholder="Enter Your Name" />
          </Name>
          <Name>
            <BsCreditCard color="orange" fontSize="20px" cursor="pointer" />
            <input placeholder="Enter email address" />
          </Name>
          <Button>Submit</Button>
        </Form>
      </Events>
    </Container>
  );
};

export default NewsLetter;
// const Container = styled.div``
const Button = styled.button`
  background-color: orange;
  border: 0;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  font-family: poppins;
  color: white;
  width: 91%;
  height: 35px;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
`;
const Name = styled.div`
  width: 90%;
  height: 35px;
  border: 1.5px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding-left: 5px;
  border-radius: 3px;

  input {
    flex: 1;
    /* display: flex; */
    height: 95%;
    background-color: transparent;
    padding-left: 10px;
    border: 0;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    font-family: poppins;
    color: white;
  }
`;
const Form = styled.div`
  width: 80%;
  height: 150px;
  // background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Events = styled.div`
  width: 100%;
  min-height: 230px;
  margin-top: 15px;
  /* background-color: #191919; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  background-color: #000;
  // background-image: url("/images/B2.jpg");
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  /* opacity: 0.8; */

  /* background-color: #191919; */

  margin-top: 50px;
  /* background-color: rgba(0, 0, 0, 0.9); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* flex-wrap: wrap; */
`;
const Top = styled.div`
  width: 90%;
  height: 120px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 375px) {
    height: 130px;
  }

  /* background-color: lightcoral; */
`;
const Title = styled.div`
  font-size: 29px;
  font-weight: 500;

  span {
    color: orangered;
  }
`;
const Line = styled.div`
  width: 95%;
  height: 1px;
  background-color: darkgrey;
`;

const Pos = styled.div`
  width: 100px;
  height: 40px;
  background-color: black;
  position: absolute;
  bottom: 31px;
  display: flex;
  //   opacity: 0;

  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    top: 50px;
    height: 25px;
  }
  @media (max-width: 425px) {
    bottom: 41px;
  }
`;
const Text = styled.div`
  font-size: large;
  font-family: poppins;
  font-weight: 500;
  text-align: center;
`;
