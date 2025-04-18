'use client'

import { css, cx } from '@styled-system/css'
import LanguageSwitcher from '../LanguageSwitcher'
import { NavigationMenu } from '../NavigationMenu'
import SocialItems from '../../shared/SocialItems'
import CurrentLocalTime from '../CurrentLocalTime'
import { useTranslations } from 'next-intl'
import { closeMenu } from '../layout-menu'

export const LayoutSidebar = () => {
  const translation = useTranslations('UI.SIDEBAR')

  return (
    <aside
      onBlur={() => {
        closeMenu()
      }}
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
          position: 'absolute',
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

      <SocialItems
        buttonColor="secondary"
        onlyIcon
        title={translation('CONTACT_ME')}
      />
    </aside>
  )
}

export default LayoutSidebar
