import * as S from './styles'

// Types
import { ReactNode } from 'react'

// Components
import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
