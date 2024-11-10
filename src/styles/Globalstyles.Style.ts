import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  body,
  html {
    font-family: 'Pretendard';
  }

  input {
    background: none;
    outline: none;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-style: normal;
    src: url(./fonts/Pretendard-Light.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: url(./fonts/Pretendard-Regular.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: normal;
    src: url(./fonts/Pretendard-Medium.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: normal;
    src: url(./fonts/Pretendard-SemiBold.woff) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-style: normal;
    src: url(./fonts/Pretendard-Bold.woff) format('woff');
  }
`;

export default GlobalStyles;
