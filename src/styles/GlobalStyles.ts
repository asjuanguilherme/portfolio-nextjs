import { createGlobalStyle } from 'styled-components'
import { screens } from './screens'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing, font } = designSystemOptions

const GlobalStyles = createGlobalStyle`
  :root {
    --swiper-theme-color: ${props => props.theme.colors.main.primary.normal};
    --swiper-navigation-size: ${font.sizes.xxlarger};
  }

  .swiper-wrapper {
    list-style: none;
  }

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
    overflow-x: hidden;
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: ${spacing.components.large};

    ${screens.tablet} {
      margin-bottom: ${spacing.components.larger};
    }
  }

  p {
    margin-bottom: ${spacing.components.medium};
    line-height: 1.5em;
  } 

  strong {
    font-weight: ${font.weight.semibold};
  }

  ${screens.tablet} {
    ::-webkit-scrollbar {
      width: 8px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.layers[0].border};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${({ theme }) =>
        theme.name === 'dark'
          ? theme.colors.layers[2].background
          : theme.colors.main.primary.normal};
      border: 1px solid ${({ theme }) =>
        theme.name === 'dark'
          ? theme.colors.layers[2].border
          : theme.colors.main.primary.normal};
    }
  }
`

export default GlobalStyles
