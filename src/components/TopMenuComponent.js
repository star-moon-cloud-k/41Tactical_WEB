import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopMenuComponent = () => {
  const [isShow, setShow] = useState('true');

  const toggleMenu = () => {
    setShow((isShow) => !isShow); //on , off 토글
    console.log(isShow);
  };
  return (
    <>
      {/* <SideButton onClick={() => toggleMenu()}>메뉴 토글</SideButton> */}
      <SideDiv>
        <Link to="/">
          <ImageWrapped>
            <StyledImg src={require('../src_assets/41TacticalLogo.png')} />
            {/* <img src={require('../src_assets/41Tactical.png')} /> */}
          </ImageWrapped>
        </Link>

        <Link to="/overview" className={isShow ? 'ShowMenu' : 'HideMenu'}>
          <SideButton>회사 소개</SideButton>
        </Link>
        <Link to="/products">
          <SideButton>제품 소개</SideButton>
        </Link>
        <Link to="/login">
          <SideButton>로그인</SideButton>
        </Link>
      </SideDiv>
    </>
  );
};

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
  &:hover {
    color: #0283bf;
    cursor: pointer;
  }
`;

const SideDiv = styled.ul`
  border: 1px solid black;
  width: 100%;
  height: 3rem;

  /* float: left; */
`;

const SideButton = styled.button`
  border: 0px solid red;
  padding: 0.5rem;
  margin: 0rem;
  color: #0649a8;
  font-weight: bold;
  width: 13%;
  height: 3rem;
  font-size: 1rem;
  font: #fffdf9;
  background-color: transparent;
  aspect-ratio: 4 / 3;
  &:hover {
    color: #0283bf;
    cursor: pointer;
  }
`;
export default TopMenuComponent;
