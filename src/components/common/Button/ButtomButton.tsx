import React from 'react';
import styled, { CSSProp } from 'styled-components';
import theme from '../../../styles/theme';

interface ButtonProps {
  /**
   * 배경 색상
   */
  backgroundColor?: string;
  /**
   * 버튼 내용(storybook에서만 사용)
   */
  label?: string;
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  /**
   * 추가적인 styled-components CSSProp
   */
  css?: CSSProp;
  /**
   * 버튼 내용
   */
  children?: React.ReactNode;
}

export const ButtomButton = ({
  backgroundColor,
  label,
  css,
  children,
  ...props
}: ButtonProps) => {
  return (
    <CustomButton style={{ backgroundColor }} css={css} {...props}>
      {label ? label : children}
    </CustomButton>
  );
};

export const CustomButton = styled.button<{ css: CSSProp | undefined }>`
  position: absolute;
  left: 20px;
  bottom: 12px;
  width: calc(100% - 40px);
  height: 52px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  padding: 0;
  ${({ css }) => css};
  background-color: ${theme.colors.second};
  color: ${theme.colors.ff}};
  ${theme.borderRadius.button}
  border: none;
`;
