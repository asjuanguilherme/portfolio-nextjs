import * as S from './styles'
import { CSSProperties } from 'react'

export type LogoProps = {
  className?: string
  style?: CSSProperties
}

const Logo = (props: LogoProps) => {
  return <S.Wrapper {...props}>Juan!</S.Wrapper>
}

export default Logo
