import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const SlideComponent = ({ text }) => {
  return (
    <SlideMain>
      <Fade bottom>
        <SlideUp>{text}</SlideUp>
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
  aspect-ratio: 1 / 1;
  float : left;
`;

const SlideUp = styled.div`
  transform: translate(0, 100px);
  background-color: pink;
  width: 30%;
  /* height: 30vh; */
  opacity: 1;
  transition: all 0.5s ease;
  margin-left: 2%;
  margin-top: 5%;
  aspect-ratio: 1 / 1;
`;
export default SlideComponent;
