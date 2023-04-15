import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
// import styled from 'styled-components';

const buttonData = [
  { length: 'UNDEREAR', text: '귀 밑', emoji: 'UNDEREAR.png' },
  { length: 'OVEREAR', text: '귀 위', emoji: 'OVEREAR.png' },
  {
    length: 'EARTOSHOULDER',
    text: '귀 ~ 어깨',
    emoji: 'EARTOSHOULDER.png',
  },
  {
    length: 'SHOULDERTOMORE',
    text: '어깨 ~ 그 이상',
    emoji: 'SHOULDERTOMORE.png',
  },
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
    <>
      <PTitle>Step 1</PTitle>
      <PDetail>머리 기장을 선택해주세요.</PDetail>
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
          <img
            key={button.length}
            src={button.emoji} // 이미지 파일의 경로를 지정
            alt={button.length}
          />
          {button.text}
        </button>
      ))}
    </>
  );
};

export default LoginHairLength;

// const divStyle: CSSProperties = {
//   textAlign: 'center',
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

const PTitle = styled.div`
  ${theme.fonts.Pretendard_Title1_ExtraBold_24};
  color: ${theme.colors.second};
`;

const PDetail = styled.div`
  ${theme.fonts.Pretendard_Paragraph_Medium_18};
  color: ${theme.colors.head_color};
`;
