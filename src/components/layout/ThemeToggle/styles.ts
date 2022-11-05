import styled, { css, keyframes } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { font, borderRadius } = designSystemOptions

const spinIcon = keyframes`
  from {
    transform: rotate(-180deg);
  }
`

const darkStyle = css`
  color: white;

  &:hover {
    &::before {
      background: ${props => props.theme.colors.main.primary.normal};
    }
  }
`

export const Wrapper = styled.button`
  height: ${font.sizes.xlarger};
  width: ${font.sizes.xlarger};
  font-size: ${font.sizes.small};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius.circle};

  background: rgba(255, 255, 255, 0.25);
  border: 1px solid ${props => props.theme.colors.text}20;
  color: #f6a43b;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  z-index: 1;

  svg {
    animation: ${spinIcon} 0.5s ease-in-out;
    transition: 0.15s;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: #f6a43b;
    border-radius: ${borderRadius.circle};
    opacity: 0;
    transform: scale(0.3);
    transition: 0.2s;
  }

  &:hover {
    color: white;

    svg {
      transform: rotate(-45deg) scale(1.2);
    }

    &::before {
      opacity: 1;
      transform: initial;
    }
  }

  ${props => props.theme.name === 'dark' && darkStyle}
`
