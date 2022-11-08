import * as S from './styles'
import { CSSProperties, useContext } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
import { ButtonProps } from 'components/shared/Button'
import Moon from 'components/shared/Icons/Moon'
import Sun from 'components/shared/Icons/Sun'

export type ThemeToggleProps = {
  forTransparentBackground?: boolean
  style?: CSSProperties
  className?: string
}

const iconByTheme = {
  dark: Moon,
  light: Sun
}

const labelByTheme = {
  dark: 'Tema Escuro',
  light: 'Tema Claro'
}

const colorByTheme: Record<DefaultTheme['name'], ButtonProps['color']> = {
  dark: 'primary',
  light: 'yellow'
}

export const ThemeToggle = ({
  forTransparentBackground = false,
  ...props
}: ThemeToggleProps) => {
  const theme = useTheme()
  const { themeToggle } = useContext(ThemeContext)

  return (
    <S.Wrapper
      icon={iconByTheme[theme.name]}
      forTransparentBackground={forTransparentBackground}
      themeColor={colorByTheme[theme.name]}
      onClick={themeToggle}
      color="translucent"
      {...props}
    >
      {labelByTheme[theme.name]}
    </S.Wrapper>
  )
}

export default ThemeToggle
