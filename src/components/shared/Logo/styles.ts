import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { font } = designSystemOptions

export const Wrapper = styled.div`
  font-weight: ${font.weight.bold};
  font-size: ${font.sizes.large};
`
