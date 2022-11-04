import * as S from './styles'
import { INavItem } from '../navItems'
import { useRouter } from 'next/router'
import Link from 'next/link'

export type NavItemProps = INavItem

const NavItem = ({ title, link }: NavItemProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Link href={link} passHref>
        <S.ButtonLink active={router.asPath === link}>{title}</S.ButtonLink>
      </Link>
    </S.Wrapper>
  )
}

export default NavItem
