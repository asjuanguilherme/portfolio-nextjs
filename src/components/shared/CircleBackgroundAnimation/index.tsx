import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { transition, borderRadius } = designSystemOptions

const CircleBackgroundAnimation = styled.span<{ color?: string }>`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0%;
  z-index: -1;
  transition-duration: ${transition.default};
  transition-timing-function: ease-out;

  &::after {
    content: '';
    display: block;
    width: 100%;
    padding-top: 100%;
    border-radius: ${borderRadius.circle};
    transition-property: width;
    background: ${props => props.color};
  }
`
export default CircleBackgroundAnimation
