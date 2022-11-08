import styled from 'styled-components'
import Container from 'components/shared/Container'
import { breakpoints } from 'styles/screens'
import designSystemOptions from 'styles/designSystemOptions'

const { spacing } = designSystemOptions

export const ProjectsCarouselContainer = styled(Container)`
  @media screen and (max-width: ${breakpoints.laptop + 'px'}) {
    padding: 0;
  }

  .swiper {
    padding-bottom: ${spacing.sections.medium};
  }
`
