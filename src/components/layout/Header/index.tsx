import * as S from './styles'

// Hooks
import useScreenDimensions from 'hooks/useScreenDimensions'

// Utils
import designSystemOptions from 'styles/designSystemOptions'

// Components
import Logo from 'components/shared/Logo'
import Navbar from './Navbar'
import MenuToggle from '../MenuToggle'

export type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  const { screen, breakpoints } = useScreenDimensions()

  return (
    <S.Wrapper>
      <S.Container>
        <Logo
          style={{ marginRight: designSystemOptions.spacing.sections.medium }}
        />
        {screen.width > breakpoints.tablet ? <Navbar /> : <MenuToggle />}
      </S.Container>
    </S.Wrapper>
  )
}

export default Header
