import React from 'react';
import styled from 'styled-components';

const SideComponent = () => {
  return (
    <SideDiv>
      <SideButton>yeah</SideButton>
      <SideButton>yeah</SideButton>
      <SideButton>yeah</SideButton>
      <SideButton>yeah</SideButton>
      <SideButton>yeah</SideButton>
      <SideButton>yeah</SideButton>
      <SideButton>yeah</SideButton>
    </SideDiv>
  );
};

const SideDiv = styled.div`
  border: 1px solid black;
  width: 4rem;
  /* float: left; */
  `;

const SideButton = styled.button`
  border-radius: 1rem solid red;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 4rem;
  height: 2rem;

`;
export default SideComponent;
