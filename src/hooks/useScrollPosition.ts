import { mainElementID } from '@/components/layout/layout-menu'
import { useEffect, useState } from 'react'

const getScrollPosition = () => {
  const main = document.getElementById(mainElementID)

  if (!main)
    throw new Error(
      'Main element was not found. Did you remove it or its class?'
    )

  return main.scrollTop
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      return getScrollPosition()
    } else {
      return 0
    }
  })

  useEffect(() => {
    const main = document.getElementById(mainElementID)

    const handleScroll = () => {
      setScrollPosition(getScrollPosition())
    }

    main?.addEventListener('scroll', handleScroll)

    return () => main?.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
