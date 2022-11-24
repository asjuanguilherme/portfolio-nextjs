import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { transition, zIndex, layout } = designSystemOptions

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
  position: fixed;
  z-index: ${zIndex.navbar};
  top: ${layout.gutter};
  right: ${layout.gutter};

  color: ${props =>
    props.forTransparentBackground
      ? 'white'
      : props.menuOpened
      ? 'white'
      : props.theme.colors.title};
`
