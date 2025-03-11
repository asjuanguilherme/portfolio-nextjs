'use client'

import useTypingEffect from '@/hooks/useTypingEffect'
import { TextWithBlinkingCursor } from '../TextWithBlinkingCursor'

export type TextWithTypingEffectProps = {
  children: string
  typingDelay?: number
  blinkingCursor?: {
    enabled?: boolean
    disabledOnFinish?: boolean
  }
  onFinish?: () => void
}

export const TextWithTypingEffect = ({
  children,
  blinkingCursor = { enabled: true, disabledOnFinish: false },
  onFinish,
  typingDelay = 50
}: TextWithTypingEffectProps) => {
  const { text, finished } = useTypingEffect({
    text: children,
    onFinish,
    typingDelay
  })

  return (
    <TextWithBlinkingCursor
      enabled={
        blinkingCursor.disabledOnFinish
          ? !finished && blinkingCursor.enabled
          : blinkingCursor.enabled
      }
    >
      {text}
    </TextWithBlinkingCursor>
  )
}

export default TextWithTypingEffect
