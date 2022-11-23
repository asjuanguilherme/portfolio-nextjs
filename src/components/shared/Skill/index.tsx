import * as S from './styles'
import { useTheme } from 'styled-components'
import StrapiDynamicIcon, { StrapiDynamicIconProps } from '../StrapiDynamicIcon'

export type SkillProps = {
  title: string
  icon: StrapiDynamicIconProps
  color?: string
  enableHoverEffect?: boolean
  smallSize?: boolean
}

const Skill = ({
  title,
  icon,
  color,
  enableHoverEffect = true,
  smallSize = false
}: SkillProps) => {
  const theme = useTheme()

  return (
    <S.Wrapper
      hoverColor={color || theme.colors.main.primary.normal}
      enableHoverEffect={enableHoverEffect}
      smallSize={smallSize}
    >
      {icon.data && <StrapiDynamicIcon {...icon} />}
      {title}
    </S.Wrapper>
  )
}

export default Skill
