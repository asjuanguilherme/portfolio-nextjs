import * as S from './styles'
import { useTheme } from 'styled-components'
import { IconComponent } from '../Icons/utils/createIconComponent'

export type SkillProps = {
  title: string
  icon: IconComponent
  color?: string
  enableHoverEffect?: boolean
  smallSize?: boolean
}

const Skill = ({
  title,
  icon: Icon,
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
      <Icon />
      {title}
    </S.Wrapper>
  )
}

export default Skill
