import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BackIcon } from '../../assets/icons';
import theme from '../../styles/theme';

export const Header = ({ title }: { title: string | undefined }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IconWrapper onClick={() => navigate(-1)}>
        <BackIcon />
      </IconWrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 12px 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0px;
  cursor: pointer;
`;

const Title = styled.div`
  ${theme.fonts.Ptretendard_Subtitle1_Bold_18}
`;
