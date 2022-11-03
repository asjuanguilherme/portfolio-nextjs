import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    user-select: none;
    scroll-behavior: smooth;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    box-sizing: border-box;
  }
  
  html, body, #__next {
    height: 100%;
  }

`

export default GlobalStyles