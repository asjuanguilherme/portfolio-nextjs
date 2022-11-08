import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'
import CircleBackgroundAnimation from '../CircleBackgroundAnimation'

const { font, spacing, borderRadius, buttonSizes } = designSystemOptions

type Props = {
  color: 'primary' | 'yellow' | 'white' | 'translucent'
  onlyIcon: boolean
}

const handleButtonColor = (color: Props['color']) => {
  const colors = {
    white: {
      normal: {
        background: 'white',
        text: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.primary.normal,
        border: 'initial'
      },
      hover: {
        background: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.primary.normal,
        text: 'white',
        border: 'initial'
      }
    },
    primary: {
      normal: {
        background: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.primary.normal,
        text: 'white',
        border: 'initial'
      },
      hover: {
        background: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.primary.dark,
        text: 'white',
        border: 'initial'
      }
    },
    yellow: {
      normal: {
        background: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.yellow.normal,
        text: 'white',
        border: 'initial'
      },
      hover: {
        background: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.yellow.dark,
        text: 'white',
        border: 'initial'
      }
    },
    translucent: {
      normal: {
        background: 'rgba(255,255,255,.15)',
        text: 'white',
        border: '1px solid rgba(255,255,255,.15)'
      },
      hover: {
        background: 'white',
        text: (props: ThemedStyledProps<Props, DefaultTheme>) =>
          props.theme.colors.main.primary.normal,
        border: '1px solid rgba(255,255,255,.15)'
      }
    }
  }

  return css`
    background: ${colors[color].normal.background};
    color: ${colors[color].normal.text};
    border: ${colors[color].normal.border};

    overflow: hidden;
    position: relative;
    z-index: 1;

    ${CircleBackgroundAnimation} {
      &::after {
        background: ${colors[color].hover.background};
      }
    }

    ${screens.tablet} {
      &:hover {
        color: ${colors[color].hover.text};
        border: ${colors[color].hover.border};

        ${CircleBackgroundAnimation} {
          width: 100%;
        }
      }
    }
  `
}

const onlyIconStyles = css<Props>`
  padding: 0;
  width: ${buttonSizes.default};

  svg {
    margin: 0;
    font-size: ${font.sizes.large};
  }
`

export const Wrapper = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${buttonSizes.default};
  padding: 0 ${spacing.components.large};
  font-weight: ${font.weight.semibold};
  font-size: ${font.sizes.small};
  text-transform: capitalize;
  text-decoration: none;

  border-radius: ${borderRadius.pill};
  cursor: pointer;

  svg {
    margin-right: ${spacing.components.small};
  }

  ${({ color }) => handleButtonColor(color)}
  ${props => props.onlyIcon && onlyIconStyles}
`
