import styled, { css } from 'styled-components'
import DefaultContainer from 'components/shared/Container'
import designSystemOptions from 'styles/designSystemOptions'

const { transition, zIndex, spacing } = designSystemOptions

export const Container = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const transparentStyle = css`
  background: transparent;
  border-color: transparent;
`

export const Wrapper = styled.header<{
  showTransparentHeader: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.navbar};
  width: 100%;
  padding: ${spacing.components.large} 0;
  background: ${props => props.theme.colors.layers[2].background};
  border: 1px solid ${props => props.theme.colors.layers[2].border};
  transition: ${transition.default};

  ${props => props.showTransparentHeader && transparentStyle}
`
