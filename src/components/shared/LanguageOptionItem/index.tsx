import { Locale } from '@/i18n/locales.config'
import { css } from '@styled-system/css'

export type LanguageOptionItemProps = {
  locale: Locale
  showLabel: boolean
}

export const LanguageOptionItem = ({
  locale,
  showLabel
}: LanguageOptionItemProps) => {
  const flagByLanguage = {
    en: '/assets/flags/uk.png',
    nl: '/assets/flags/nl.png',
    pt: '/assets/flags/pt.png'
  }

  const labelByLanguage: Record<Locale, string> = {
    en: 'English',
    nl: 'Nederlands',
    pt: 'Português'
  }

  return (
    <span
      className={css({
        display: 'flex',
        alignItems: 'center'
      })}
    >
      <span
        style={{
          backgroundImage: `url(${flagByLanguage[locale]})`,
          backgroundSize: 'cover'
        }}
        className={css({
          width: '18px',
          height: '18px',
          display: 'block',
          borderRadius: 'circle',
          border: '1px solid white',
          overflow: 'hidden',
          mr: '4px'
        })}
      ></span>
      {showLabel && <span>{labelByLanguage[locale]}</span>}
    </span>
  )
}

export default LanguageOptionItem
