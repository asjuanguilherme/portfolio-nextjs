import * as S from './styles'
import { useTheme } from 'styled-components'
import StrapiDynamicIcon, { StrapiDynamicIconProps } from '../StrapiDynamicIcon'

export type SkillProps = {
  title: string
  icon: StrapiDynamicIconProps
  color?: string
}

const Skill = ({ title, icon, color }: SkillProps) => {
  const theme = useTheme()

  return (
    <S.Wrapper hoverColor={color || theme.colors.main.primary.normal}>
      {icon.data && <StrapiDynamicIcon {...icon} />}
      {title}
    </S.Wrapper>
  )
}

export default Skill
