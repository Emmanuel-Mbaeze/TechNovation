import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <Container>
      <Wrapper>
        <AllHold>
          <ImgHold></ImgHold>
          <TextHold>
            <Text>clinton Ekegbu is a good boy</Text>
            <Price>#5000</Price>
          </TextHold>
        </AllHold>
        <AllHold>
          <ImgHold></ImgHold>
          <TextHold>
            <Text>clinton Ekegbu is a good boy</Text>
            <Price>#5000</Price>
          </TextHold>
        </AllHold>
        <AllHold>
          <ImgHold></ImgHold>
          <TextHold>
            <Text>clinton Ekegbu is a good boy</Text>
            <Price>#5000</Price>
          </TextHold>
        </AllHold>
      </Wrapper>
    </Container>
  );
};

export default Body;

const Price = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: black;
  margin-left: 40px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16.5px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15.5px;
    margin: 0;
  }
  @media screen and (max-width: 325px) {
    margin: 0;
  }
  @media screen and (max-width: 320px) {
    margin: 0;
  }
`;
const Text = styled.div`
  margin-left: 20px;
  margin-top: -20px;
  font-size: 17px;
  font-weight: 500;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 15.5px;
    margin-top: 5px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 5px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14.5px;
  }
`;
const TextHold = styled.div`
  width: 300px;
  height: 120px;
  background: white;
  margin-top: -90px;
  display: flex;
  background: lightgrey;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 100px;
    align-items: center;
    margin-top: -14.5px;
  }
  @media screen and (max-width: 425px) {
    height: 90px;
    margin: 0;
    align-items: center;
    width: 180px;
    margin-top: -14.5px;
  }
  @media screen and (max-width: 375px) {
    height: 90px;
    margin-top: -14.5px;
    width: 150px;
  }
  @media screen and (max-width: 320px) {
    height: 90px;
    margin-top: -14.5px;
    width: 230px;
  }
`;
const AllHold = styled.div`
  height: 590px;
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: red; */
  margin: 0 10px 10px;

  @media screen and (max-width: 768px) {
    height: 430px;
    width: 200px;
  }
  @media screen and (max-width: 425px) {
    height: 390px;
    /* height: auto; */
    width: 180px;
  }
  @media screen and (max-width: 375px) {
    height: 370px;
    width: 150px;
  }
  @media screen and (max-width: 320px) {
    height: 370px;
    width: 230px;
  }
`;
const ImgHold = styled.div`
  height: 580px;
  width: 380px;
  background: blue;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    height: 380px;
    width: 200px;
  }
  @media screen and (max-width: 425px) {
    height: 350px;
    width: 180px;
  }
  @media screen and (max-width: 375px) {
    height: 350px;
    width: 150px;
  }
  @media screen and (max-width: 320px) {
    width: 230px;
    height: 350px;
  }
`;
const Wrapper = styled.div`
  width: 1250px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background: red; */
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: poppins;
  /* background: red; */
`;
