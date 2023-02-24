import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  DefaultTheme
} from 'styled-components'
import { storeThemeStateToCookies } from './utils'
import themes, { Theme } from 'styles/themes'

type ThemeContextProps = {
  currentTheme: DefaultTheme
  themeToggle: () => void
}

type ThemeProviderProps = {
  children: ReactNode
  storedTheme: Theme
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
)

export const ThemeProvider = ({
  children,
  storedTheme = 'light'
}: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(storedTheme)

  const themeToggle = useCallback(() => {
    const newTheme = selectedTheme === 'light' ? 'dark' : 'light'
    setSelectedTheme(newTheme)
  }, [selectedTheme])

  const currentTheme = useMemo(() => themes[selectedTheme], [selectedTheme])

  useEffect(() => {
    storeThemeStateToCookies(selectedTheme)
  }, [selectedTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, themeToggle }}>
      <StyledComponentsThemeProvider theme={currentTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
