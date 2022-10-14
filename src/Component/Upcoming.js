import React, { Component } from "react";
import styled from "styled-components";

import { GoThreeBars, GoLocation } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMap } from "react-icons/fi";

const Upcoming = () => {
  return (
    <Container>
      <Top>
        <Title>
          Upcoming <span>Events</span>
        </Title>
        <Line></Line>
        <Pos>
          <FiMap color="grey" fontSize="25px" cursor="pointer" />
        </Pos>
        <Text>
          Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
          te zril urbanitas{" "}
        </Text>
      </Top>
    </Container>
  );
};

export default Upcoming;
const Container = styled.div`
  width: 100%;
  overflow: hidden;

  min-height: 30vh;
  background-color: white;
  /* margin-top: 50px; */
  /* background-color: rgba(0, 0, 0, 0.9); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  /* overflow: hidden; */
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
    height: 134px;
  }

  /* background-color: lightcoral; */
`;
const Title = styled.div`
  font-size: 29px;
  font-weight: 500;

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

  /* background-color: white; */

  position: absolute;
  bottom: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    top: 44px;
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
