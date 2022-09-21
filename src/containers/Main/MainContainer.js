import React from 'react';
// import MainComponent from '../../components/MainComponent';
import TopMenu from '../../components/TopMenu';
import SlideComponent from '../../components/utils/SlideComponent';
import styled  from 'styled-components';
const MainContainer = () => {
  return (
    <div>
      {/* <MainComponent /> */}
      <TopMenu />
      <SlideComponent text="뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨뀨" />
      <SlideComponent text="뀨뀨" />
    </div>
  );
};

const MainBody = styled.div`
  
`

export default MainContainer;
