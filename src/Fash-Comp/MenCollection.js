import React from "react";
import styled from "styled-components";
import { FiMap } from "react-icons/fi";

const MenCollection = () => {
  return (
    <Container>
      <Top>
        <Title>
          Best Selling <span>Men</span> Wears
        </Title>

        <Test>
          Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
          te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent
          alienum est. Nam tantas latine admodum at, ea etiam nobis pri.
        </Test>
      </Top>
      <Wrap>
        <Lady>
          {/* <Text>
            <Text2>44 Products</Text2>

            <Text11>Men</Text11>
          </Text> */}
        </Lady>
        <Guy>
          <Kid1></Kid1>
          <Kid2></Kid2>
        </Guy>
      </Wrap>
    </Container>
  );
};

export default MenCollection;
const Container = styled.div`
  width: 95%;
  min-height: 400px;
  overflow: hidden;
  margin-top: 28px;
  @media (max-width: 1024px) {
    width: 97%;
  }

  /* background-color: rosybrown; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
`;
const Lady = styled.div`
  width: 470px;
  height: 400px;
  background-image: url("/image/Bz1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  background-color: #d9ddd9;
  margin: 10px;
  /* margin: 10px; */
`;
const Guy = styled.div`
  width: 570px;
  height: 400px;
  @media (max-width: 1024px) {
    width: 500px;
  }
  /* margin: 10px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Kid1 = styled.div`
  width: 279px;
  height: 100%;
  @media (max-width: 1024px) {
    width: 240px;
    /* background-color: rebeccapurple; */
  }
  /* background-image: url("/image/G4.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #d9ddd9;
  /* margin-right: 14px; */
`;
const Kid2 = styled.div`
  width: 279px;
  height: 100%;
  @media (max-width: 1024px) {
    width: 240px;
    /* background-color: antiquewhite; */
  }
  background-color: #d9ddd9;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const Text11 = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
  /* background-color: green; */
  font-family: poppins;
  width: 15%;
  color: black;

  /* margin-left: 7px; */
`;
const Text2 = styled.div`
  font-size: 14px;
  font-weight: 300;
  /* background-color: green; */
  font-family: poppins;
  width: 15%;
  color: black;
`;

const Top = styled.div`
  width: 90%;
  height: 90px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: black;
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

const Test = styled.div`
  font-size: large;
  font-family: poppins;
  font-weight: 500;
  text-align: center;
`;
const Wrap = styled.div`
  width: 100%;
  min-height: 230px;
  margin-top: 15px;
  /* background-color: #191919; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
