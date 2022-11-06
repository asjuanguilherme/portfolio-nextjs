import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NavigationItemProps } from 'config/navigation'

export type NavItemProps = NavigationItemProps

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
