import * as S from './styles'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>Juan © {year} - Todos os direitos reservados</S.Container>
    </S.Wrapper>
  )
}

export default Footer
