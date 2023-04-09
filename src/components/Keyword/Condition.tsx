import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { TuneIcon } from '../../assets/icons';
import { KEYWORD } from '../../constant';
import theme from '../../styles/theme';
import { Bar } from '../common/Bar';
import { Button } from '../common/Button';
import { ButtomButton } from '../common/Button/ButtomButton';
import { Card } from '../common/Card';
import { Header } from '../common/Header';

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

const Condition = ({
  setModal,
  condition,
  setCondition,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
  condition: ConditionProps;
  setCondition: Dispatch<SetStateAction<ConditionProps>>;
}) => {
  const [searchParams] = useSearchParams();
  const getKeywordName = (keyword: string) =>
    KEYWORD.find(item => item.keyword === keyword)?.name;

  const onClick = (key: string, value: string | number) => {
    setCondition({ ...condition, [key]: value });
  };

  const onChangeInput = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (key === 'minPrice' && value > condition.maxPrice) return;
    if (key === 'maxPrice' && value < condition.minPrice) return;
    setCondition({ ...condition, [key]: value });
  };

  return (
    <Container>
      <Header
        title={getKeywordName(`${searchParams.get('name')}`)}
        onClickBack={() => setModal(false)}
      />
      <div>
        <ContentWrapper>
          <Tag>성별</Tag>
          <div>
            <Button
              selected={condition.gender === 'FEMALE'}
              onClick={() => onClick('gender', 'FEMALE')}
              css={ButtonCss}
            >
              여성
            </Button>
            <Button
              selected={condition.gender === 'MALE'}
              onClick={() => onClick('gender', 'MALE')}
            >
              남성
            </Button>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <Tag>기장</Tag>
          <div>
            <Button
              selected={condition.hairLength === 1}
              onClick={() => onClick('hairLength', 1)}
              css={ButtonCss}
            >
              귀 위
            </Button>
            <Button
              selected={condition.hairLength === 2}
              onClick={() => onClick('hairLength', 2)}
              css={ButtonCss}
            >
              귀 밑
            </Button>
            <Button
              selected={condition.hairLength === 3}
              onClick={() => onClick('hairLength', 3)}
              css={ButtonCss}
            >
              귀 ~ 어깨
            </Button>
            <Button
              selected={condition.hairLength === 4}
              onClick={() => onClick('hairLength', 4)}
            >
              어깨 ~ 그 이상
            </Button>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <Tag>곱슬 정도</Tag>
          <div>
            <Button
              selected={condition.curly === 1}
              onClick={() => onClick('curly', 1)}
              css={ButtonCss}
            >
              곱슬
            </Button>
            <Button
              selected={condition.curly === 2}
              onClick={() => onClick('curly', 2)}
              css={ButtonCss}
            >
              반곱슬
            </Button>
            <Button
              selected={condition.curly === 3}
              onClick={() => onClick('curly', 3)}
            >
              직모
            </Button>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <Tag>헤어스타일</Tag>
          <div>
            <Button>헤어스타일 선택</Button>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <Tag>가격대</Tag>
          <PriceInputWrapper>
            <div>
              <Input
                type="number"
                value={condition.minPrice}
                onChange={e => onChangeInput('minPrice', e)}
              />
              원
            </div>
            <div>~</div>
            <div>
              <Input
                type="number"
                value={condition.maxPrice}
                onChange={e => onChangeInput('maxPrice', e)}
              />
              원
            </div>
          </PriceInputWrapper>
        </ContentWrapper>
      </div>
      <ButtomButton>조건 설정 완료</ButtomButton>
    </Container>
  );
};

export default Condition;

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Tag = styled.div`
  ${theme.fonts.Pretendard_Caption2_regular_16}
  margin-bottom: 6px;
`;

const ButtonCss = css`
  margin-right: 6px;
`;

const ContentWrapper = styled.div`
  margin-top: 12px;
`;

const PriceInputWrapper = styled.div`
  display: flex;
  background-color: ${theme.colors.gr_4};
  padding: 12px;
  ${theme.borderRadius.button}
  font-weight: 600;
`;

const Input = styled.input`
  width: 100px;
  border: none;
  outline: none;
`;
