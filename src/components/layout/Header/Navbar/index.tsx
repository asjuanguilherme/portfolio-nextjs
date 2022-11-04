import ThemeToggle from 'components/layout/ThemeToggle'
import NavItems from './NavItems'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Wrapper>
      <NavItems />
      <ThemeToggle />
    </S.Wrapper>
  )
}

export default Navbar
