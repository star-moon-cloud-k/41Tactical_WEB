import React from 'react';
import MainComponent from '../../components/MainComponent';
import SideComponent from '../../components/SideComponent';
import SlideComponent from '../../components/SlideComponent';
const MainContainer = () => {
  return (
    <div>
      <MainComponent />
      <SideComponent />
      {/* <SlideComponent /> */}
    </div>
  );
};

export default MainContainer;
