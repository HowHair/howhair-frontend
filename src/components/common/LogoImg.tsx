import React, { CSSProperties } from 'react';

const LogoImgLoad = () => {
  const imgStyle: CSSProperties = {
    width: '80px',
    height: '42px',
  };
  return <img src="/images/Howhair_Logo.png" alt="로고" style={imgStyle} />;
};

export default LogoImgLoad;
