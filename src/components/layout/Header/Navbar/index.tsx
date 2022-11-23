import * as S from './styles'
import { navigationItems } from 'contexts/NavigationContext/navigationItems'
import ThemeToggle from 'components/layout/ThemeToggle'
import NavItem from './NavItem'
import { NavigationContext } from 'contexts/NavigationContext'
import { useContext } from 'react'

type NavbarProps = {
  forTransparentBackground: boolean
}

const Navbar = ({ forTransparentBackground }: NavbarProps) => {
  const { activeSection } = useContext(NavigationContext)

  return (
    <S.Wrapper>
      <S.NavList forTransparentBackground={forTransparentBackground}>
        {Object.keys(navigationItems).map(navItem => (
          <NavItem
            key={navItem}
            // @ts-ignore-next-line
            title={navigationItems[navItem]}
            link={`/#${navItem}`}
            active={navItem === activeSection}
            forTransparentBackground={forTransparentBackground}
          />
        ))}
      </S.NavList>

      <ThemeToggle forTransparentBackground={forTransparentBackground} />
    </S.Wrapper>
  )
}

export default Navbar
