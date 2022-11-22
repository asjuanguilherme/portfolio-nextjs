import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { transition } = designSystemOptions

export const Wrapper = styled.button<{
  menuOpened: boolean
  forTransparentBackground: boolean
}>`
  background: unset;
  transition: ${transition.slow};
  path {
    stroke: currentColor;
  }
  cursor: pointer;
  margin-left: auto;

  color: ${props =>
    props.forTransparentBackground
      ? 'white'
      : props.menuOpened
      ? props.theme.colors.main.primary.normal
      : props.theme.colors.title};
`
