'use client'

import { MenuIcon } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher'
import { css, cx } from '@styled-system/css'
import Button from '@/components/shared/Button'
import { container } from '@styled-system/patterns'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { menuToggle } from '../layout-menu'

export const TopNavbar = () => {
  const translations = useTranslations()
  const pathname = usePathname()
  const isHome = pathname === '/'
  const scrollPosition = useScrollPosition()
  const authorNameIsVisible = scrollPosition < 70

  return (
    <header
      className={cx(
        css({
          width: '100%',
          background: 'secondary.500',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 2,
          color: 'white',
          transitionDuration: 'slow',
          transitionProperty: 'background border',
          borderBottom: '1px solid {colors.secondary.300}',

          lg: {
            display: 'none'
          }
        }),
        isHome &&
          authorNameIsVisible &&
          css({
            borderBottom: 'transparent',
            background: 'primary.500'
          })
      )}
    >
      <div
        className={container({
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          height: '70px'
        })}
      >
        <div
          className={cx(
            css({
              marginRight: 'auto',
              display: 'flex',
              flexDir: 'column',
              transitionDuration: 'slow',
              transitionProperty: 'opacity'
            }),
            isHome &&
              authorNameIsVisible &&
              css({
                opacity: 0
              })
          )}
        >
          <span
            className={css({
              fontFamily: 'var(--font-playfair)',
              color: 'primary.500',
              fontWeight: 'extrabold',
              fontSize: '2xl'
            })}
          >
            Juan Guilherme
          </span>
          <span className={css({})}>
            {translations('COMMON.DEVELOPER_TITLE')}
          </span>
        </div>
        <LanguageSwitcher showLabel={false} />
        <Button
          aria-label="Open menu"
          icon={<MenuIcon />}
          color={authorNameIsVisible && isHome ? 'primary' : 'secondary'}
          onClick={menuToggle}
        />
      </div>
    </header>
  )
}

export default TopNavbar
