import React from 'react';
import styled from 'styled-components';

const MainComponent = () => {
  return (
    <>
      <styledImg>
        <img src={require('../src_assets/41Tactical.png')} />
      </styledImg>
    </>
  );
};

const styledImg = styled.div`
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 10rem;
  padding-right: 10rem;
`;

export default MainComponent;
