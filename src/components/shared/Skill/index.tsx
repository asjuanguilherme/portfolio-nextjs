import * as S from './styles'
import { useTheme } from 'styled-components'
import createIconComponent from '../Icons/utils/createIconComponent'

export type SkillProps = {
  title: string
  icon: {
    svgContent: string
    viewBox: string
  }
  hoverColor?: string
}

const Skill = ({ title, icon, hoverColor }: SkillProps) => {
  const theme = useTheme()

  const svgComponentsContent = (
    <g dangerouslySetInnerHTML={{ __html: icon.svgContent }}></g>
  )

  const Icon = createIconComponent({
    content: {
      light: svgComponentsContent,
      bold: svgComponentsContent
    },
    viewBox: icon.viewBox
  })

  return (
    <S.Wrapper hoverColor={hoverColor || theme.colors.main.primary.normal}>
      <Icon />
      {title}
    </S.Wrapper>
  )
}

export default Skill
