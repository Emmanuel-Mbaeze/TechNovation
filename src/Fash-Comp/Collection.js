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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  @media (max-width: 900px) {
    justify-content: center;
    background-color: rosybrown;
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 97%;
    justify-content: center;
  }
`;
const Lady = styled.div`
  width: 580px;
  height: 550px;
  background-image: url("/image/G1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  margin: 10px;

  background-color: #d9ddd9;
  @media (max-width: 800px) {
  }
  @media (max-width: 1024px) {
    width: 490px;
  }
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
  @media (max-width: 1024px) {
    width: 490px;
  }
`;
const Men = styled.div`
  width: 100%;
  height: 330px;
  background-image: url("/image/b2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  background-color: #d9ddd9;
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
  background-image: url("/image/k1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  background-color: #d9ddd9;
  /* margin-right: 14px; */
  @media (max-width: 1024px) {
    width: 235px;
  }
`;
const Kid2 = styled.div`
  width: 279px;
  height: 100%;
  /* margin-left: 14px; */
  background-image: url("/image/Gf1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  background-color: #d9ddd9;
  @media (max-width: 1024px) {
    width: 235px;
  }
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
