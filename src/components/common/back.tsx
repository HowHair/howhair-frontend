import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const MyBackButton = () => {
  const backBtn: CSSProperties = {
    width: '26px',
    height: '26px',
  };
  const navigate = useNavigate(); //변수 할당시켜서 사용
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  return (
    <button onClick={onClickBtn} style={backBtn}>
      ⬅
    </button>
  );
};

export default MyBackButton;
