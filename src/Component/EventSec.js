import React from "react";
import styled from "styled-components";
const EventSec = () => {
  return (
    <Container>
      <Wrap>
        <Image src="/images/L1.jpg" alt="image"></Image>
        <Box>
          <Cont>
            <Text>
              <Text1>Upcoming</Text1>
              <Text2>Events</Text2>
            </Text>
          </Cont>
        </Box>
      </Wrap>
      <Wrap>
        <Image src="/images/L2.jpg" alt="image"></Image>
        <Box>
          <Cont>
            <Text>
              <Text1>Ongoing</Text1>
              <Text2>Events</Text2>
            </Text>
          </Cont>
        </Box>
      </Wrap>
      <Wrap>
        <Image src="/images/L3.jpg" alt="image"></Image>
        <Box>
          <Cont>
            <Text>
              <Text1>Expired</Text1>
              <Text2>Events</Text2>
            </Text>
          </Cont>
        </Box>
      </Wrap>
    </Container>
  );
};

export default EventSec;
const Container = styled.div`
  width: 100%;
  /* background-color: aquamarine; */
  min-height: 250px;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;

  color: white;
`;
const Wrap = styled.div`
  width: 310px;
  height: 200px;
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
  border: 0.1px dashed #eeee;
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
