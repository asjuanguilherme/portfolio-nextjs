import * as S from './styles'

// Types
import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Header>Header Component</S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>Footer Component</S.Footer>
    </S.Wrapper>
  )
}

export default Layout
