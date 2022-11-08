import designSystemOptions from 'styles/designSystemOptions'
import styled, { css } from 'styled-components'
import CircleBackgroundAnimation from 'components/shared/CircleBackgroundAnimation'

const { font, spacing, borderRadius, transition } = designSystemOptions

const activeStyle = css<{ forTransparentBackground: boolean }>`
  color: ${props =>
    props.forTransparentBackground
      ? props.theme.colors.main.primary.normal
      : 'white'};

  ${CircleBackgroundAnimation} {
    width: 100%;

    &::after {
      background: ${props =>
        props.forTransparentBackground
          ? 'white'
          : props.theme.colors.main.primary.normal};
    }
  }
`

const standardStyle = css<{ forTransparentBackground: boolean }>`
  color: ${props => (props.forTransparentBackground ? 'white' : 'inherit')};
  border-color: rgba(255, 255, 255, 0.15);

  &:hover {
    color: ${props =>
      props.forTransparentBackground
        ? 'white'
        : props.theme.colors.main.primary.normal};
  }
`

export const ButtonLink = styled.a<{
  active: boolean
  forTransparentBackground: boolean
}>`
  display: inline-flex;
  text-decoration: none;
  font-size: ${font.sizes.small};
  font-weight: ${font.weight.semibold};
  padding: ${css`
    ${spacing.components.small} ${spacing.components.medium}
  `};
  border-radius: ${borderRadius.pill};
  transition-duration: ${transition.default};
  transition-property: background, border, color;

  overflow: hidden;
  position: relative;
  z-index: 1;

  ${props => (props.active ? activeStyle : standardStyle)};
`

export const Wrapper = styled.li``
