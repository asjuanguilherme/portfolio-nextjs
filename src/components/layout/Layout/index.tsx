'use client'

import { css, cx } from '@styled-system/css'
import { ReactNode, useState } from 'react'
import LayoutSidebar from '../LayoutSidebar'
import TopNavbar from '../TopNavbar'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMainClick = () => {
    if (menuOpen) setMenuOpen(false)
  }

  return (
    <>
      <main
        onClick={handleMainClick}
        className={cx(
          css({
            width: '100%',
            minHeight: '100%',
            background: 'white',
            transitionDuration: 'slow',
            transition: 'ease-in-out',
            lg: {
              paddingRight: '270px'
            }
          }),
          menuOpen &&
            css({
              lgDown: {
                position: 'absolute',
                borderRadius: '2xl',
                overflow: 'hidden',
                maxHeight: '100%',
                boxShadow: '0px 4px 26px rgba(0, 0, 0, 0.25)',
                border: '1px solid',
                borderColor: 'secondary.500',
                cursor: 'pointer',
                transform: 'scale(.9) translateX(-270px)'
              }
            })
        )}
      >
        <TopNavbar setMenuOpen={setMenuOpen} />
        {children}
      </main>
      <LayoutSidebar />
    </>
  )
}

export default Layout
