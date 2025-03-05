import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.body.scrollTop
    } else {
      return 0
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(document.body.scrollTop)
    }

    document.body?.addEventListener('scroll', handleScroll)

    return () => document.body?.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
