import { css, cx } from '@styled-system/css'
import { ReactNode } from 'react'
import LayoutSidebar from '../LayoutSidebar'
import TopNavbar from '../TopNavbar'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = async ({ children }: LayoutProps) => {
  return (
    <>
      <main
        id="app-main"
        className={cx(
          css({
            width: '100%',
            minHeight: '100%',
            background: 'white',
            transitionDuration: 'normal',
            transitionProperty: 'transform',
            transition: 'ease-in-out',
            paddingTop: '70px',

            lg: {
              paddingTop: 0,
              paddingRight: '270px'
            },

            '&.menu-open': {
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
            }
          })
        )}
      >
        <TopNavbar />
        {children}
      </main>
      <LayoutSidebar />
    </>
  )
}

export default Layout
