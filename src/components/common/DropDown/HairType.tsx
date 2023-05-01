import React, { useState } from 'react';

type HairType = 'SELECT' | 'CUT' | 'PERM' | 'COLOR' | 'MAGIC';

function HairTypeDropdown() {
  const [hairType, setHairType] = useState<HairType>('SELECT');

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setHairType(event.target.value as HairType);
  }

  return (
    <select value={hairType} onChange={handleSelect}>
      <option value="SELECT">시술 종류 선택</option>
      <option value="CUT">커트</option>
      <option value="PERM">펌</option>
      <option value="COLOR">염색</option>
      <option value="MAGIC">매직</option>
    </select>
  );
}

export default HairTypeDropdown;
