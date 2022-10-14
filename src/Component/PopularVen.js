import React, { Component } from "react";
import styled from "styled-components";

import { GoThreeBars, GoLocation } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import { FiMap } from "react-icons/fi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularVen = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <Container>
      <Top>
        <Title>
          Popular <span>Venues</span>
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
      <Events>
        {/* <Slider {...settings}> */}
        <Card>
          <Image>
            <img src="/images/E5.jpg" alt="image" />
          </Image>
          <Info>
            <Two>
              <Twos>
                <Btn>Enugu</Btn>
                <Date>
                  <FaRegCalendarAlt
                    color="orange"
                    fontSize="17px"
                    cursor="pointer"
                  />
                  <Time> Conference </Time>
                </Date>
              </Twos>
            </Two>
            <One>New Heaven </One>

            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
          </Info>
        </Card>

        <Card>
          <Image>
            <img src="/images/E9.jpg" alt="image" />
          </Image>
          <Info>
            <Two>
              <Twos>
                <Btn>Lagos</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time>Beach</Time>
                </Date>
              </Twos>
            </Two>
            <One>Elegushi Beach</One>

            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
          </Info>
        </Card>
        <Card>
          <Image>
            <img src="/images/E4.jpg" alt="image" />
          </Image>
          <Info>
            <Two>
              <Twos>
                <Btn>Calabar</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time>Nature </Time>
                </Date>
              </Twos>
            </Two>
            <One>Obudu Ranch</One>

            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
          </Info>
        </Card>
      </Events>
      {/* </Slider> */}
    </Container>
  );
};

export default PopularVen;
const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  background-color: #191919;
  margin-top: -90px;
  /* background-color: rgba(0, 0, 0, 0.9); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

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
  background-color: #191919;

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
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 5px;
  width: 360px;
  min-height: 425px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Events = styled.div`
  width: 100%;
  min-height: 520px;
  margin-top: 15px;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // background-color: red;
`;
const Image = styled.div`
  width: 100%;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Info = styled.div`
  width: 100%;
  min-height: 185px;
  /* background-color: gainsboro; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const One = styled.div`
  font-size: 20px;
  font-family: poppins;
  font-weight: bold;
  text-align: start;
  width: 95%;
  color: black;
`;
const Two = styled.div`
  display: flex;
  color: black;
  width: 95%;
  justify-content: flex-start;
  align-items: center;
`;
const Twos = styled.div`
  display: flex;
  /* background-color: rebeccapurple; */
  width: 260px;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  padding: 7px 16px;
  border: none;
  outline: none;
  background-color: orange;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
  color: white;
`;
const Date = styled.div`
  /* background-color: rebeccapurple; */
  min-width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Time = styled.div`
  font-size: 15px;
  font-family: poppins;
  font-weight: lighter;
  min-width: 100px;
  /* background-color: red; */
`;

const Three = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: 500;
  text-align: start;
  width: 95%;
  color: black;
  /* background-color: red; */
`;
