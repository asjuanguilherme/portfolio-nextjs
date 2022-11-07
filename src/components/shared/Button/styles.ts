import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { font, spacing, borderRadius } = designSystemOptions

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
      height: 1rem;
      width: 1rem;
      border-radius: ${designSystemOptions.borderRadius.circle};

      transition: 0.5s;
      transition-property: transform;
      transform: translate(-50%, -50%);
      background: transparent;
    }

    ${screens.tablet} {
      &:hover {
        &::before {
          background: ${props => props.theme.colors.main.primary.dark};
          transform: translate(-50%, -50%) scale(9);
        }
      }
    }
  `
}

export const Wrapper = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.components.small} ${spacing.components.large};
  font-weight: ${font.weight.semibold};
  font-size: ${font.sizes.small};
  text-transform: capitalize;

  border-radius: ${borderRadius.pill};
  cursor: pointer;

  ${({ color }) => handleButtonColor(color)}
`
