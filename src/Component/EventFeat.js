import React from "react";
import styled from "styled-components";

import { GoThreeBars, GoLocation } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import { FiMap } from "react-icons/fi";

const EventFeat = () => {
  return (
    <Container>
      <Top>
        <Title>
          Featured <span>Events</span>
        </Title>
        <Line></Line>
        <Pos>
          <IoIosRibbon color="grey" fontSize="25px" cursor="pointer" />
        </Pos>
        <Text>
          Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
          te zril urbanitas{" "}
        </Text>
      </Top>
      <Events>
        <Card>
          <Image>
            <img src="/images/E1.jpg" alt="image" />
          </Image>
          <Info>
            <One>Technovation Conference</One>
            <Two>
              <Twos>
                <Btn>Technology</Btn>
                <Date>
                  <FaRegCalendarAlt
                    color="orange"
                    fontSize="17px"
                    cursor="pointer"
                  />
                  <Time> July 17,2022</Time>
                </Date>
              </Twos>
            </Two>
            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
            <Four>
              <Fours>
                {" "}
                <SDate>
                  <GiSandsOfTime
                    color="orange"
                    fontSize="17px"
                    cursor="pointer"
                  />
                  <STime>Expired</STime>
                </SDate>
                <SDate>
                  <GoLocation fontSize="15px" cursor="pointer" color="orange" />
                  <STime>Lagos</STime>
                </SDate>
                <SDate>
                  <BsCreditCard
                    fontSize="15px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>Free</STime>
                </SDate>
              </Fours>
            </Four>
          </Info>
        </Card>
        <Card>
          <Image>
            <img src="/images/E2.jpg" alt="image" />
          </Image>
          <Info>
            <One>Pitching of ideas</One>
            <Two>
              <Twos>
                <Btn>Business</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time> April 01,2023</Time>
                </Date>
              </Twos>
            </Two>
            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
            <Four>
              <Fours>
                {" "}
                <SDate>
                  <GiSandsOfTime
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>Upcoming</STime>
                </SDate>
                <SDate>
                  <GoLocation fontSize="15px" cursor="pointer" color="orange" />
                  <STime>Abuja</STime>
                </SDate>
                <SDate>
                  <BsCreditCard
                    fontSize="15px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>#10,00</STime>
                </SDate>
              </Fours>
            </Four>
          </Info>
        </Card>
        <Card>
          <Image>
            <img src="/images/E3.jpg" alt="image" />
          </Image>
          <Info>
            <One>Picnic At The Beach</One>
            <Two>
              <Twos>
                <Btn>Picnic</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time>October 3,2022</Time>
                </Date>
              </Twos>
            </Two>
            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
            <Four>
              <Fours>
                {" "}
                <SDate>
                  <GiSandsOfTime
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>Ongoing</STime>
                </SDate>
                <SDate>
                  <GoLocation fontSize="15px" cursor="pointer" color="orange" />
                  <STime>Lagos</STime>
                </SDate>
                <SDate>
                  <BsCreditCard
                    fontSize="15px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>#9,500</STime>
                </SDate>
              </Fours>
            </Four>
          </Info>
        </Card>
        <Card>
          <Image>
            <img src="/images/E6.jpg" alt="image" />
          </Image>
          <Info>
            <One>Dinner Party</One>
            <Two>
              <Twos>
                <Btn>Festival</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time> January 28,2023</Time>
                </Date>
              </Twos>
            </Two>
            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
            <Four>
              <Fours>
                {" "}
                <SDate>
                  <GiSandsOfTime
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime> Upcoming</STime>
                </SDate>
                <SDate>
                  <GoLocation fontSize="15px" cursor="pointer" color="orange" />
                  <STime>Calabar</STime>
                </SDate>
                <SDate>
                  <BsCreditCard
                    fontSize="15px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>#5,000</STime>
                </SDate>
              </Fours>
            </Four>
          </Info>
        </Card>
        <Card>
          <Image>
            <img src="/images/B1.jpg" alt="image" />
          </Image>
          <Info>
            <One>Dinner Party</One>
            <Two>
              <Twos>
                <Btn>Festival</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time> January 28,2023</Time>
                </Date>
              </Twos>
            </Two>
            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
            <Four>
              <Fours>
                {" "}
                <SDate>
                  <GiSandsOfTime
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime> Upcoming</STime>
                </SDate>
                <SDate>
                  <GoLocation fontSize="15px" cursor="pointer" color="orange" />
                  <STime>Calabar</STime>
                </SDate>
                <SDate>
                  <BsCreditCard
                    fontSize="15px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>#5,000</STime>
                </SDate>
              </Fours>
            </Four>
          </Info>
        </Card>
        <Card>
          <Image>
            <img src="/images/3.jpg" alt="image" />
          </Image>
          <Info>
            <One>Dinner Party</One>
            <Two>
              <Twos>
                <Btn>Festival</Btn>
                <Date>
                  <FaRegCalendarAlt
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <Time> January 28,2023</Time>
                </Date>
              </Twos>
            </Two>
            <Three>
              Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec,
              vis te zril urbanitas scribentur. In utamur impedit feugait nec,
              ex putent alienum est. Nam tantas latine admodum at, ea etiam
              nobis pri.
            </Three>
            <Four>
              <Fours>
                {" "}
                <SDate>
                  <GiSandsOfTime
                    fontSize="17px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime> Upcoming</STime>
                </SDate>
                <SDate>
                  <GoLocation fontSize="15px" cursor="pointer" color="orange" />
                  <STime>Calabar</STime>
                </SDate>
                <SDate>
                  <BsCreditCard
                    fontSize="15px"
                    cursor="pointer"
                    color="orange"
                  />
                  <STime>#5,000</STime>
                </SDate>
              </Fours>
            </Four>
          </Info>
        </Card>
      </Events>
    </Container>
  );
};

export default EventFeat;
const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
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
  background-color: grey;
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
  border-radius: 5px;
  width: 360px;
  height: 450px;
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

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  height: 220px;
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
`;
const Two = styled.div`
  display: flex;
  /* background-color: red; */
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
const SDate = styled.div`
  /* background-color: rebeccapurple; */
  min-width: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Time = styled.div`
  font-size: 15px;
  font-family: poppins;
  font-weight: lighter;
  min-width: 100px;
  /* background-color: red; */
`;
const STime = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: lighter;
  min-width: 70px;
  margin-left: 5px;
  /* background-color: red; */
`;
const Three = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: 500;
  text-align: start;
  width: 95%;
`;
const Four = styled.div`
  display: flex;

  width: 95%;
  justify-content: flex-start;
  align-items: center;
`;
const Fours = styled.div`
  display: flex;
  width: 285px;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;
// const Cont = styled.div``
