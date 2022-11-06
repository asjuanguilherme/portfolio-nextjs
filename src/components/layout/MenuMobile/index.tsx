import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { navigationItems } from 'config/navigation'

type MenuMobileProps = {
  closeMenu: () => void
}

const MenuMobile = ({ closeMenu }: MenuMobileProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.NavList>
        {navigationItems.map(item => (
          <S.NavItem
            key={item.link}
            active={router.asPath === item.link}
            onClick={closeMenu}
          >
            <Link href={item.link} passHref>
              <a>{item.title}</a>
            </Link>
          </S.NavItem>
        ))}
        <S.ThemeToggle />
      </S.NavList>
    </S.Wrapper>
  )
}

export default MenuMobile
