import React from 'react';
import { Style1 } from '../assets/images';
import { Logo } from '../assets/icons';

const HairShop = () => {
  return (
    <div>
      HairShop 페이지
      <Logo />
      <img src={Style1} alt="style1" />
    </div>
  );
};

export default HairShop;
