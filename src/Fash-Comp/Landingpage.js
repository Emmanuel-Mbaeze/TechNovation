import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Landingpage = () => {
  const settings = {
    // className: "center",
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 5,
    // swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };
  return (
    <Container>
      {/* <Sliders {...settings}> */}
      <Wrap>
        <Image src="/image/background.jpg" alt="image"></Image>
        <Box></Box>
      </Wrap>
      {/* <Wrap>
          <Image src="/images/L2.jpg" alt="image"></Image>
          <Box></Box>
        </Wrap>
        <Wrap>
          <Image src="/images/L3.jpg" alt="image"></Image>
          <Box></Box>
        </Wrap>
        <Wrap>
          <Image src="/image/G1.jpg" alt="image"></Image>
          <Box></Box>
        </Wrap>
        <Wrap>
          <Image src="/image/G2.jpg" alt="image"></Image>
          <Box></Box>
        </Wrap>
        <Wrap>
          <Image src="/image/G3.jpg" alt="image"></Image>
          <Box></Box>
        </Wrap> */}
      {/* </Sliders> */}
    </Container>
  );
};

export default Landingpage;

const Sliders = styled(Slider)`
  width: 95%;
  min-height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 250px;
  /* min-height: 100vh; */
  overflow: hidden;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  z-index: -100;
`;
const Wrap = styled.div`
  width: 95%;
  height: 500px;
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
