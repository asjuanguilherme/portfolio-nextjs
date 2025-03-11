'use client'

import { finishOnboarding } from '@/app/actions'
import ProgressBar from '@/components/shared/ProgressBar'
import TextWithTypingEffect from '@/components/shared/TextWithTypingEffect'
import { useRouter } from '@/i18n/navigation'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function WelcomePage() {
  const translations = useTranslations()
  const [paragraphIndex, setParagraphIndex] = useState(0)
  const [progressBar, setProgressBar] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (paragraphIndex === 3) {
      const interval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 15)

        setProgressBar(prevNumber => {
          const newNumber = prevNumber + randomNumber

          if (newNumber > 100) return 100

          return newNumber
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [paragraphIndex])

  useEffect(() => {
    if (progressBar == 100) {
      const timeout = setTimeout(async () => {
        await finishOnboarding()
        router.replace('/#start')
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [progressBar, router])

  return (
    <div
      className={css({
        bg: 'primary.500',
        height: '100%'
      })}
    >
      <div
        className={container({
          display: 'flex',
          flexDir: 'column',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        })}
      >
        <span
          className={css({ fontWeight: 'medium', lg: { fontSize: '4xl' } })}
        >
          <TextWithTypingEffect
            typingDelay={70}
            blinkingCursor={{ disabledOnFinish: true }}
            onFinish={() => setParagraphIndex(1)}
          >
            {translations('ONBOARDING.WELCOME.GREETINGS')}
          </TextWithTypingEffect>
        </span>
        {paragraphIndex > 0 && (
          <h1
            className={css({
              fontSize: '4xl',
              fontFamily: 'var(--font-playfair)',
              fontWeight: 'extrabold',
              letterSpacing: '-0.04em',

              md: {
                fontSize: '5xl'
              },

              lg: { fontSize: '8xl' }
            })}
          >
            <TextWithTypingEffect
              typingDelay={70}
              blinkingCursor={{ disabledOnFinish: true }}
              onFinish={() => setParagraphIndex(2)}
            >
              {'Juan Guilherme'}
            </TextWithTypingEffect>
          </h1>
        )}
        {paragraphIndex > 1 && (
          <span
            className={css({ fontWeight: 'medium', lg: { fontSize: '4xl' } })}
          >
            <TextWithTypingEffect
              onFinish={() => setParagraphIndex(3)}
              typingDelay={70}
            >
              {translations('COMMON.DEVELOPER_TITLE')}
            </TextWithTypingEffect>
          </span>
        )}

        {paragraphIndex == 3 && (
          <ProgressBar
            progressPercent={progressBar}
            className={css({
              fontSize: '8px',
              marginTop: '30px',
              sm: {
                fontSize: '12px',
                marginTop: '60px'
              },
              lg: { fontSize: 'xl', marginTop: '90px' }
            })}
          />
        )}
      </div>
    </div>
  )
}
