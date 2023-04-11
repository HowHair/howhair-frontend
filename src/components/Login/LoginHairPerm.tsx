import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
// import { Link } from 'react-router-dom';
// import MyBackButton from '../common/back';
// import styled from 'styled-components';

const buttonData = [
  { perm: 'CURL', text: '곱슬' },
  { perm: 'SEMICURL', text: '반곱슬' },
  { perm: 'STRAIGHT', text: '직모' },
];

const LoginHairPerm = ({
  myPageData,
  setMyPageData,
}: {
  myPageData: MyPageProps;
  setMyPageData: Dispatch<SetStateAction<MyPageProps>>;
}) => {
  const handleClick = (key: string, hairPerm: string) => {
    setMyPageData({ ...myPageData, [key]: hairPerm });
  };

  return (
    <>
      {/* <MyBackButton />
      <p style={pStepStyle}>Step 3</p>
      <p style={pStyle}>곱슬 정도를 선택해주세요.</p> */}

      {buttonData.map(button => (
        <button
          key={button.perm}
          style={
            myPageData.hairPerm === button.perm
              ? afClickBtnStyle
              : bfClickBtnStyle
          }
          onClick={() => handleClick('hairPerm', button.perm)}
        >
          {button.text}
        </button>
      ))}

      {/* <p style={pRevStyle}>My page에서 수정 가능합니다.</p>
      <Link to="/">
        <button type="button" style={buttonStyle}>
          추천 스타일 보러 가기
        </button>
      </Link> */}
    </>
  );
};

export default LoginHairPerm;

// const divStyle: CSSProperties = {
//   textAlign: 'center',
// };

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

// const pRevStyle: CSSProperties = {
//   fontSize: '12px',
//   color: '#7B7B7B',
// };

// const buttonStyle: CSSProperties = {
//   width: '328px',
//   height: '46px',
//   backgroundColor: '#7C00DE',
//   borderRadius: '15px',
//   textAlign: 'center',
//   color: '#FFFFFF',
// };
