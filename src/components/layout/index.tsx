import * as S from './styles'
import layoutConfig from './layoutConfig'
import dynamic from 'next/dynamic'
import Head from 'next/head'

// Hooks
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useScreenDimensions from 'hooks/useScreenDimensions'
import { useTheme } from 'styled-components'

// Components
const Footer = dynamic(() => import('./Footer'))
const Header = dynamic(() => import('./Header'))
const MenuMobile = dynamic(() => import('./MenuMobile'))
const MenuToggle = dynamic(() => import('./MenuToggle'))

export type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const [menuOpened, setMenuOpened] = useState(false)
  const { screen, breakpoints } = useScreenDimensions()
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const pageWrapperRef = useRef<HTMLDivElement | null>(null)
  const isMobile = screen.width < breakpoints.tablet
  const isHome = router.pathname === '/'
  const [showTransparentHeader, setShowTransparentHeader] = useState(isHome)
  const theme = useTheme()

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

  const handlePageScroll = (e: SyntheticEvent) => {
    const eventTarget = e.target as HTMLDivElement
    const scrollPositionY = eventTarget.scrollTop

    if (scrollPositionY === 0 && isHome) setShowTransparentHeader(true)
    else setShowTransparentHeader(false)
  }

  const handlePageClick = () => {
    menuOpened && setMenuOpened(false)
  }

  useEffect(() => {
    const scrollPositionY = pageWrapperRef.current?.scrollTop

    setShowTransparentHeader(scrollPositionY === 0 && isHome)
  }, [isHome, pageWrapperRef])

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={
            showTransparentHeader
              ? theme.colors.main.themeGradient.normal
              : theme.colors.layers[2].background
          }
        ></meta>
      </Head>
      <S.Wrapper menuOpened={menuOpened} isMobile={isMobile}>
        {screen.width <= breakpoints[layoutConfig.menuMobileMaxBreakpoint] && (
          <MenuToggle
            menuOpened={menuOpened}
            menuToggle={menuToggle}
            forTransparentBackground={showTransparentHeader}
          />
        )}
        <S.PageWrapper
          onClick={handlePageClick}
          onScroll={handlePageScroll}
          ref={pageWrapperRef}
        >
          <Header
            headerRef={headerRef}
            showTransparentHeader={showTransparentHeader}
          />
          <S.Main secureMarginForContent={isHome ? 0 : headerHeight}>
            {children}
          </S.Main>
          {!menuOpened && <Footer />}
        </S.PageWrapper>
        {isMobile && <MenuMobile closeMenu={closeMenu} />}
      </S.Wrapper>
    </>
  )
}

export default Layout
