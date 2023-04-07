import styled from 'styled-components';

type Props = {
  children: JSX.Element;
};

export const Container = ({ children }: Props) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  position: relative;
  max-width: 32rem;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;
