import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${designSystemOptions.zIndex.preLoader};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.layers[1].background};
`
