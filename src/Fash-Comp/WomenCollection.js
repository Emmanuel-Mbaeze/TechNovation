import React from "react";
import styled from "styled-components";
import { FiMap } from "react-icons/fi";

const WomenCollection = () => {
  return (
    <Container>
      <Top>
        <Title>
          Best Selling <span>Women</span> Wears
        </Title>

        <Test>
          Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis
          te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent
          alienum est. Nam tantas latine admodum at, ea etiam nobis pri.
        </Test>
      </Top>
      <Wrap>
        <Guy>
          <Kid1></Kid1>
          <Kid2></Kid2>
        </Guy>
        <Lady>
          <Text>
            <Text2>44 Products</Text2>

            <Text11>Women</Text11>
          </Text>
        </Lady>
      </Wrap>
    </Container>
  );
};

export default WomenCollection;
const Container = styled.div`
  width: 95%;
  min-height: 400px;
  overflow: hidden;
  margin-top: 28px;

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
  background-image: url("/image/G1.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  /* margin: 10px; */
`;
const Guy = styled.div`
  width: 570px;
  height: 400px;
  /* background-color: antiquewhite; */
  /* margin: 10px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Kid1 = styled.div`
  width: 279px;
  height: 100%;
  /* background-image: url("/image/G4.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #aaa;
  /* margin-right: 14px; */
`;
const Kid2 = styled.div`
  width: 279px;
  height: 100%;
  background-color: #aaa;
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
  height: 120px;
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
  justify-content: space-between;
  align-items: center;
`;
