import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { TuneIcon } from '../../assets/icons';
import { KEYWORD } from '../../constant';
import theme from '../../styles/theme';
import { Bar } from '../common/Bar';
import { Card } from '../common/Card';
import { Header } from '../common/Header';
import Condition from './Condition';

const POPULAR_CONTENT = [
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

type ConditionProps = {
  gender: 'MALE' | 'FEMALE';
  hairLength: number;
  curly: number;
  hairStyle: string[];
  minPrice: number;
  maxPrice: number;
};

const KeywordComponent = () => {
  const [searchParams] = useSearchParams();
  const getKeywordName = (keyword: string) =>
    KEYWORD.find(item => item.keyword === keyword)?.name;
  const [modal, setModal] = useState<boolean>(false);
  const [condition, setCondition] = useState<ConditionProps>({
    gender: 'FEMALE',
    hairLength: 1,
    curly: 1,
    hairStyle: [],
    minPrice: 0,
    maxPrice: 100000,
  });

  return (
    <Container>
      <Header title={getKeywordName(`${searchParams.get('name')}`)} />
      <ConditionWrapper onClick={() => setModal(true)}>
        <IconWrapper>
          <TuneIcon />
        </IconWrapper>
        <div>세부 조건 설정하기</div>
      </ConditionWrapper>
      {POPULAR_CONTENT.map((item, index) => {
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
      {modal && (
        <Condition
          setModal={setModal}
          condition={condition}
          setCondition={setCondition}
        />
      )}
    </Container>
  );
};

export default KeywordComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  margin-top: 12px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  margin-right: 4px;
`;

const ConditionWrapper = styled.div`
  width: 100%;
  display: flex;
  justfy-content: start;
  align-items: center;
  background-color: ${theme.colors.fourth};
  ${theme.borderRadius.button}
  padding: 8px;
  cursor: pointer;
`;
