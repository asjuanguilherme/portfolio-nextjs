import * as S from './styles'

// Hooks
import { useEffect, useRef, useState } from 'react'
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
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (!headerRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      setHeaderHeight(
        entries[0].contentRect.height + entries[0].contentRect.y * 2
      )
    })

    resizeObserver.observe(headerRef.current)
  }, [headerRef])

  const menuToggle = () => {
    setMenuOpened(state => !state)
  }

  const closeMenu = () => setMenuOpened(false)

  return (
    <S.Wrapper menuOpened={menuOpened} isMobile={isMobile}>
      <S.PageWrapper onClick={() => menuOpened && setMenuOpened(false)}>
        <Header
          menuOpened={menuOpened}
          menuToggle={menuToggle}
          headerRef={headerRef}
        />
        <S.Main secureMarginForContent={headerHeight}>{children}</S.Main>
        {!menuOpened && <Footer />}
      </S.PageWrapper>
      {isMobile && <MenuMobile closeMenu={closeMenu} />}
    </S.Wrapper>
  )
}

export default Layout
