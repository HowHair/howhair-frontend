import React from 'react';
import { Header } from '../common/Header';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Line from '../common/Line/Line';

const infRev = () => {
  return (
    <>
      <Header title="내 정보 수정" />
      <hr />
      <Menu>연결된 카카오 계정 ${}님</Menu>
      <Line />
      <RevDiv>
        <MytypeMenu>My Type</MytypeMenu>
        <RevBtn>수정</RevBtn>
      </RevDiv>
      {/* 수정 버튼 클릭시 수정할 수 있는 드롭다운 나타내기 */}
      {/* 로그인 시 선택한 정보 가져오기 */}
      <Menu>성별</Menu>
      {/* 성별은 수정 X */}
      <Menu>머리 기장</Menu>
      {/* 드롭다운 */}
      <Menu>곱슬 정도</Menu>
      {/* 드롭다운 */}
      {/* 하단바는 어떻게 구현할지? */}
    </>
  );
};

export default infRev;

const Menu = styled.div`
  margin-top: 20px;
  ${theme.fonts.Pretendard_Subtitle2_Semibold_18}
  ${theme.colors.head_color}
`;

const RevDiv = styled.div`
  display: flex;
  justify-content: ceter;
`;

const RevBtn = styled.div`
  width: 45px;
  height: 27px;
  text-align: center;
  cursor: pointer;
  background-color: ${theme.colors.second};
  color: ${theme.colors.ff}};
  ${theme.borderRadius.card}
  ${theme.fonts.Pretendard_caption3_regular_12}
`;

const MytypeMenu = styled.div`
  margin-top: 15px;
  ${theme.fonts.Ptretendard_Subtitle1_Bold_18}
  color: ${theme.colors.main}
`;
