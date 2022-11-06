import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing } = designSystemOptions

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${spacing.components.medium};
`

export const Wrapper = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
