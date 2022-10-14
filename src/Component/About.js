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
      <Top>
        <Title>
          Why Choose <span>TechNovation</span>
        </Title>
        <Line></Line>
        <Pos>
          <FiMap color="grey" fontSize="25px" cursor="pointer" />
        </Pos>
        <Text>
          Because our digital story started with our dreams integrated manually.
        </Text>
      </Top>
      <Events>
        <Cont>
          <Circle>
            <IoIosRibbon fontSize="35px" cursor="pointer" color="orange" />
          </Circle>
          <Write>Event ManageMent</Write>
          <Info>
            {" "}
            Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
            te zril urbanitas scribentur.
          </Info>
        </Cont>
        <Cont>
          <Circle>
            <BsCreditCard fontSize="35px" cursor="pointer" color="orange" />
          </Circle>
          <Write>Payement Gateways</Write>
          <Info>
            {" "}
            Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
            te zril urbanitas scribentur.
          </Info>
        </Cont>
        <Cont>
          <Circle>
            <GoThreeBars fontSize="35px" cursor="pointer" color="orange" />
          </Circle>
          <Write>Theme Customizer</Write>
          <Info>
            {" "}
            Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
            te zril urbanitas scribentur.
          </Info>
        </Cont>
        <Cont>
          <Circle>
            <FaRegCalendarAlt fontSize="35px" cursor="pointer" color="orange" />
          </Circle>
          <Write>Multiple Events</Write>
          <Info>
            {" "}
            Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
            te zril urbanitas scribentur.
          </Info>
        </Cont>
      </Events>
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
  min-height: 70vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Top = styled.div`
  width: 90%;
  /* background-color: lightslategray; */
  @media (max-width: 375px) {
    height: 155px;
  }
  height: 120px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 29px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  @media (max-width: 375px) {
    width: 70%;
  }
  span {
    color: orange;
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
  background-color: white;
  position: absolute;
  bottom: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    top: 84px;
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

const Events = styled.div`
  width: 100%;
  min-height: 520px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
