import React, { CSSProperties, useState } from 'react';
// import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
import LoginHairPerm from './LoginHairPerm';

const LoginHairLength = () => {
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

  const bfClickBtnStyle: CSSProperties = {
    width: '135px',
    height: '142px',
    backgroundColor: '#FFFFFF',
    color: '#131313',
    textAlign: 'center',
  };

  const afClickBtnStyle: CSSProperties = {
    width: '135px',
    height: '142px',
    backgroundColor: '#7C00DE',
    color: '#F8F8F8',
    textAlign: 'center',
  };

  const buttonStyle: CSSProperties = {
    width: '305px',
    height: '46px',
    backgroundColor: '#9F62ED',
    borderRadius: '15px',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  const [selectedHairLength, setSelectedHairLength] = useState('');

  const handleClick = length => {
    setSelectedHairLength(length);
  };

  const buttonData = [
    { length: 'male', text: '남성' },
    { length: 'female', text: '여성' },
  ];

  return (
    <div style={divStyle}>
      <p style={pStepStyle}>Step 2</p>
      <p style={pStyle}>머리 기장을 선택해주세요.</p>

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
