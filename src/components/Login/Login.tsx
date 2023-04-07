import React, { CSSProperties, useEffect, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import LoginStart from './LoginStart';
import LogoImgLoad from '../common/LogoImg';
// import logo from '/images/Howhair_Logo.png';

const LoginComponent = () => {
  // const [data, setData] = useState('');
  // useEffect(() => {
  //   setData('');
  // }, []);
  const divStyle: CSSProperties = {
    textAlign: 'center',
  };

  const pStyle: CSSProperties = {
    textAlign: 'center',
    color: '#363636',
  };

  const buttonStyle: CSSProperties = {
    width: '300px',
    height: '50px',
    backgroundColor: '#F9E000',
    borderRadius: '50px',
    textAlign: 'center',
    color: '#332525',
  };

  return (
    <div style={divStyle}>
      <LogoImgLoad />
      <p style={pStyle}>
        그 미용실 어때? <br />
        내가 하려는 머리타일의 자세한 리뷰들 부터 <br />
        헤어 스타일에 맞는 스타일 추천까지!
      </p>

      {/* 카카오톡 로그인 버튼 */}
      <button type="button" style={buttonStyle}>
        <NavLink to="/LoginStart">카카오 계정으로 로그인</NavLink>
      </button>
    </div>
  );
};

<Route path="LoginStart" element={<LoginStart />} />;
export default LoginComponent;

const StLoginWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.Pretendard_Title1_ExtraBold_24};
`;
