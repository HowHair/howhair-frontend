import React, { CSSProperties, useState } from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginGender = () => {
  const divStyle: CSSProperties = {
    textAlign: 'center',
  };

  const pStepStyle: CSSProperties = {
    fontSize: '24px',
    color: '#9F62ED',
  };

  const pStyle: CSSProperties = {
    fontSize: '18px',
    color: '#131313',
  };

  return (
    <div style={divStyle}>
      <p style={pStepStyle}>Step 1</p>
      <p style={pStyle}>성별을 선택해주세요.</p>

      {/* radio button 사용해야하나? */}
      <button type="button">여자</button>
      <button type="button">남자</button>
      <Link to="/LoginHairLength">
        <button type="button">다음 단계</button>
      </Link>
    </div>
  );
};
export default LoginGender;
