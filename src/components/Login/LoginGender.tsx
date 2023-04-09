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

  const [selectedGender, setSelectedGender] = useState('');

  const handleClick = (gender: React.SetStateAction<string>) => {
    setSelectedGender(gender);
  };

  const buttonData = [
    { gender: 'female', text: '여성' },
    { gender: 'male', text: '남성' },
  ];

  return (
    <div style={divStyle}>
      <p style={pStepStyle}>Step 1</p>
      <p style={pStyle}>성별을 선택해주세요.</p>

      {buttonData.map(button => (
        <button
          key={button.gender}
          style={
            selectedGender === button.gender ? afClickBtnStyle : bfClickBtnStyle
          }
          onClick={() => handleClick(button.gender)}
        >
          {button.text}
        </button>
      ))}

      <Link to="/LoginHairLength">
        <button type="button" style={buttonStyle}>
          다음 단계
        </button>
      </Link>
    </div>
  );
};
export default LoginGender;
