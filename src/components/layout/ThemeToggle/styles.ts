import styled, { css, keyframes } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

const { font, borderRadius, spacing, transition } = designSystemOptions

const spinIcon = keyframes`
  from {
    transform: rotate(-180deg);
  }
`

const darkStyle = css`
  color: white;

  &:hover {
  }
`

export const Label = styled.span`
  margin-left: ${spacing.components.small};
  font-weight: ${font.weight.semibold};
`

export const Wrapper = styled.button<{
  onlyIcon?: boolean
  forTransparentBackground: boolean
}>`
  height: ${font.sizes.xlarger};
  width: ${props => (props.onlyIcon ? font.sizes.xlarger : 'auto')};
  font-size: ${font.sizes.small};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius.pill};
  padding: 0 ${spacing.components.small};
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid ${props => props.theme.colors.text}20;
  color: #f6a43b;
  flex-shrink: 0;
  cursor: pointer;
  transition: ${transition.default};
  position: relative;
  z-index: 1;
  overflow: hidden;

  svg {
    animation: ${spinIcon} 0.5s ease-in-out;
    transition: ${transition.fast};
  }

  ${CircleBackgroundAnimation} {
    &::after {
      background: ${props =>
        props.theme.name === 'dark'
          ? props.theme.colors.main.primary.normal
          : '#f6a43b'};
    }
  }

  &:hover {
    color: white;

    ${CircleBackgroundAnimation} {
      width: 101%;
    }

    svg {
      transform: rotate(-45deg) scale(1.2);
    }
  }

  ${props => props.theme.name === 'dark' && darkStyle}
  ${props =>
    props.forTransparentBackground &&
    css`
      color: white;
    `}
`
