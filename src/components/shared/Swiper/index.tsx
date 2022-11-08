import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { borderRadius, spacing, transition } = designSystemOptions

export const Pagination = styled.span`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${spacing.components.smaller};
  position: absolute;
  left: 0;
  bottom: 0;
  cursor: pointer;

  .swiper-pagination-bullet {
    border-radius: ${borderRadius.pill};
    height: ${spacing.components.small};
    width: ${spacing.components.medium};
    transition: ${transition.default};
    background-color: ${props => props.theme.colors.main.primary.normal};
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);

    &:hover {
      opacity: 0.5;
    }

    &-active {
      width: calc(${spacing.components.large} * 1.5);
    }
  }
`
