import React from 'react';
import MyBackButton from '../back';
import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

// 별점 기능
function Star({ selected = false, onSelect }) {
  return (
    <div onClick={onSelect}>{selected ? <span>★</span> : <span>☆</span>}</div>
  );
}

function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleSelect = index => {
    setSelectedStars(index + 1);
  };
  return (
    <div>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => handleSelect(i)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

// 달력
const datePicker = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hairDate, setHairDate] = useState(new Date());
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy년 MM월 dd일"
      selected={hairDate}
      onChange={date => setHairDate(date)}
      selectsStart
    />
  );
};

const reviewPage = () => {
  // 드롭다운
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState('시술 종류 선택');

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  // 이미지
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [imgFile, setImgFile] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <>
      {/* 뒤로가기 */}
      <MyBackButton />
      <h2>리뷰작성</h2>
      {/* 검색 선택 지도 */}
      <input type="text" placeholder="미용실을 검색해보세요." />
      <h2>시술 만족도</h2>
      {/* 선 */}
      {/* 별점 */}
      <StarRating totalStars={5} />
      <h2>시술 날짜</h2>
      {/* 날짜 드롭다운 + 달력 */}
      <datePicker />
      {/* 선 */}
      <h2>디자이너</h2>
      <input type="text" placeholder="디자이너 이름을 입력해주세요." />
      {/* 선 */}
      <h2>시술 종류</h2>
      <p>중복 선택 가능</p>
      {/* 드롭다운 시술 종류 */}
      {/* 드롭다운 select option사용하고 드롭다운 필요한 것마다 종류에 맞게 option 자동 생성하게 하고싶다 */}
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="시술 종류 선택">시술 종류 선택</option>
        <option value="컷트">컷트</option>
        <option value="펌">펌</option>
        <option value="염색">염색</option>
      </select>
      {/* 시술 클릭시 클릭한 시술 종류 리스트로 생기게 */}
      {/* 선 */}
      <h2>헤어 스타일</h2>
      <p>중복 선택 가능</p>
      {/* 드롭다운 헤어 스타일 종류 */}
      {/* 선 */}
      <h2>머리 기장</h2>
      {/* 드롭다운 기장 종류 */}
      {/* 선 */}
      <h2>시술 가격</h2>
      <input type="text" placeholder="가격 입력" />
      {/* 선 */}
      <h2>추가 내용</h2>
      {/* 사진 추가 */}
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        ref={imgRef}
      />
      {/* 업로드 된 이미지 미리보기 */}
      <img
        src={imgFile ? imgFile : `/images/icon/user.png`}
        alt="프로필 이미지"
      />
      ;
      <textarea
        name="reviewComment"
        id="reviewComment"
        cols="30"
        rows="10"
        placeholder="내용 추가하기"
      />
      <button>작성 완료</button>
    </>
  );
};

export default reviewPage;
