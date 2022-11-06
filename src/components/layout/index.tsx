import * as S from './styles'

// Hooks
import { useState } from 'react'
import useScreenDimensions from 'hooks/useScreenDimensions'

// Components
import Footer from './Footer'
import Header from './Header'
import MenuMobile from './MenuMobile'

export type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const { screen, breakpoints } = useScreenDimensions()
  const isMobile = screen.width < breakpoints.tablet

  const menuToggle = () => {
    setMenuOpened(state => !state)
  }

  const closeMenu = () => setMenuOpened(false)

  return (
    <S.Wrapper menuOpened={menuOpened} isMobile={isMobile}>
      <S.PageWrapper onClick={() => menuOpened && setMenuOpened(false)}>
        <Header menuOpened={menuOpened} menuToggle={menuToggle} />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.PageWrapper>
      {isMobile && <MenuMobile closeMenu={closeMenu} />}
    </S.Wrapper>
  )
}

export default Layout
