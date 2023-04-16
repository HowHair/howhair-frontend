import React from 'react';
import Line from '../common/Line/Line';
import { Header } from '../common/Header';
import styled from 'styled-components';
import theme from '../../styles/theme';

const myPage = () => {
  return (
    <>
      <Header title="My Page" />
      <Line />
      <Menu>내 정보 수정</Menu>
      <Line />
      <Menu>북마크</Menu>
      <Line />
      <Menu>내가 쓴 리뷰</Menu>
      <Line />
      <Menu>문의</Menu>
      <Content>
        문의 사항 및 버그 관련 제보는 아래의 이메일 주소로 보내주세요.
      </Content>
      <Content>📬 구글폼 주소: </Content>
      <Line />
      <Menu>로그아웃</Menu>
      <Line />
      <Menu>회원 탈퇴</Menu>
    </>
  );
};

export default myPage;

const Menu = styled.div`
  ${theme.fonts.Pretendard_Subtitle2_Semibold_18}
  ${theme.colors.head_color}
`;

const Content = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  ${theme.fonts.Pretendard_caption3_regular_12}
  ${theme.colors.gr_1}
`;
