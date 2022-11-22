import light from './light'
import dark from './dark'

const themes = {
  light,
  dark
}

export type Theme = keyof typeof themes

export default themes
