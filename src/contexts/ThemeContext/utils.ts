import themes from 'styles/themes'

export const APP_THEME_LOCAL_STORAGE_KEY = 'APP_THEME'
export const DEFAULT_THEME = 'light'

export const storeThemeStateInLocalStorage = (state: keyof typeof themes) => {
  localStorage.setItem(APP_THEME_LOCAL_STORAGE_KEY, state)
}

export const getStoredThemeState = (): keyof typeof themes => {
  if (!localStorage.getItem(APP_THEME_LOCAL_STORAGE_KEY)) {
    storeThemeStateInLocalStorage(DEFAULT_THEME)
    return JSON.parse(
      localStorage.getItem(APP_THEME_LOCAL_STORAGE_KEY) as string
    )
  }

  return localStorage.getItem(
    APP_THEME_LOCAL_STORAGE_KEY
  ) as keyof typeof themes
}
