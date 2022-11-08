import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NavigationItemProps } from 'config/navigation'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

export type NavItemProps = NavigationItemProps & {
  forTransparentBackground: boolean
}

const NavItem = ({ title, link, forTransparentBackground }: NavItemProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Link href={link} passHref>
        <S.ButtonLink
          active={
            link === '/'
              ? router.asPath === '/'
              : router.pathname === link || router.asPath === link
          }
          forTransparentBackground={forTransparentBackground}
        >
          {title}
          <CircleBackgroundAnimation />
        </S.ButtonLink>
      </Link>
    </S.Wrapper>
  )
}

export default NavItem
