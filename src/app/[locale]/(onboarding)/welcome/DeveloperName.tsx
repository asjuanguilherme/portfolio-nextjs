import TextWithTypingEffect from '@/components/shared/TextWithTypingEffect'
import { css } from '@styled-system/css'

export type WelcomePageDeveloperNameTextProps = {
  onFinishTyping: () => void
}

export const WelcomePageDeveloperNameText = ({
  onFinishTyping
}: WelcomePageDeveloperNameTextProps) => {
  return (
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
        onFinish={onFinishTyping}
      >
        {'Juan Guilherme'}
      </TextWithTypingEffect>
    </h1>
  )
}

export default WelcomePageDeveloperNameText
