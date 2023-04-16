import styled from 'styled-components';
import theme from '../../../styles/theme';

const Line = () => {
  return (
    <LineWrapper>
      <hr />
    </LineWrapper>
  );
};

export default Line;

const LineWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${theme.colors.gr_3}
  height: 1px;
  border: 0;
`;
