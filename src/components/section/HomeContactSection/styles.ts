import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing } = designSystemOptions

export const SocialLinks = styled.ul`
  list-style: none;
  display: inline-flex;
  gap: ${spacing.components.small};
`
