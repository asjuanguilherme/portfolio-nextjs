import { Locale } from '@/i18n/locales'
import { css, cx } from '@styled-system/css'

export type LanguageIconProps = {
  locale: Locale
  className?: string
}

export const LanguageIcon = ({ locale, className }: LanguageIconProps) => {
  const flagByLanguage: Record<Locale, string> = {
    en: '/assets/flags/uk.png',
    nl: '/assets/flags/nl.png',
    pt: '/assets/flags/pt.png'
  }

  return (
    <span
      role="img"
      style={{
        backgroundImage: `url(${flagByLanguage[locale]})`,
        backgroundSize: 'cover'
      }}
      className={cx(
        className,
        css({
          width: '1em',
          height: '1em',
          display: 'block',
          borderRadius: 'circle',
          border: '1px solid white',
          overflow: 'hidden'
        })
      )}
    ></span>
  )
}

export default LanguageIcon
