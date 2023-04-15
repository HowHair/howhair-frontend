import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
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
      <PTitle>Step 3</PTitle>
      <PDetail>곱슬 정도를 선택해주세요.</PDetail>
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
    </>
  );
};

export default LoginHairPerm;

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

const PTitle = styled.div`
  ${theme.fonts.Pretendard_Title1_ExtraBold_24}
  color: ${theme.colors.second};
`;

const PDetail = styled.div`
  ${theme.fonts.Pretendard_Paragraph_Medium_18}
  color: ${theme.colors.head_color};
`;
