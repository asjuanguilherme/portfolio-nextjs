import * as S from './styles'
import Link from 'next/link'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

export type NavItemProps = {
  title: string
  link: string
  active: boolean
  forTransparentBackground: boolean
}

const NavItem = ({
  title,
  link,
  active,
  forTransparentBackground
}: NavItemProps) => {
  return (
    <S.Wrapper>
      <Link href={link} passHref>
        <S.ButtonLink
          active={active}
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
