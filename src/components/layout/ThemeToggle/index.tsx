import * as S from './styles'
import { useTheme } from 'styled-components'
import Moon from 'components/shared/Icons/Moon'
import Sun from 'components/shared/Icons/Sun'
import { useContext } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'

export type ThemeToggleProps = {}

const iconByTheme = {
  dark: <Moon />,
  light: <Sun />
}

const ThemeToggle = ({}: ThemeToggleProps) => {
  const theme = useTheme()
  const { themeToggle } = useContext(ThemeContext)

  return <S.Wrapper onClick={themeToggle}>{iconByTheme[theme.name]}</S.Wrapper>
}

export default ThemeToggle
