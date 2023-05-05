import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

type HairType =
  | 'SELECT'
  | 'UNDEREAR'
  | 'OVEREAR'
  | 'EARTOSHOULDER'
  | 'SHOULDERTOMORE';

function HairLen() {
  const [hairType, setHairType] = useState<HairType>('SELECT');

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setHairType(event.target.value as HairType);
  }

  return (
    <Drop value={hairType} onChange={handleSelect}>
      <option value="SELECT">헤어 기장 선택</option>
      <option value="UNDEREAR">귀 밑</option>
      <option value="OVEREAR">귀 위</option>
      <option value="EARTOSHOULDER">귀~어깨</option>
      <option value="SHOULDERTOMORE">어깨~그 이상</option>
    </Drop>
  );
}

export default HairLen;

const Drop = styled.select`
  width: auto;
  height: 35px;
  background-color: ${theme.colors.fourth};
  color: ${theme.colors.gr_2};
  border-radius: 10px;
  padding: 9px 15px 10px 15px;
  border: none;
`;
