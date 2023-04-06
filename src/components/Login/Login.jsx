import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import LoginStart from './LoginStart';
// import logo from '/images/Howhair_Logo.png';

const LoginComponent = () => {
  return (
    <>
      <StLoginWrapper>Login 컴포넌트</StLoginWrapper>

      <img src="/images/Howhair_Logo.png" alt="로고" />
      <p>
        그 미용실 어때? <br />
        내가 하려는 머리타일의 자세한 리뷰들 부터 <br />
        헤어 스타일에 맞는 스타일 추천까지!
      </p>
      {/* 카카오톡 로그인 버튼 */}
      <button type="button">
        <NavLink to="/LoginStart">로그인</NavLink>
      </button>
    </>
  );
};

<Route path="LoginStart" element={<LoginStart />} />;
export default LoginComponent;

const StLoginWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.Pretendard_Title1_ExtraBold_24};
`;
