import React from 'react';
import Line from '../common/Line/Line';
import HairTypeDropdown from '../common/DropDown/HairType';
import MyDatePicker from '../common/DropDown/Calendar';
import { ButtomButton } from '../common/Button/ButtomButton';
import StarRating from '../common/Button/StarPoint';
import MyBackButton from '../common/back';
import { Header } from '../common/Header';
import styled from 'styled-components';
import theme from '../../styles/theme';

const reviewPage = () => {
  return (
    <>
      {/* 뒤로가기 */}
      <Header title="리뷰 작성" />
      {/* 검색 선택 지도 */}
      <input type="text" placeholder="미용실을 검색해보세요." />
      <Menu>시술 만족도</Menu>
      {/* 별점 */}
      <StarRating />
      <Line />
      <Menu>시술 날짜</Menu>
      {/* 날짜 드롭다운 + 달력 */}
      <MyDatePicker />
      <Line />
      <Menu>디자이너</Menu>
      <input type="text" placeholder="디자이너 이름을 입력해주세요." />
      <Line />
      <Flex>
        <Menu>시술 종류</Menu>
        <Repet>(중복 선택 가능)</Repet>
        {/* 드롭다운 시술 종류 */}
      </Flex>
      <HairTypeDropdown />
      <Line />
      <Flex>
        <Menu>헤어 스타일</Menu>
        <Repet>(중복 선택 가능)</Repet>
        {/* 드롭다운 헤어 스타일 종류 */}
      </Flex>
      <Line />
      <Menu>머리 기장</Menu>
      {/* 드롭다운 기장 종류 */}
      <Line />
      <Menu>시술 가격</Menu>
      <input type="text" placeholder="가격 입력" />
      <Line />
      <Menu>추가 내용</Menu>
      {/* 사진 추가 */}
      {/* 내용 추가 */}
      <textarea
        name="reviewComment"
        id="reviewComment"
        cols={30}
        rows={10}
        placeholder="내용 추가하기"
      />
      <ButtomButton>작성 완료</ButtomButton>
    </>
  );
};

export default reviewPage;

const Menu = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  ${theme.fonts.Pretendard_Subtitle2_Semibold_18}
  ${theme.colors.head_color}
`;

const Repet = styled.div`
  padding-top: 4px;
  margin-left: 3px;
  margin-top: 10px;
  margin-bottom: 10px;
  ${theme.fonts.Pretendard_caption3_regular_12}
  ${theme.colors.gr_2}
`;

const Flex = styled.div`
  display: flex;
`;
