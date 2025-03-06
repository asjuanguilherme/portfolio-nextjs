import { getTranslations } from 'next-intl/server'
import { css } from '@styled-system/css'
import SocialItems from '../../shared/SocialItems'

export const Footer = async () => {
  const translations = await getTranslations('UI.FOOTER')

  return (
    <footer
      className={css({
        bg: 'primary.500',
        textAlign: 'center',
        py: '2xl',
        display: 'flex',
        flexDirection: 'column',
        gap: 'xl',

        lg: { py: '4xl' }
      })}
    >
      <div
        className={css({
          fontFamily: 'var(--font-playfair)',
          fontWeight: 'extrabold',
          letterSpacing: '-.04em',
          fontSize: '4xl',
          lg: { fontSize: '6xl' }
        })}
      >
        <h2>{translations('HAVE_A_PROJECT_IN_MIND')}</h2>
        <p
          className={css({
            letterSpacing: '.01em',
            color: 'primary.500',
            textShadow: `
            1px 1px 0px {colors.secondary.500},
              -1px -1px 0px {colors.secondary.500},
              1px -1px 0px {colors.secondary.500},
              -1px 1px 0px {colors.secondary.500}`
          })}
        >
          {translations('LETS_CONNECT')}
        </p>
      </div>
      <SocialItems
        listClassName={css({
          display: 'flex',
          justifyContent: 'center',
          flexDir: 'column',
          gap: 'xs',
          md: { flexDir: 'row' }
        })}
      />

      <span>Copyright © 2025 Juan</span>
    </footer>
  )
}
