import React from "react";
import styled from "styled-components";
const Featured = () => {
  return (
    <Container>
      <Feature>Featured Products</Feature>
      <Text>
        {" "}
        Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te
        zril urbanitas scribentur. In utamur impedit feugait nec, ex putent
        alienum est. Nam tantas latine admodum at, ea etiam nobis pri.
      </Text>
    </Container>
  );
};

export default Featured;
const Container = styled.div`
  width: 95%;
  min-height: 130px;
  overflow: hidden;
  /* background-color: rosybrown; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Feature = styled.div`
  width: 400px;
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  font-family: poppins;
`;
const Text = styled.div`
  width: 600px;
  height: 130px;
  font-size: 16px;
  font-weight: 300;
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;
