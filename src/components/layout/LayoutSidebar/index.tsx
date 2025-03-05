import { css, cx } from '@styled-system/css'
import LanguageSwitcher from '../LanguageSwitcher'
import { NavigationMenu } from '../NavigationMenu'
import SocialItems from '../SocialItems'
import CurrentLocalTime from '../CurrentLocalTime'

export const LayoutSidebar = () => {
  return (
    <aside
      className={cx(
        css({
          width: '270px',
          display: 'flex',
          flexDir: 'column',
          background: 'secondary.500',
          color: 'white',
          py: '3xl',
          px: 'sm',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          zIndex: -1,

          lg: {
            zIndex: 0
          },

          '&.menu-open': {
            lgDown: {
              visibility: 'hidden'
            }
          }
        })
      )}
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
        <CurrentLocalTime />

        <LanguageSwitcher />
      </div>

      <NavigationMenu />

      <SocialItems />
    </aside>
  )
}

export default LayoutSidebar
