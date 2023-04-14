import React from 'react';
import { Header } from '../common/Header';
import { Bar } from '../common/Bar';
import styled from 'styled-components';
import { Card } from '../common/Card';

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

const bookMark = () => {
  return (
    <Container>
      <Header title="북마크" />
      <Bar />
      {MY_THING_CONTENT.map((item, index) => {
        return (
          <CardContainer key={index}>
            <Card
              img={item.img}
              title={item.title}
              content={item.content}
              type={item.type}
              price={item.price}
            />
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default bookMark;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const CardContainer = styled.div`
  margin-top: 12px;
`;
