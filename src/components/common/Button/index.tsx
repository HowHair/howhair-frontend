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
  /**
   * 선택되었는지
   */
  selected?: boolean;
}

export const Button = ({
  backgroundColor,
  label,
  css,
  children,
  selected,
  ...props
}: ButtonProps) => {
  return (
    <CustomButton
      style={{ backgroundColor }}
      selected={selected}
      css={css}
      {...props}
    >
      {label ? label : children}
    </CustomButton>
  );
};

export const CustomButton = styled.button<{
  css: CSSProp | undefined;
  selected?: boolean;
}>`
  position: relative;
  text-align: center;
  cursor: pointer;
  padding: 4px 6px;
  ${({ css }) => css};
  background-color: ${({ selected }) =>
    selected ? theme.colors.un_main : theme.colors.gr_4};
  ${theme.borderRadius.button}
  border: none;
`;
