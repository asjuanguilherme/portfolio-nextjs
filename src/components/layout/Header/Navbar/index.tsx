import * as S from './styles'
import { navigationItems } from 'config/navigation'
import ThemeToggle from 'components/layout/ThemeToggle'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.NavList>
        {navigationItems.map(navItem => (
          <NavItem key={navItem.title} {...navItem} />
        ))}
      </S.NavList>

      <ThemeToggle />
    </S.Wrapper>
  )
}

export default Navbar
