import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import navItems from '../Header/Navbar/NavItems/navItems'
import ThemeToggle from '../ThemeToggle'
import designSystemOptions from 'styles/designSystemOptions'

type MenuMobileProps = {
  closeMenu: () => void
}

const { spacing } = designSystemOptions

const MenuMobile = ({ closeMenu }: MenuMobileProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.NavList>
        {navItems.map(item => (
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
        <ThemeToggle style={{ marginTop: spacing.components.small }} />
      </S.NavList>
    </S.Wrapper>
  )
}

export default MenuMobile
