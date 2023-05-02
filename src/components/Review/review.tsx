import React from 'react';
import Line from '../common/Line/Line';
import HairTypeDropdown from '../common/DropDown/HairType';
import MyDatePicker from '../common/DropDown/Calendar';
import { ButtomButton } from '../common/Button/ButtomButton';
import StarRating from '../common/Button/StarPoint';
import MyBackButton from '../common/back';

const reviewPage = () => {
  return (
    <>
      {/* 뒤로가기 */}
      <MyBackButton />
      <h2>리뷰작성</h2>
      {/* 검색 선택 지도 */}
      <input type="text" placeholder="미용실을 검색해보세요." />
      <h2>시술 만족도</h2>
      {/* 별점 */}
      <StarRating />
      <Line />
      <h2>시술 날짜</h2>
      {/* 날짜 드롭다운 + 달력 */}
      <MyDatePicker />
      <Line />
      <h2>디자이너</h2>
      <input type="text" placeholder="디자이너 이름을 입력해주세요." />
      <Line />
      <h2>시술 종류</h2>
      <p>(중복 선택 가능)</p>
      {/* 드롭다운 시술 종류 */}
      <HairTypeDropdown />
      {/* 시술 클릭시 클릭한 시술 종류 리스트로 생기게 */}
      <Line />
      <h2>헤어 스타일</h2>
      <p>(중복 선택 가능)</p>
      {/* 드롭다운 헤어 스타일 종류 */}
      <Line />
      <h2>머리 기장</h2>
      {/* 드롭다운 기장 종류 */}
      <Line />
      <h2>시술 가격</h2>
      <input type="text" placeholder="가격 입력" />
      <Line />
      <h2>추가 내용</h2>
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
