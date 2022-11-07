import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: Poppins, sans-serif;
  }

  html {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
`

export default GlobalStyles
