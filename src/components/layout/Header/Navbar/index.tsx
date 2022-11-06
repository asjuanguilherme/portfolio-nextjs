import * as S from './styles'
import { navigationItems } from 'config/navigation'
import ThemeToggle from 'components/layout/ThemeToggle'
import NavItem from './NavItem'

type NavbarProps = {
  forTransparentBackground: boolean
}

const Navbar = ({ forTransparentBackground }: NavbarProps) => {
  return (
    <S.Wrapper>
      <S.NavList>
        {navigationItems.map(navItem => (
          <NavItem
            key={navItem.title}
            forTransparentBackground={forTransparentBackground}
            {...navItem}
          />
        ))}
      </S.NavList>

      <ThemeToggle forTransparentBackground={forTransparentBackground} />
    </S.Wrapper>
  )
}

export default Navbar
