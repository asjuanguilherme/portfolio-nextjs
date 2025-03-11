'use client'

import useTypingEffect from '@/hooks/useTypingEffect'
import { TextWithBlinkingCursor } from '../TextWithBlinkingCursor'

export type TextWithTypingEffectProps = {
  children: string
  blinkingCursor?: {
    enabled?: boolean
    disabledOnFinish?: boolean
  }
}

export const TextWithTypingEffect = ({
  children,
  blinkingCursor = { enabled: true, disabledOnFinish: false }
}: TextWithTypingEffectProps) => {
  const { text, finished } = useTypingEffect({ text: children })

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
