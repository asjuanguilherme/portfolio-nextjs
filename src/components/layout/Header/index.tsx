import * as S from './styles'
import { MutableRefObject } from 'react'
import layoutConfig from '../layoutConfig'

// Hooks
import useScreenDimensions from 'hooks/useScreenDimensions'

// Components
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'))

export type HeaderProps = {
  headerRef: MutableRefObject<HTMLElement | null>
  showTransparentHeader: boolean
}

const Header = ({ headerRef, showTransparentHeader }: HeaderProps) => {
  const { screen, breakpoints } = useScreenDimensions()

  return (
    <S.Wrapper ref={headerRef} showTransparentHeader={showTransparentHeader}>
      <S.Container>
        <S.Logo isHidden={showTransparentHeader} />
        {screen.width > breakpoints[layoutConfig.menuMobileMaxBreakpoint] && (
          <Navbar forTransparentBackground={showTransparentHeader} />
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
