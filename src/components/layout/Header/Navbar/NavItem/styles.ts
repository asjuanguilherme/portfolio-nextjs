import designSystemOptions from 'styles/designSystemOptions'
import styled, { css } from 'styled-components'

const { font, spacing, borderRadius, transition } = designSystemOptions

const activeStyle = css<{ forTransparentBackground: boolean }>`
  color: ${props =>
    props.forTransparentBackground
      ? props.theme.colors.main.primary.normal
      : 'white'};

  &::before {
    background: ${props =>
      props.forTransparentBackground
        ? 'white'
        : props.theme.colors.main.primary.normal};
    transform: translate(-50%, -50%) scale(9);
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
  transition-property: background, border, color, box-shadow;

  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 1rem;
    width: 1rem;
    border-radius: ${designSystemOptions.borderRadius.circle};

    transition: 0.5s;
    transition-property: transform;
    transform: translate(-50%, -50%);
    background: transparent;
  }

  ${props => (props.active ? activeStyle : standardStyle)};
`

export const Wrapper = styled.li``
