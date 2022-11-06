import styled from 'styled-components'

export const Wrapper = styled.span`
  display: inline-block;

  path {
    stroke: ${props => props.theme.colors.main.primary.normal};
  }
`
