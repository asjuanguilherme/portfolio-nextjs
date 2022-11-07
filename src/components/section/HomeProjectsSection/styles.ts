import styled from 'styled-components'
import Container from 'components/shared/Container'
import { breakpoints } from 'styles/screens'

export const ProjectsCarouselContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.laptop + 'px'}) {
    padding: 0;
  }
`
