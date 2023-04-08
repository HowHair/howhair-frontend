import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../styles/theme';

type Props = {
  img: string;
  title: string;
  content: string;
  type: string;
  price: string;
};

export const Card = ({ img, title, content, type, price }: Props) => {
  const navigate = useNavigate();
  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={img} alt={img} />
      </ImgWrapper>
      <div>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Type>{type}</Type>
        <Price>{price}</Price>
      </div>
    </CardWrapper>
  );
};

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
