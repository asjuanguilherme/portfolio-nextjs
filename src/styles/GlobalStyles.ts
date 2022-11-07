import { createGlobalStyle } from 'styled-components'
import { screens } from './screens'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing, font } = designSystemOptions

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
    font-weight: ${font.weight.normal};
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: ${spacing.components.medium};

    ${screens.tablet} {
      margin-bottom: ${spacing.components.large};
    }
  }

  p {
    margin-bottom: ${spacing.components.medium};
    line-height: 1.5em;
  } 

  strong {
    font-weight: ${font.weight.semibold};
  }
`

export default GlobalStyles
