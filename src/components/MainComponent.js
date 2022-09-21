import React from 'react';
import styled from 'styled-components';

const ImageWrapped = styled.div`
  width: 4rem;
  height: 1rem;
  border: 1ch;
  border: 1px solid black;
`;
const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  border: 1px solid red;
`;

const MainComponent = () => {
  return (
    <div>
      <ImageWrapped>
        <StyledImg src={require('../src_assets/41Tactical.png')} />
        {/* <img src={require('../src_assets/41Tactical.png')} /> */}
      </ImageWrapped>
    </div>
  );
};

export default MainComponent;
