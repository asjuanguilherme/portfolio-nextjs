import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { SectionWrapper as DefaultSectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'

const { spacing } = designSystemOptions

export const TestimonialsCarouselWrapper = styled.div`
  margin: 0 auto;
`
export const SectionWrapper = styled(DefaultSectionWrapper)`
  h2 {
    text-align: center;
    margin-bottom: ${spacing.components.larger};
  }

  ${Container} {
    max-width: 640px;
  }

  .swiper {
    overflow: visible;
    padding-bottom: ${spacing.sections.medium};

    &-slide {
      opacity: 0.4;
      transform: scale(0.8);
      transition: 0.2s;
      transition-property: transform;

      &-active {
        opacity: 1;
        transform: initial;
      }
    }
  }
`
