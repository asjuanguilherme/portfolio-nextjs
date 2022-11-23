import * as S from './styles'
import { useContext } from 'react'
import Link from 'next/link'
import { navigationItems } from 'contexts/NavigationContext/navigationItems'
import { NavigationContext } from 'contexts/NavigationContext'

type MenuMobileProps = {
  closeMenu: () => void
}

const MenuMobile = ({ closeMenu }: MenuMobileProps) => {
  const { activeSection } = useContext(NavigationContext)

  return (
    <S.Wrapper>
      <S.NavList>
        {Object.keys(navigationItems).map(item => (
          <S.NavItem
            key={item}
            active={item === activeSection}
            onClick={closeMenu}
          >
            <Link href={`/#${item}`} passHref>
              {/* @ts-ignore-next-line */}
              <a>{navigationItems[item]}</a>
            </Link>
          </S.NavItem>
        ))}
        <S.ThemeToggle />
      </S.NavList>
    </S.Wrapper>
  )
}

export default MenuMobile
