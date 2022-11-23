import * as S from './styles'
import dynamic from 'next/dynamic'

// Hooks
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useScreenDimensions from 'hooks/useScreenDimensions'

// Components
const Footer = dynamic(() => import('./Footer'))
const Header = dynamic(() => import('./Header'))
const MenuMobile = dynamic(() => import('./MenuMobile'))

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
    <S.Wrapper menuOpened={menuOpened} isMobile={isMobile}>
      <S.PageWrapper
        onClick={handlePageClick}
        onScroll={handlePageScroll}
        ref={pageWrapperRef}
      >
        <Header
          menuOpened={menuOpened}
          menuToggle={menuToggle}
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
  )
}

export default Layout
