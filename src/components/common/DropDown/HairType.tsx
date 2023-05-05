import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

type HairType = 'SELECT' | 'CUT' | 'PERM' | 'COLOR' | 'MAGIC';

function HairTypeDropdown() {
  const [hairType, setHairType] = useState<HairType>('SELECT');

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setHairType(event.target.value as HairType);
  }

  return (
    <Drop value={hairType} onChange={handleSelect}>
      <option value="SELECT">시술 종류 선택</option>
      <option value="CUT">커트</option>
      <option value="PERM">펌</option>
      <option value="COLOR">염색</option>
      <option value="MAGIC">매직</option>
    </Drop>
  );
}

export default HairTypeDropdown;

const Drop = styled.select`
  width: auto;
  height: 35px;
  background-color: ${theme.colors.fourth};
  color: ${theme.colors.gr_2};
  border-radius: 10px;
  padding: 9px 15px 10px 15px;
  border: none;
`;
