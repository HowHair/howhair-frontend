import React from 'react';
import styled from 'styled-components';
import { Logo, MoreIcon } from '../../assets/icons';
import theme from '../../styles/theme';

const KEYWORD = ['커트', '펌', '염색', '매직'];
const MY_THING = [
  { src: '/images/img1.jpg', hashtag: '#애쉬 바이올렛' },
  { src: '/images/img2.jpg', hashtag: '#옴브레' },
  { src: '/images/img3.jpg', hashtag: '#바디펌' },
];
const FAVORITE = [
  { src: '/images/img1.jpg', hashtag: '#애쉬 바이올렛' },
  { src: '/images/img2.jpg', hashtag: '#옴브레' },
  { src: '/images/img3.jpg', hashtag: '#바디펌' },
  { src: '/images/img1.jpg', hashtag: '#애쉬 바이올렛' },
];

const MainComponent = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ContentWrapper>
        <KeywordWrapper>
          {KEYWORD.map((keyword, index) => {
            return <Keyword key={index}>{keyword}</Keyword>;
          })}
        </KeywordWrapper>
        <MyThingWrapper>
          <TitleWrapper>
            <div>내 취향 스타일</div>
            <div>
              <MoreIcon />
            </div>
          </TitleWrapper>
          <MyThingContentWrapper>
            {MY_THING.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <Img src={item.src} alt={item.hashtag} />
                  </div>
                  <MyThingText>{item.hashtag}</MyThingText>
                </div>
              );
            })}
          </MyThingContentWrapper>
        </MyThingWrapper>
        <FavoriteWrapper>
          <TitleWrapper>
            <div>인기 많은 스타일</div>
            <div>
              <MoreIcon />
            </div>
          </TitleWrapper>
          <FavoriteContentWrapper>
            {FAVORITE.map((item, index) => {
              return (
                <FavoriteContent key={index}>
                  <FavoriteImg src={item.src} alt={item.hashtag} />
                  <FavoriteText>{item.hashtag}</FavoriteText>
                </FavoriteContent>
              );
            })}
          </FavoriteContentWrapper>
        </FavoriteWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default MainComponent;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: ${theme.colors.ff};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.gr_5};
`;

const ContentWrapper = styled.div`
  padding: 12px;
`;

const KeywordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Keyword = styled.button`
  ${theme.fonts.Pretendard_Caption2_regular_16}
  width: 70px;
  border: none;
  border-radius: 6px;
  background-color: ${theme.colors.ff};
`;

const MyThingWrapper = styled.div`
  margin-top: 12px;
  padding: 12px;
  border-radius: 6px;
  background-color: ${theme.colors.ff};
`;

const MyThingContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyThingText = styled.div`
  margin-top: 4px;
  font-size: 6px;
`;

const Img = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
`;

const FavoriteWrapper = styled.div`
  margin-top: 12px;
  padding: 12px;
  border-radius: 6px;
  background-color: ${theme.colors.ff};
`;

const FavoriteContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
`;

const FavoriteContent = styled.div`
  position: relative;
`;

const FavoriteImg = styled.img`
  width: 128px;
  height: 180px;
  object-fit: cover;
`;

const FavoriteText = styled.div`
  position: absolute;
  bottom: 6px;
  left: 6px;
  padding: 4px;
  font-size: 6px;
  border-radius: 4px;
  background-color: ${theme.colors.gr_1};
  color: ${theme.colors.ff};
`;

const TitleWrapper = styled.div`
  ${theme.fonts.Pretendard_Subtitle2_Semibold_18}
  display: flex;
  justify-content: space-between;
`;
