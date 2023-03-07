import React from 'react';
import styled from 'styled-components';

const LoginComponent = () => {
  return <StLoginWrapper>Login 컴포넌트</StLoginWrapper>;
};

export default LoginComponent;

const StLoginWrapper = styled.div`
  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.Pretendard_Title1_ExtraBold_24};
`;
