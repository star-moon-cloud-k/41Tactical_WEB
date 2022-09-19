import React from 'react';
import styled from 'styled-components';

const ImageWrapped = styled.div`
  width: 25%;
`;
const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const MainComponent = () => {
  return (
    <div>
      <ImageWrapped>
        <StyledImg img src={require('../src_assets/41Tactical.png')} />
        {/* <img src={require('../src_assets/41Tactical.png')} /> */}
      </ImageWrapped>
    </div>
  );
};

export default MainComponent;
