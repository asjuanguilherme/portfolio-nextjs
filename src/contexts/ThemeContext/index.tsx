import { createContext, ReactNode, useState } from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  DefaultTheme
} from 'styled-components'
import { DEFAULT_THEME } from './utils'
import themes from 'styles/themes'

type ThemeContextProps = {
  currentTheme: DefaultTheme
  themeToggle: () => void
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof themes>(DEFAULT_THEME)

  const themeToggle = () => {
    setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{ currentTheme: themes[selectedTheme], themeToggle }}
    >
      <StyledComponentsThemeProvider theme={themes[selectedTheme]}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
