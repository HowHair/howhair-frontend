import React from 'react';
// import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';

const LoginHairPerm = () => {
  return (
    <div>
      <p>Step 3</p>
      <p>곱슬 정도를 선택해주세요.</p>

      {/* radio button 사용해야하나? */}
      {/* 버튼 안에 이모지 넣기 */}
      <button type="button">곱슬</button>
      <button type="button">반곱슬</button>
      <button type="button">직모</button>

      <p>My page에서 수정 가능합니다.</p>
      <button type="button">추천 스타일 보러 가기</button>
    </div>
  );
};

export default LoginHairPerm;
