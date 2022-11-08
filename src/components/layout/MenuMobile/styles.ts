import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import UnstyledThemeToggle from '../ThemeToggle'

const { borderRadius, spacing, font, transition } = designSystemOptions

const navItemActiveStyle = css`
  background: white;
  color: ${props => props.theme.colors.main.primary.normal};
`

const navItemStandardStyle = css`
  &:hover {
    background: rgba(255, 255, 255, 0.25);
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
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: ${font.sizes.small};
    font-weight: ${font.weight.semibold};
    text-decoration: none;
    transition: ${transition.fast};
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

export const ThemeToggle = styled(UnstyledThemeToggle)`
  margin-top: ${spacing.components.small};
  color: white;
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
