import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { spacing } = designSystemOptions

export const ProjectsGrid = styled.ul`
  display: grid;
  gap: ${spacing.components.medium};
  list-style: none;

  ${screens.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${screens.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`
