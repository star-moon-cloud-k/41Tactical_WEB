import React from 'react';
import styled from 'styled-components';

const ImageWrapped = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1ch;
  /* border: 1px solid black; */
  float: left;
`;
const StyledImg = styled.img`
  height: 3rem;
  width: 3rem;
  height: auto;
  /* border: 1px solid red; */
`;

const MainComponent = () => {
  return (
    <div>
      <ImageWrapped>
        <StyledImg src={require('../src_assets/41TacticalLogo.png')} />
        {/* <img src={require('../src_assets/41Tactical.png')} /> */}
      </ImageWrapped>
    </div>
  );
};

export default MainComponent;
