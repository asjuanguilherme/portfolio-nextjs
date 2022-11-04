import 'styled-components'
import designSystemOptions from 'styles/themes/utils/designSystemOptions'

declare module 'styled-components' {
  export interface DefaultTheme extends designSystemOptions {
    name: 'light' | 'dark'
    colors: {
      title: string
      text: string
      main: Record<string, Record<'light' | 'normal' | 'dark', string>>
      layers: Record<
        0 | 1 | 2,
        {
          background: string
          border: string
        }
      >
    }
  }
}
