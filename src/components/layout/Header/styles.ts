import designSystemOptions from 'styles/designSystemOptions'
import styled from 'styled-components'
import DefaultContainer from 'components/shared/Container'

export const Container = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${designSystemOptions.zIndex.navbar};
  width: 100%;
  padding: ${designSystemOptions.spacing.components.large} 0;
  background: ${props => props.theme.colors.layers[2].background};
`
