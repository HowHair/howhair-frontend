import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const StarRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={
                ratingValue <= (hover || rating || 0) ? '#ffc107' : '#e4e5e9'
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <Rating>만족도: {rating}</Rating>
    </div>
  );
};

export default StarRating;

const Rating = styled.div`
  margin-top: 10px;
  font-family: ${theme.fonts.Pretendard_caption3_regular_12};
`;
