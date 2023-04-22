import React, { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import theme from '../../styles/theme';

const buttonStyle: CSSProperties = {
  /* 수평정렬, 3개의 button을 각각 30% width만큼 할당 */
  textAlign: 'center',
  float: 'left',
  width: '33%',

  /* 세로길이 설정 */
  height: '91px',
  lineHeight: '91px',
};

const BottomBar = () => {
  return (
    <Nav>
      <div style={buttonStyle}>
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div style={buttonStyle}>
        <FontAwesomeIcon icon={faScissors} />
      </div>
      <div style={buttonStyle}>
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
    </Nav>
  );
};

export default BottomBar;

const Nav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45px;
  overflow: hidden;
  border-top: 1px solid ${theme.colors.un_main};
`;
