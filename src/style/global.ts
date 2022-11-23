import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
  box-sizing: border-box;
  }
  html{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    @media screen and (max-width: 360px) {
      font-size: 2.7778vw;
    }
  }
`;

export default GlobalStyle;
