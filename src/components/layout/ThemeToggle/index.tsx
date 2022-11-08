import * as S from './styles'
import { useTheme } from 'styled-components'
import { CSSProperties, useContext } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'
import Moon from 'components/shared/Icons/Moon'
import Sun from 'components/shared/Icons/Sun'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

export type ThemeToggleProps = {
  forTransparentBackground?: boolean
  onlyIcon?: boolean
  style?: CSSProperties
  className?: string
}

const iconByTheme = {
  dark: <Moon />,
  light: <Sun />
}

const labelByTheme = {
  dark: 'Tema Escuro',
  light: 'Tema Claro'
}

export const ThemeToggle = ({
  onlyIcon = false,
  forTransparentBackground = false,
  ...props
}: ThemeToggleProps) => {
  const theme = useTheme()
  const { themeToggle } = useContext(ThemeContext)

  return (
    <S.Wrapper
      onClick={themeToggle}
      {...props}
      onlyIcon={onlyIcon}
      forTransparentBackground={forTransparentBackground}
    >
      {iconByTheme[theme.name]}
      {!onlyIcon && <S.Label>{labelByTheme[theme.name]}</S.Label>}
      <CircleBackgroundAnimation />
    </S.Wrapper>
  )
}

export default ThemeToggle
