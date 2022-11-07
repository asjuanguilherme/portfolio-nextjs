import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { font, spacing, borderRadius, buttonSizes } = designSystemOptions

const handleButtonColor = (color: ButtonProps['color']) => {
  if (color === 'white')
    return css`
      background: white;
      color: ${props => props.theme.colors.main.primary.normal};
    `

  return css`
    background: ${props => props.theme.colors.main.primary.normal};
    color: white;

    overflow: hidden;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      height: 0px;
      width: 0px;
      border-radius: ${designSystemOptions.borderRadius.circle};

      transition: 0.3s;
      transition-property: transform, height, width;
      transform: translate(-50%, -50%);
      background: ${props => props.theme.colors.main.primary.dark};
    }

    ${screens.tablet} {
      &:hover {
        &::before {
          height: 1.5rem;
          width: 1.5rem;
          transform: translate(-50%, -50%) scale(9);
        }
      }
    }
  `
}

const onlyIconStyles = css<ButtonProps>`
  padding: 0;
  width: ${buttonSizes.default};

  svg {
    margin: 0;
    font-size: ${font.sizes.large};
  }
`

export const Wrapper = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${buttonSizes.default};
  padding: 0 ${spacing.components.large};
  font-weight: ${font.weight.semibold};
  font-size: ${font.sizes.small};
  text-transform: capitalize;

  border-radius: ${borderRadius.pill};
  cursor: pointer;

  svg {
    margin-right: ${spacing.components.small};
  }

  ${({ color }) => handleButtonColor(color)}
  ${props => props.onlyIcon && onlyIconStyles}
`
