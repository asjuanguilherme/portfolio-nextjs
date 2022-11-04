import designSystemOptions from 'styles/designSystemOptions'
import styled, { css } from 'styled-components'

const { font, spacing, borderRadius, transition } = designSystemOptions

const activeStyle = css`
  background: ${props => props.theme.colors.main.primary.normal};
  color: white;
`

const standardStyle = css`
  color: inherit;

  &:hover {
    box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.colors.main.primary.normal};
  }
`

export const ButtonLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  font-size: ${font.sizes.small};
  font-weight: ${font.weight.semibold};
  padding: ${css`
    ${spacing.components.small} ${spacing.components.medium}
  `};
  border: 1px solid transparent;
  border-radius: ${borderRadius.pill};
  transition-duration: ${transition.default};
  transition-property: background, border, color, box-shadow;

  ${props => (props.active ? activeStyle : standardStyle)};
`

export const Wrapper = styled.li``
