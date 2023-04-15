import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const buttonData = [
  { gender: 'FEMALE', text: '여성' },
  { gender: 'MALE', text: '남성' },
];

const LoginGender = ({
  myPageData,
  setMyPageData,
}: {
  myPageData: MyPageProps;
  setMyPageData: Dispatch<SetStateAction<MyPageProps>>;
}) => {
  const handleClick = (key: string, gender: string) => {
    setMyPageData({ ...myPageData, [key]: gender });
  };

  return (
    <>
      <PTitle>Step 1</PTitle>
      <PDetail>성별을 선택해주세요.</PDetail>
      {buttonData.map(button => (
        <button
          key={button.gender}
          style={
            myPageData.gender === button.gender
              ? afClickBtnStyle
              : bfClickBtnStyle
          }
          onClick={() => handleClick('gender', button.gender)}
        >
          {button.text}
        </button>
      ))}
    </>
  );
};
export default LoginGender;

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
  ${theme.fonts.Pretendard_Title1_ExtraBold_24};
  color: ${theme.colors.second};
`;

const PDetail = styled.div`
  ${theme.fonts.Pretendard_Paragraph_Medium_18};
  color: ${theme.colors.head_color};
`;
