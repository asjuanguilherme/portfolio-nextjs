import * as S from './styles'
import navItems from './navItems'
import NavItem from './NavItem'

export type NavItemsProps = {}

const NavItems = ({}: NavItemsProps) => {
  return (
    <S.Wrapper>
      {navItems.map(navItem => (
        <NavItem key={navItem.title} {...navItem} />
      ))}
    </S.Wrapper>
  )
}

export default NavItems
