import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import DefaultContainer from 'components/shared/Container'

const { spacing, font } = designSystemOptions

export const Container = styled(DefaultContainer)`
  padding-top: ${spacing.components.medium};
  padding-bottom: ${spacing.components.medium};
  font-size: ${font.sizes.smaller};
  text-align: center;
`

export const Wrapper = styled.footer`
  background: ${props => props.theme.colors.main.primary.normal};
  color: white;
`
