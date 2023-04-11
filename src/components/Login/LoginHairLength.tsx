import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MyBackButton from '../common/back';

const buttonData = [
  { length: 'UNDEREAR', text: '귀 밑' },
  { length: 'OVEREAR', text: '귀 위' },
  { length: 'EARTOSHOULDER', text: '귀 ~ 어깨' },
  { length: 'SHOULDERTOMORE', text: '어깨 ~ 그 이상' },
];

const LoginHairLength = ({
  myPageData,
  setMyPageData,
}: {
  myPageData: MyPageProps;
  setMyPageData: Dispatch<SetStateAction<MyPageProps>>;
}) => {
  const handleClick = (key: string, hairLength: string) => {
    setMyPageData({ ...myPageData, [key]: hairLength });
  };

  return (
    <div style={divStyle}>
      {/* <MyBackButton />
      <p style={pStepStyle}>Step 2</p>
      <p style={pStyle}>머리 기장을 선택해주세요.</p> */}

      {buttonData.map(button => (
        <button
          key={button.length}
          style={
            myPageData.hairLength === button.length
              ? afClickBtnStyle
              : bfClickBtnStyle
          }
          onClick={() => handleClick('hairLength', button.length)}
        >
          {button.text}
        </button>
      ))}

      {/* <Link to="/LoginHairPerm">
        <button type="button" style={buttonStyle}>
          다음 단계
        </button>
      </Link> */}
    </div>
  );
};

export default LoginHairLength;

const divStyle: CSSProperties = {
  textAlign: 'center',
};

// const pStepStyle: CSSProperties = {
//   fontSize: '24px',
//   color: '#9F62ED',
// };

// const pStyle: CSSProperties = {
//   fontSize: '18px',
//   color: '#131313',
// };

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

// const buttonStyle: CSSProperties = {
//   width: '305px',
//   height: '46px',
//   backgroundColor: '#9F62ED',
//   borderRadius: '15px',
//   textAlign: 'center',
//   color: '#FFFFFF',
// };
