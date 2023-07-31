import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing } = designSystemOptions

export const NavList = styled.ul<{ forTransparentBackground: boolean }>`
  list-style: none;
  display: flex;
  gap: ${spacing.components.medium};
  transition: 0.75s ease;

  ${props =>
    !props.forTransparentBackground &&
    css`
      transform: translateX(200px);
    `}
`

export const Wrapper = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
