import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Fonts from './Fonts';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  ${reset}
  ${Fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  body,
  html {
    font-family: 'Pretendard';
    cursor: default;
    width: 100%; /* 100%로 설정하여 실제 화면 크기에 맞게 */
    height: 100%; /* 화면 높이를 100%로 설정 */
    overflow-x: hidden; /* 수평 스크롤 방지 */
  }

  input {
    background: none;
    outline: none;
  }
`;

export default GlobalStyles;
