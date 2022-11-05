import { useEffect, useState } from 'react'
import { breakpoints } from 'styles/screens'

type ScreenDimensions = {
  height: number
  width: number
}

export type UseScreenDimensionsHook = () => {
  breakpoints: typeof breakpoints
  screen: ScreenDimensions
}

const useScreenDimensions: UseScreenDimensionsHook = () => {
  const [currentScreenDimensions, setCurrentScreenDimensions] =
    useState<ScreenDimensions>({
      height: 720,
      width: 1250
    })

  useEffect(() => {
    setCurrentScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    window.addEventListener('resize', () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      setCurrentScreenDimensions(dimensions)
    })
  }, [])

  return {
    breakpoints: breakpoints,
    screen: currentScreenDimensions
  }
}

export default useScreenDimensions
