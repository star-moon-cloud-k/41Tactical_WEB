import React from 'react';
import TopMenu from '../../components/TopMenuComponent';
import SlideComponent from '../../components/utils/SlideComponent';
import SlideRightComponent from '../../components/utils/SlideRightComponent';
import styled from 'styled-components';
const OverViewContainer = () => {
  return (
    <div>
      {/* <MainComponent /> */}
      <TopMenu />
      <SlideRightComponent
        image="41TacticalLogo.png"
        text="회사가 이렇고 저렇고"
      />
      <SlideComponent text="뀨뀨" />
    </div>
  );
};

const MainBody = styled.div``;

export default OverViewContainer;
