import { Theme } from 'styles/themes'

export type PageProps<Props> = Props & {
  storedTheme: Theme
}
