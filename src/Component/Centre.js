import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class Centre extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div
        style={
          {
            // display: "flex", flexDirection: "column", alignItems: "center"
            // backgroundColor: "green",
            // width: "91%",
            // height: "100vh",
            // color: "green",
          }
        }
      >
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div
            style={{ backgroundColor: "red", width: "91%", height: "100vh" }}
          >
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
const Container = styled.div`
  background-color: orange;
  width: 91%;
  height: 100vh;
`;
