import { Locale } from '@/i18n/locales'
import { css } from '@styled-system/css'
import { useTranslations } from 'use-intl'

export type LanguageOptionItemProps = {
  locale: Locale
  showLabel: boolean
}

export const LanguageOptionItem = ({
  locale,
  showLabel
}: LanguageOptionItemProps) => {
  const translations = useTranslations('UI.LANGUAGES')
  const flagByLanguage: Record<Locale, string> = {
    en: '/assets/flags/uk.png',
    nl: '/assets/flags/nl.png',
    pt: '/assets/flags/pt.png'
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
      {showLabel && <span>{translations(locale.toUpperCase() as 'EN')}</span>}
    </span>
  )
}

export default LanguageOptionItem
