import React from "react";
import styled from "styled-components";
const Landingpage = () => {
  return (
    <Container>
      <Wrap>
        <Image src="/images/L1.jpg" alt="image"></Image>
        <Box></Box>
      </Wrap>
    </Container>
  );
};

export default Landingpage;
const Container = styled.div`
  width: 100%;
  min-height: 250px;
  /* min-height: 100vh; */
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  z-index: -100;
`;
const Wrap = styled.div`
  width: 100%;
  height: 400px;
  margin: 10px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Cont = styled.div`
  border: none;
  width: 93%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 22px;
  font-weight: 300;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
