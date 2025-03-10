import { css } from '@styled-system/css'
import { container } from '@styled-system/patterns'

export type TextWithBlinkingCursorProps = {
  children: string
  enabled?: boolean
}

export const TextWithBlinkingCursor = ({
  children,
  enabled = true
}: TextWithBlinkingCursorProps) => {
  return (
    <span
      className={container({
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      })}
    >
      <span>
        {children}
        {enabled && (
          <span className={css({ animation: 'blink 1s infinite' })}>|</span>
        )}
      </span>
    </span>
  )
}
