import styled from 'styled-components'
import { screens } from 'styles/screens'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing, borderRadius, font } = designSystemOptions

export const Text = styled.div`
  flex: 1;
  overflow-y: auto;
  font-size: ${font.sizes.small};
`

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: ${spacing.components.smaller};
  margin-top: 0.75rem;

  ${screens.tabletS} {
    gap: ${spacing.components.small};
  }
`

export const Type = styled.span`
  display: inline-block;
  margin-top: -1rem;
`

export const Title = styled.h2`
  font-size: ${font.sizes.larger};
  font-weight: ${font.weight.semibold};
  color: ${props => props.theme.colors.title};
  margin: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.components.medium};

  ${screens.tabletS} {
    max-height: 500px;
    gap: ${spacing.sections.smaller};
  }
`

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  background: ${props => props.theme.colors.layers[0].background};
  border-radius: ${borderRadius.small};

  ${screens.tabletS} {
    width: 50%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sections.smaller};

  ${screens.tabletS} {
    flex-direction: row;
  }
`
