import Navbar from './Navbar'
import * as S from './styles'

export type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <Navbar />
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
