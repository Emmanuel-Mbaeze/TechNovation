import React from "react";
import styled from "styled-components";

import { GoThreeBars, GoLocation } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import { FiMap } from "react-icons/fi";

const About = () => {
  return (
    <Container>
      <Cont>
        <Circle>
          <IoIosRibbon fontSize="35px" cursor="pointer" color="orange" />
        </Circle>
        <Write>Free Shipping</Write>
        <Info>
          {" "}
          Free Shipping for all products within Lagos and above fifty Thousand
          Naira
        </Info>
      </Cont>
      <Cont>
        <Circle>
          <BsCreditCard fontSize="35px" cursor="pointer" color="orange" />
        </Circle>
        <Write>Flexible Payment</Write>
        <Info>Payment can be done with multiple credit cards </Info>
      </Cont>

      <Cont>
        <Circle>
          <FaRegCalendarAlt fontSize="35px" cursor="pointer" color="orange" />
        </Circle>
        <Write>Online Support</Write>
        <Info>You can reach us 24/7 Within days for an exchange</Info>
      </Cont>
    </Container>
  );
};

export default About;
// const Cont = styled.div``
const Info = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  font-family: poppins;
`;
const Write = styled.div`
  text-align: center;
  color: orange;
  text-transform: uppercase;
  font-weight: bold;
  font-family: poppins;
`;
const Circle = styled.div`
  width: 90px;
  height: 90px;
  border: 1.5px solid orange;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Cont = styled.div`
  width: 320px;
  height: 200px;
  /* background-color: lightslategray; */
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
