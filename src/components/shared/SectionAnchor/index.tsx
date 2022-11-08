import { CSSProperties } from 'react'
import * as S from './styles'

export type SectionAnchorProps = {
  name: string
  style?: CSSProperties
  className?: string
}

const SectionAnchor = (props: SectionAnchorProps) => {
  return <S.Wrapper {...props} />
}

export default SectionAnchor
