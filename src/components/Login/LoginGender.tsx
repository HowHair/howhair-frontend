import React from 'react';
// import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import LoginHairLength from './LoginHairLength';

const LoginGender = () => {
  return (
    <div>
      <p>Step 1</p>
      <p>성별을 선택해주세요.</p>

      {/* radio button 사용해야하나? */}
      <button type="button">여자</button>
      <button type="button">남자</button>

      <button type="button">
        <NavLink to="/LoginHairLength">다음 단계</NavLink>
      </button>
    </div>
  );
};
<Route path="LoginHairLength" element={<LoginHairLength />} />;
export default LoginGender;
