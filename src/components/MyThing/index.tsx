import styled from 'styled-components';
import theme from '../../styles/theme';
import { Bar } from '../common/Bar';
import { Header } from '../common/Header';

const MY_THING_CONTENT = [
  {
    title: '가나다라헤어 홍대2호점',
    content: '단발 S컬펌/발레아쥬 염색',
    type: '펌, 염색',
    price: '20-30만원',
    img: '/images/img1.jpg',
  },
  {
    title: '가나다라헤어',
    content: '단발 S컬펌/발레아쥬 염색',
    type: '펌, 염색',
    price: '20-30만원',
    img: '/images/img3.jpg',
  },
  {
    title: '가나다라헤어 홍대2호점',
    content: '단발 S컬펌/발레아쥬 염색',
    type: '펌, 염색',
    price: '20-30만원',
    img: '/images/img2.jpg',
  },
  {
    title: '가나다라헤어 홍대2123호점',
    content: '단발 S컬펌/발레아쥬 염색',
    type: '펌, 염색',
    price: '20-30만원',
    img: '/images/img1.jpg',
  },
];

const MyThingComponent = () => {
  return (
    <Container>
      <Header title="내 취향 스타일" />
      <Bar />
      {MY_THING_CONTENT.map((item, index) => {
        return (
          <CardContainer key={index}>
            <CardWrapper>
              <ImgWrapper>
                <Img src={item.img} alt={item.img} />
              </ImgWrapper>
              <div>
                <Title>{item.title}</Title>
                <Content>{item.content}</Content>
                <Type>{item.type}</Type>
                <Price>{item.price}</Price>
              </div>
            </CardWrapper>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default MyThingComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const Img = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  ${theme.borderRadius.img}
`;

const ImgWrapper = styled.div`
  margin-right: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  ${theme.borderRadius.card}
  background-color: ${theme.colors.gr_5};
  width: 340px;
  padding: 12px;
`;

const CardContainer = styled.div`
  margin-top: 12px;
`;

const Title = styled.div`
  ${theme.fonts.Pretendard_Caption1_Medium_16}
  font-weight: 600;
`;

const Content = styled.div`
  margin-top: 18px;
`;

const Type = styled.div`
  margin-top: 12px;
  color: ${theme.colors.main};
`;

const Price = styled.div`
  margin-top: 12px;
`;
