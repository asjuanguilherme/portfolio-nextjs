import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  DefaultTheme
} from 'styled-components'
import { storeThemeStateToCookies } from './utils'
import themes from 'styles/themes'

type ThemeContextProps = {
  currentTheme: DefaultTheme
  themeToggle: () => void
}

type ThemeProviderProps = {
  children: ReactNode
  storedTheme: keyof typeof themes
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

export const ThemeProvider = ({
  children,
  storedTheme = 'light'
}: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof themes>(storedTheme)

  const themeToggle = () => {
    const newTheme = selectedTheme === 'light' ? 'dark' : 'light'
    setSelectedTheme(newTheme)
  }

  useEffect(() => {
    storeThemeStateToCookies(selectedTheme)
  }, [selectedTheme])

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
