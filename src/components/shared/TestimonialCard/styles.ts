import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing, borderRadius, font } = designSystemOptions

export const Text = styled.div`
  text-align: center;
`

export const AuthorRole = styled.p`
  font-size: ${font.sizes.small};
`

export const AuthorName = styled.h4`
  font-size: ${font.sizes.medium};
  margin-bottom: 0;
`

export const AuthorImage = styled.span`
  display: inline-block;
  flex-shrink: 0;

  img {
    border-radius: ${borderRadius.circle};
  }
`

export const AuthorInfo = styled.div`
  margin-left: ${spacing.components.medium};
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.components.medium};
`

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.layers[1].background};
  border: 1px solid ${props => props.theme.colors.layers[1].border};
  border-radius: ${borderRadius.small};
  padding: ${spacing.components.large};
  display: flex;
  flex-direction: column;
  align-items: center;
`
