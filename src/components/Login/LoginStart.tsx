import React from 'react';
import { NavLink, Route } from 'react-router-dom';
// import styled from 'styled-components';
import LoginGender from './LoginGender';
// import logo from '/images/Howhair_Logo.png';
// import illu from '/images/Login_Illustration.svg';

const LoginStart = () => {
  return (
    <>
      <img src="/images/Howhair_Logo.png" alt="로고" />
      <img src="/images/Login_Illustration.svg" alt="추천 일러" />
      <p>
        타입에 따라 스타일이나 미용실을 추천해드려요 <br />
        My Type을 입력해보러 갈까요?
      </p>
      <button type="button">
        <NavLink to="/LoginGender">My Type 입력하러가기</NavLink>
      </button>
    </>
  );
};
<Route path="LoginGender" element={<LoginGender />} />;
export default LoginStart;
