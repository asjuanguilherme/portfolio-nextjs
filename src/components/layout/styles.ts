import styled from 'styled-components'

export const Main = styled.main`
  flex: 1;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${props => props.theme.colors.layers[0].background};
`
