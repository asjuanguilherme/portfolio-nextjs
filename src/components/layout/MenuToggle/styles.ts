import styled from 'styled-components'

export const Wrapper = styled.button<{
  menuOpened: boolean
  forTransparentBackground: boolean
}>`
  background: unset;
  transition: 0.3s;
  path {
    stroke: currentColor;
  }
  cursor: pointer;

  color: ${props =>
    props.forTransparentBackground
      ? 'white'
      : props.menuOpened
      ? props.theme.colors.main.primary.normal
      : props.theme.colors.title};
`
