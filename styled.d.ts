import 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { ButtonProps } from 'components/shared/Button'
import { IconComponent } from 'components/shared/Icons/utils/createIconComponent'

declare module 'styled-components' {
  export interface DefaultTheme extends designSystemOptions {
    name: 'light' | 'dark'
    title: string
    icon: IconComponent
    themeColor: ButtonProps['color']
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
