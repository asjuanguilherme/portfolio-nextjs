'use client'

import { useEffect, useState } from 'react'
import { css } from '@styled-system/css'
import { taglines } from '@/data/taglines'
import { useLocale } from 'next-intl'
import { Locale } from '@/i18n/locales'
import { container } from '@styled-system/patterns'

export const TaglineSection = () => {
  const locale = useLocale() as Locale
  const [taglineIndex, setTaglineIndex] = useState<number>(0)
  const [characterIndex, setCharacterIndex] = useState(0)
  const currentTagline = taglines[taglineIndex].translations[locale]

  useEffect(() => {
    const delayBeforeItems = 3000
    const typingDelay = 50

    if (characterIndex === currentTagline.length) {
      const timeoutBeforeNext = setTimeout(() => {
        setCharacterIndex(0)
        setTaglineIndex(prevIndex =>
          taglineIndex < taglines.length - 1 ? prevIndex + 1 : 0
        )
      }, delayBeforeItems)

      return () => {
        clearTimeout(timeoutBeforeNext)
      }
    } else {
      const interval = setInterval(() => {
        setCharacterIndex(state => state + 1)
      }, typingDelay)

      return () => {
        clearInterval(interval)
      }
    }
  }, [characterIndex, currentTagline.length, taglineIndex])

  return (
    <section
      className={css({
        background: 'secondary.500',
        color: 'primary.500',
        fontFamily: 'var(--font-playfair)',
        fontWeight: 'semibold',
        letterSpacing: '-0.04em',
        lineHeight: '1em',
        height: '160px',
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
      <div
        className={container({
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        })}
      >
        <span>
          {currentTagline.slice(0, characterIndex)}
          <span className={css({ animation: 'blink 1s infinite' })}>|</span>
        </span>
      </div>
    </section>
  )
}

export default TaglineSection
