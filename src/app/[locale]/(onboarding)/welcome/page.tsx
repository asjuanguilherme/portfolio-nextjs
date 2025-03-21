'use client'

import { finishOnboarding } from '@/app/actions'
import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'
import { useTranslations } from 'next-intl'
import { useCallback, useState } from 'react'
import DeveloperNameText from './DeveloperName'
import TypingText from './TypingText'

const FINISH_ONBOARDING_DELAY_IN_MILLISECONDS = 500

export default function WelcomePage() {
  const translations = useTranslations()
  const [paragraphIndex, setParagraphIndex] = useState(0)
  const isNameParagraphVisible = paragraphIndex > 0
  const isDeveloperTextParagraphVisible = paragraphIndex > 1

  const finishOnboardingAfterDelay = useCallback(async () => {
    await new Promise(resolve =>
      setTimeout(resolve, FINISH_ONBOARDING_DELAY_IN_MILLISECONDS)
    )

    await finishOnboarding()
  }, [])

  const writeNextParagraph = useCallback(() => {
    setParagraphIndex(state => state + 1)
  }, [])

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
        <TypingText onFinishTyping={writeNextParagraph}>
          {translations('ONBOARDING.WELCOME.GREETINGS')}
        </TypingText>

        {isNameParagraphVisible && (
          <DeveloperNameText onFinishTyping={writeNextParagraph} />
        )}

        {isDeveloperTextParagraphVisible && (
          <TypingText onFinishTyping={finishOnboardingAfterDelay}>
            {translations('COMMON.DEVELOPER_TITLE')}
          </TypingText>
        )}
      </div>
    </div>
  )
}
