import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
// import styled from 'styled-components';

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
