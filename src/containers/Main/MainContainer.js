import React from 'react';
// import MainComponent from '../../components/MainComponent';
import TopMenu from '../../components/TopMenu';
import SlideComponent from '../../components/utils/SlideComponent';
import SlideRightComponent from '../../components/utils/SlideRightComponent';
import styled  from 'styled-components';
const MainContainer = () => {
  return (
    <div>
      {/* <MainComponent /> */}
      <TopMenu />
      <SlideRightComponent image="41TacticalLogo.png" text = "회사가 이렇고 저렇고"/>
      <SlideComponent text="뀨뀨" />
    </div>
  );
};

const MainBody = styled.div`
  
`

export default MainContainer;
