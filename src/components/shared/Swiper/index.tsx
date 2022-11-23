import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import Button from '../Button'
import ChevronLeft from '../Icons/ChevronLeft'
import ChevronRight from '../Icons/ChevronRight'

const { borderRadius, spacing, transition, font } = designSystemOptions

export const NavigationButton = styled(Button).attrs(props => ({
  onlyIcon: true,
  color: 'primary',
  ...props
}))<{ disabled: boolean }>`
  position: absolute;
  z-index: 1;
  top: calc(50% - 1.5rem);
  svg {
    font-size: 1.3rem;
    filter: drop-shadow(0 0 3px black);
  }

  &:hover {
    svg {
      filter: initial;
    }
  }
`

export const NavigationNext = styled(NavigationButton).attrs(props => ({
  icon: ChevronRight,
  ...props
}))`
  right: ${spacing.components.small};
`

export const NavigationPrev = styled(NavigationButton).attrs(props => ({
  icon: ChevronLeft,
  ...props
}))`
  left: ${spacing.components.small};
`

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
