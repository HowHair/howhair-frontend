import styled from 'styled-components';
import theme from '../../styles/theme';

export const Bar = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.un_main};
`;
