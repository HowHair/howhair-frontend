import React, { CSSProperties } from 'react';
import { Link, Route } from 'react-router-dom';
// import styled from 'styled-components';
import LoginGender from './LoginGender';
import LogoImgLoad from '../common/LogoImg';

const LoginStart = () => {
  const divStyle: CSSProperties = {
    textAlign: 'center',
  };

  const illuImg: CSSProperties = {
    width: '350px',
    height: '233px',
  };

  const pStyle: CSSProperties = {
    textAlign: 'center',
    color: '#363636',
    fontSize: '16px',
  };

  const spanStyle: CSSProperties = {
    color: '#7C00DE',
    fontSize: '16px',
  };

  const buttonStyle: CSSProperties = {
    width: '325px',
    height: '52px',
    backgroundColor: '#9F62ED',
    borderRadius: '15px',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  return (
    <div style={divStyle}>
      <LogoImgLoad />
      <img
        src="/images/Login_Illustration.svg"
        alt="추천 일러"
        style={illuImg}
      />
      <p style={pStyle}>
        타입에 따라 스타일이나 미용실을 추천해드려요 <br />
        <span style={spanStyle}>My Type</span>을 입력해보러 갈까요?
      </p>
      <Link to="/LoginGender">
        <button type="button" style={buttonStyle}>
          My Type 입력하러가기
        </button>
      </Link>
    </div>
  );
};
export default LoginStart;
