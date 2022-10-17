import React from "react";
import styled from "styled-components";
import About from "./About";
import Body from "./Body/Body";
import Collection from "./Collection";
import Cover from "./Cover";
import Featured from "./Featured";

import Header from "./Header";
import Landingpage from "./Landingpage";
import Landingpage2 from "./Landingpage2";
import MenCollection from "./MenCollection";
import NewsLetter from "./NewsLetter";
import Slider from "./Slider";
import WomenCollection from "./WomenCollection";

const Home = () => {
  return (
    <Container>
      <Header />
      <Slider />
      <About />
      <Collection />
      <Featured />
      <Body />
      <Landingpage />
      {/* <Landingpage2 /> */}
      <MenCollection />
      <Cover />
      <WomenCollection />
      <NewsLetter />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  // background-color: #1234;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 20px; */
`;
