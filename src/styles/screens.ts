export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
  desktopL: 1536
}

export type BreakpointNames = keyof typeof breakpoints

export const screens: Record<BreakpointNames, string> = (() => {
  const breakpointNames = Object.keys(breakpoints) as Array<BreakpointNames>
  const devices = {} as Record<BreakpointNames, string>

  breakpointNames.forEach(breakpointName => {
    devices[
      breakpointName
    ] = `@media screen and (min-width: ${breakpoints[breakpointName]}px)`
  })

  return devices
})()
