import * as S from './styles'
import { navigationItems } from 'config/navigation'
import NavItem from './NavItem'

export type NavItemsProps = {}

const NavItems = ({}: NavItemsProps) => {
  return (
    <S.Wrapper>
      {navigationItems.map(navItem => (
        <NavItem key={navItem.title} {...navItem} />
      ))}
    </S.Wrapper>
  )
}

export default NavItems
