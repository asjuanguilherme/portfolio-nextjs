import * as S from './styles'
import { CSSProperties, useContext, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
export type ThemeToggleProps = {
  forTransparentBackground?: boolean
  style?: CSSProperties
  className?: string
}

export const ThemeToggle = ({
  forTransparentBackground = false,
  ...props
}: ThemeToggleProps) => {
  const theme = useTheme()
  const { themeToggle } = useContext(ThemeContext)

  return (
    <S.Wrapper
      icon={theme.icon}
      forTransparentBackground={forTransparentBackground}
      themeColor={theme.themeColor}
      onClick={themeToggle}
      color="translucent"
      {...props}
    >
      {theme.title}
    </S.Wrapper>
  )
}

export default ThemeToggle
