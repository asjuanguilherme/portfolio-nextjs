import { navigationItems } from 'contexts/NavigationContext/navigationItems'
import { CSSProperties } from 'react'
import * as S from './styles'

export type SectionAnchorProps = {
  name: keyof typeof navigationItems
  style?: CSSProperties
  className?: string
}

const SectionAnchor = (props: SectionAnchorProps) => {
  return <S.Wrapper {...props} />
}

export default SectionAnchor
