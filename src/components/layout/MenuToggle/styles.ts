import styled from 'styled-components'

export const Wrapper = styled.button<{ menuOpened: boolean }>`
  background: unset;
  transition: 0.3s;
  path {
    stroke: currentColor;
  }
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.main.primary.normal};
  }

  color: ${props =>
    props.menuOpened
      ? props.theme.colors.main.primary.normal
      : props.theme.colors.title};
`
