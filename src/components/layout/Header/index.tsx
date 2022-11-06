import * as S from './styles'
import { MutableRefObject } from 'react'

// Hooks
import useScreenDimensions from 'hooks/useScreenDimensions'

// Utils
import designSystemOptions from 'styles/designSystemOptions'

// Components
import Logo from 'components/shared/Logo'
import Navbar from './Navbar'
import MenuToggle from '../MenuToggle'

export type HeaderProps = {
  menuOpened: boolean
  menuToggle: () => void
  headerRef: MutableRefObject<HTMLElement | null>
  showTransparentHeader: boolean
}

const Header = ({
  menuOpened,
  menuToggle,
  headerRef,
  showTransparentHeader
}: HeaderProps) => {
  const { screen, breakpoints } = useScreenDimensions()

  return (
    <S.Wrapper ref={headerRef} showTransparentHeader={showTransparentHeader}>
      <S.Container>
        <Logo
          style={{ marginRight: designSystemOptions.spacing.sections.medium }}
        />
        {screen.width > breakpoints.tablet ? (
          <Navbar forTransparentBackground={showTransparentHeader} />
        ) : (
          <MenuToggle
            menuOpened={menuOpened}
            menuToggle={menuToggle}
            forTransparentBackground={showTransparentHeader}
          />
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
