'use client'

import { mainElementID } from '@/components/layout/layout-menu'
import { usePathname } from '@/i18n/navigation'
import { useEffect, useState } from 'react'

const getScrollPosition = () => {
  if (typeof document == 'undefined') return 0

  const main = document?.getElementById(mainElementID)

  if (!main) return 0

  return main?.scrollTop
}

export const useScrollPosition = () => {
  const pathname = usePathname()

  const [scrollPosition, setScrollPosition] = useState(() => {
    return getScrollPosition()
  })

  useEffect(() => {
    const main = document?.getElementById(mainElementID)

    const handleScroll = () => {
      setScrollPosition(getScrollPosition())
    }

    main?.addEventListener('scroll', handleScroll)

    return () => main?.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return scrollPosition
}
