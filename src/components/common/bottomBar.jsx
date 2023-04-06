import React from 'react';

const navStyle = {
  overflow: 'hidden',
};

const buttonStyle = {
  /* 수평정렬, 3개의 button을 각각 30% width만큼 할당 */
  textAlign: 'center',
  float: 'left',
  width: '30%',

  /* 세로길이 설정 */
  height: '45px',
  lineHeight: '45px',
};

const bottomBar = () => {
  return (
    <nav className="wrapper" style={navStyle}>
      <div style={buttonStyle}>button1</div>
      <div style={buttonStyle}>button2</div>
      <div style={buttonStyle}>button3</div>
    </nav>
  );
};

export default bottomBar;
