'use client'

import { useState } from 'react'
import { css } from '@styled-system/css'
import { taglines } from '@/data/taglines'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n/locales'
import useTypingEffect from '@/hooks/useTypingEffect'
import { TextWithBlinkingCursor } from '@/components/shared/TextWithBlinkingCursor'

export const TaglineSection = () => {
  const locale = useLocale() as Locale
  const [taglineIndex, setTaglineIndex] = useState<number>(0)
  const currentTaglineText = taglines[taglineIndex].translations[locale]

  const textWithTypingEffect = useTypingEffect({
    text: currentTaglineText,
    onFinish: () => {
      const delayBeforeTextChanges = 3000

      const timeout = setTimeout(() => {
        setTaglineIndex(prevIndex =>
          prevIndex + 1 === taglines.length ? 0 : prevIndex + 1
        )

        return () => clearTimeout(timeout)
      }, delayBeforeTextChanges)
    }
  })

  return (
    <section
      className={css({
        background: 'secondary.500',
        color: 'primary.500',
        fontFamily: 'var(--font-playfair)',
        fontWeight: 'semibold',
        letterSpacing: '-0.04em',
        lineHeight: '1em',
        height: '185px',
        fontSize: '5xl',

        md: {
          fontSize: '6xl'
        },

        lg: {
          fontSize: '7xl',
          height: '200px'
        }
      })}
    >
      <TextWithBlinkingCursor>
        {textWithTypingEffect.text}
      </TextWithBlinkingCursor>
    </section>
  )
}

export default TaglineSection
