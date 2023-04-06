import React, { CSSProperties } from 'react';

const ImgLoad = () => {
  const imgStyle: CSSProperties = {
    width: '100px',
    height: '100px',
  };
  return <img src="/images/Howhair_Logo.png" alt="로고" style={imgStyle} />;
};

export default ImgLoad;
