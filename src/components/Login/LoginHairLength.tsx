import React from 'react';
// import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import LoginHairPerm from './LoginHairPerm';

const LoginHairLength = () => {
  return (
    <div>
      <p>Step 2</p>
      <p>머리 기장을 선택해주세요.</p>

      {/* radio button 사용해야하나? */}
      {/* 버튼 안에 이모지 넣기 */}
      <button type="button">귀 밑</button>
      <button type="button">귀 위</button>
      <button type="button">귀~어깨</button>
      <button type="button">어깨~그 이상</button>

      <button type="button">
        <NavLink to="/LoginHairPerm">다음 단계</NavLink>
      </button>
    </div>
  );
};
<Route path="LoginHairPerm" element={<LoginHairPerm />} />;
export default LoginHairLength;
