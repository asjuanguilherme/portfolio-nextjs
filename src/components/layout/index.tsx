import * as S from './styles'

// Types
import { ReactNode, useState } from 'react'

// Components
import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const menuToggle = () => {
    setMenuOpened(state => !state)
  }

  return (
    <S.Wrapper>
      <Header menuOpened={menuOpened} menuToggle={menuToggle} />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
