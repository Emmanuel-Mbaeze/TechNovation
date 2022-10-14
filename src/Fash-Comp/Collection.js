import React from "react";
import styled from "styled-components";

const Collection = () => {
  return (
    <Container>
      <Lady>
        <Text>
          <Text2>44 Products</Text2>

          <Text1>Women</Text1>
        </Text>
      </Lady>
      <Guy>
        <Men>
          <Text>
            <Text2>29 Products</Text2>

            <Text11>Men</Text11>
          </Text>
        </Men>
        <Child>
          <Kid1></Kid1>
          <Kid2></Kid2>
        </Child>
      </Guy>
    </Container>
  );
};

export default Collection;
const Container = styled.div`
  width: 95%;
  min-height: 550px;
  overflow: hidden;
  /* background-color: rosybrown; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: white;
`;
const Lady = styled.div`
  width: 580px;
  height: 550px;
  background-image: url("/image/G1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin: 10px; */
`;
const Guy = styled.div`
  width: 580px;
  height: 550px;
  /* background-color: antiquewhite; */
  /* margin: 10px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Men = styled.div`
  width: 100%;
  height: 330px;
  background-image: url("/image/B3.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Child = styled.div`
  width: 100%;
  height: 210px;
  /* background-color: gold; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Kid1 = styled.div`
  width: 279px;
  height: 100%;
  background-image: url("/image/G4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-right: 14px; */
`;
const Kid2 = styled.div`
  width: 279px;
  height: 100%;
  /* margin-left: 14px; */
  background-image: url("/image/Gf.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// const Container = styled.div``
// const Container = styled.div``
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  /* background-color: red; */
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;
const Text1 = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
  /* background-color: green; */
  font-family: poppins;
  width: 23%;
  color: black;

  /* margin-left: 7px; */
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
  /* margin-bottom: 8px; */
`;
