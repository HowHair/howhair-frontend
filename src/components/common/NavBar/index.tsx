import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { HairShopIcon, HomeIcon, MyPageIcon } from '../../../assets/icons';
import theme from '../../../styles/theme';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navbar 제외 페이지
  if (location.pathname === '' || location.pathname === '/login') return null;
  return (
    <Container>
      <Bar />
      <Wrapper>
        <IconWrapper onClick={() => navigate('/hairShop')}>
          <HairShopIcon />
        </IconWrapper>
        <IconWrapper onClick={() => navigate('/main')}>
          <HomeIcon />
        </IconWrapper>
        <IconWrapper onClick={() => navigate('/myPage')}>
          <MyPageIcon />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 0px;
  width: 100%;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: 40px;
  padding: 16px 40px;
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.un_main};
`;
