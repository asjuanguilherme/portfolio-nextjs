import { css } from '@styled-system/css'
import LanguageSwitcher from '../LanguageSwitcher'
import { NavigationMenu } from '../NavigationMenu'

export const LayoutSidebar = () => {
  return (
    <aside
      className={css({
        width: '270px',
        display: 'flex',
        flexDir: 'column',
        background: 'secondary.500',
        color: 'white',
        py: '3xl',
        px: 'sm',
        alignItems: 'center',
        justifyContent: 'space-between'
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 'xs',
          width: '100%',
          alignItems: 'center'
        })}
      >
        <span className={css({ color: 'primary.500', fontSize: 'sm' })}>
          {/* Local time pending */}
          18:32 Brussels, BE
        </span>

        <LanguageSwitcher />
      </div>

      <NavigationMenu />

      <div>{/* Sidebar Footer */}</div>
    </aside>
  )
}

export default LayoutSidebar
