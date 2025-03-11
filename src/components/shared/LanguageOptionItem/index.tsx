'use client'

import { Locale } from '@/i18n/locales'
import { css, cx } from '@styled-system/css'
import { useTranslations } from 'use-intl'
import LanguageIcon from '../LanguageIcon'

export type LanguageOptionItemProps = {
  locale: Locale
  showLabel?: boolean
  className?: string
}

export const LanguageOptionItem = ({
  locale,
  showLabel,
  className
}: LanguageOptionItemProps) => {
  const translations = useTranslations('UI.LANGUAGES')

  return (
    <span
      className={cx(
        className,
        css({
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        })
      )}
    >
      <LanguageIcon locale={locale} />
      {showLabel && <span>{translations(locale)}</span>}
    </span>
  )
}

export default LanguageOptionItem
