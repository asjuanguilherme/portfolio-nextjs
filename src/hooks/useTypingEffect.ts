import { useEffect, useState } from 'react'

export type UseTypingEffectProps = {
  text: string
  typingDelay?: number
  enabled?: boolean
  onFinish?: () => void
}

export type UseTypingEffectResult = {
  text: string
  finished: boolean
  reset: () => void
}

export const useTypingEffect = ({
  text,
  typingDelay = 50,
  enabled = true,
  onFinish
}: UseTypingEffectProps) => {
  const [characterIndex, setCharacterIndex] = useState<number>(0)

  if (text.length === 0)
    throw new Error(
      'Text must be inserted and it must have at least 1 character.'
    )

  const finished = text.length === characterIndex

  const resetState = () => setCharacterIndex(0)

  useEffect(() => {
    if (!enabled) return

    const interval = setInterval(() => {
      setCharacterIndex(prevState => {
        if (prevState == text.length) return prevState

        return prevState + 1
      })
    }, typingDelay)

    return () => {
      clearInterval(interval)
    }
  }, [typingDelay, enabled, onFinish, text.length])

  useEffect(() => {
    // Reset characterIndex value if the text value changes
    resetState()
  }, [text])

  useEffect(() => {
    // Hook triggered when text typing is finished
    if (!finished) return

    if (onFinish) {
      onFinish()
    }
  }, [onFinish, finished])

  return {
    text: text.slice(0, characterIndex),
    finished,
    resetState
  }
}

export default useTypingEffect
