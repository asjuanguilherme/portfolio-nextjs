import * as S from './styles'

// Types
import { ReactNode, useEffect, useState } from 'react'

// Components
import Footer from './Footer'
import Header from './Header'
import useScreenDimensions from 'hooks/useScreenDimensions'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const { screen, breakpoints } = useScreenDimensions()
  const isMobile = screen.width < breakpoints.tablet

  const menuToggle = () => {
    setMenuOpened(state => !state)
  }

  return (
    <S.Wrapper menuOpened={menuOpened} isMobile={isMobile}>
      <S.PageWrapper onClick={() => menuOpened && setMenuOpened(false)}>
        <Header menuOpened={menuOpened} menuToggle={menuToggle} />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.PageWrapper>
      {isMobile && menuOpened && <S.MenuMobileWrapper>red</S.MenuMobileWrapper>}
    </S.Wrapper>
  )
}

export default Layout
