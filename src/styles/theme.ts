import { css } from 'styled-components';

const colors = {
  main: '#7C00DE',
  second: '#9F62ED',
  un_main: '#D5ACF5',
  fourth: '#F6EBFF',
  bg_color: '#FDFCFF',
  head_color: '#131313',
  paragraph: '#181818',
  gr_1: '#363636',
  gr_2: '#7B7B7B',
  gr_3: '#DCDCDC',
  gr_4: '#EAEAEA',
  gr_5: '#F5F5F5',
  white: '#F8F8F8',
  ff: '#FFFFFF',
};

const fonts = {
  Pretendard_Title1_ExtraBold_24: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 2.2rem;
    text-align: center;
    letter-spacing: 0.08rem;
  `,
  Ptretendard_Subtitle1_Bold_18: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.1rem;
  `,
  Pretendard_Subtitle2_Semibold_18: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 2.1rem;
  `,
  Pretendard_Paragraph_Medium_18: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: center;
    letter-spacing: 0.08rem;
  `,
  Pretendard_Caption1_Medium_16: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  `,
  Pretendard_Caption2_regular_16: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.9rem;
  `,
  Pretendard_caption3_regular_12: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  `,
};

const theme = {
  colors,
  fonts,
};
export default theme;
