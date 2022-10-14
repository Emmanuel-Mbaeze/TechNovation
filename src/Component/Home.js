import React from "react";
import styled from "styled-components";
import About from "./About";
import Centre from "./Centre";
import EventFeat from "./EventFeat";
import EventSec from "./EventSec";
import Header from "./Header";
import Landingpage from "./Landingpage";
import MyDetails from "./MyDetails";
import NewsLetter from "./NewsLetter";
import PopularVen from "./PopularVen";
import Upcoming from "./Upcoming";
const Home = () => {
  return (
    <Container>
      <Header />
      <Landingpage />
      <Upcoming />
      <MyDetails />
      <EventSec />
      <EventFeat />
      <Centre />
      <PopularVen />
      <About />
      <NewsLetter />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: #123456; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 100px; */
`;
