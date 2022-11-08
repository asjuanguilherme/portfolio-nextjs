import styled, { css, keyframes } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'
import Button, { ButtonProps } from 'components/shared/Button'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

const { transition } = designSystemOptions

const spinIcon = keyframes`
  from {
    transform: rotate(-180deg);
  }
`

export const Wrapper = styled(Button)<{
  themeColor: ButtonProps['color']
  forTransparentBackground: boolean
}>`
  transition: ${transition.default};
  position: relative;
  z-index: 1;
  overflow: hidden;

  svg {
    animation: ${spinIcon} 0.5s ease-in-out;
    transition: ${transition.fast};
  }

  &:hover {
    svg {
      transform: rotate(-45deg) scale(1.2);
    }
  }

  ${props =>
    !props.forTransparentBackground &&
    props.theme.name === 'light' &&
    css`
      ${screens.tablet} {
        color: ${props => props.theme.colors.main.yellow.normal};
        border-color: rgba(0, 0, 0, 0.05);

        ${CircleBackgroundAnimation} {
          &::after {
            background-color: ${props => props.theme.colors.main.yellow.normal};
          }
        }

        &:hover {
          color: white;
        }
      }
    `}
`
