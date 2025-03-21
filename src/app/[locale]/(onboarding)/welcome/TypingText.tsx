import TextWithTypingEffect from '@/components/shared/TextWithTypingEffect'
import { css } from '@styled-system/css'

export type WelcomePageTypingTextProps = {
  onFinishTyping: () => void
  children: string
}

export const WelcomePageTypingText = ({
  onFinishTyping,
  children
}: WelcomePageTypingTextProps) => {
  return (
    <span className={css({ fontWeight: 'medium', lg: { fontSize: '4xl' } })}>
      <TextWithTypingEffect
        onFinish={onFinishTyping}
        typingDelay={70}
        blinkingCursor={{ disabledOnFinish: true }}
      >
        {children}
      </TextWithTypingEffect>
    </span>
  )
}

export default WelcomePageTypingText
