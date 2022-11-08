import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { breakpoints } from 'styles/screens'
import Container from 'components/shared/Container'

const { spacing } = designSystemOptions

export const ProjectsCarouselContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.laptop + 'px'}) {
    padding: 0;
  }

  .swiper {
    padding-bottom: ${spacing.sections.medium};
  }
`
