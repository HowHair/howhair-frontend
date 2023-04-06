import React from 'react';

const infRev = () => {
  return (
    <>
      <h2>내 정보 수정</h2>
      <hr />
      <h2>연결된 카카오 계정 ${}님</h2>
      <hr />
      <h2>My Type</h2>
      <button>수정</button>
      {/* 수정 버튼 클릭시 수정할 수 있는 드롭다운 나타내기 */}
      {/* 로그인 시 선택한 정보 가져오기 */}
      <h2>성별</h2>
      {/* 성별은 수정 X */}
      <p></p>
      <h2>머리 기장</h2>
      {/* 드롭다운 */}
      <h2>곱슬 정도</h2>
      {/* 드롭다운 */}
      {/* 하단바는 어떻게 구현할지? */}
    </>
  );
};

export default infRev;
