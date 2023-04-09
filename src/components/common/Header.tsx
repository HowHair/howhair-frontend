import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BackIcon } from '../../assets/icons';
import theme from '../../styles/theme';

export const Header = ({
  title,
  onClickBack,
}: {
  title?: string | undefined;
  onClickBack?: () => void;
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    if (onClickBack !== undefined) {
      onClickBack();
      return;
    }
    navigate(-1);
  };
  return (
    <Wrapper>
      <IconWrapper onClick={onClick}>
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
