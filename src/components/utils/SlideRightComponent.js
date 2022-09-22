import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const SlideRightComponent = ({ image, text }) => {
  return (
    <SlideMain>
      <Fade right>
        <SlideImg src={require(`../../src_assets/${image}`)} />
      </Fade>
      <Fade up>
        <SlideDescript>{text}</SlideDescript>
      </Fade>
    </SlideMain>
  );
};

const SlideMain = styled.div`
  border: 0px solid black;
  width: 100%;
  /* height: 80vh; */
  margin-top: 0;
  margin-bottom: 0;
  background: gray;
  /* aspect-ratio: 1 / 1; */
  float: left;
`;

const SlideDescript = styled.div`
  transform: translate(10%, 10%);
  border: 0px solid balck;
  width: 20%;
  background-color: hotpink;
  margin-left: 40%;
  aspect-ratio: 1/1;
`;
const SlideImg = styled.img`
  transform: translate(1%, 10%);
  background-color: pink;
  width: 45%;
  /* height: 30vh; */
  opacity: 1;
  transition: all 0.5s ease;
  margin-left: 2%;
  margin-top: 5%;
  aspect-ratio: 1 / 1;
`;
export default SlideRightComponent;
