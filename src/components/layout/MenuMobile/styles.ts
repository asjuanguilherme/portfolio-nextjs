import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { borderRadius, spacing, font } = designSystemOptions

const navItemActiveStyle = css`
  background: white;
  color: ${props => props.theme.colors.main.primary.normal};
`

const navItemStandardStyle = css`
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`

export const NavItem = styled.li<{ active: boolean }>`
  width: 100%;

  a {
    display: flex;
    border-radius: ${borderRadius.pill};
    padding: ${css`
      ${spacing.components.small} ${spacing.components.medium}
    `};
    background: rgba(255, 255, 255, 0.25);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.25);
    font-size: ${font.sizes.small};
    text-decoration: none;
    transition: 0.15s;
    transition-property: background;

    ${props => (props.active ? navItemActiveStyle : navItemStandardStyle)}
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${spacing.components.small};
  list-style: none;
`

export const Wrapper = styled.nav`
  width: 65%;
  position: absolute;
  right: ${spacing.components.small};
  top: 50%;
  transform: translateY(-50%);
  padding: ${spacing.components.small};
  z-index: 1;
`
