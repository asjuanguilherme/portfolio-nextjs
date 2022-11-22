import themes from 'styles/themes'
import Cookie from 'js-cookie'

export const APP_THEME_COOKIE_KEY = 'APP_THEME'
export const DEFAULT_THEME = 'light'

export const storeThemeStateToCookies = (state: keyof typeof themes) => {
  Cookie.set(APP_THEME_COOKIE_KEY, state)
}
