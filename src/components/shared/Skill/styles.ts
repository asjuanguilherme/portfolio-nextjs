import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { spacing, font, borderRadius, transition } = designSystemOptions

type Props = {
  hoverColor: string
  enableHoverEffect: boolean
  smallSize: boolean
}

const smallSizeStyle = css`
  font-size: ${font.sizes.smaller} !important;
  padding: 0 ${spacing.components.small};
`

export const Wrapper = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  transition: ${transition.default};
  transition-property: color, transform;
  font-size: ${font.sizes.small};
  padding: ${spacing.components.smaller} ${spacing.components.medium};
  cursor: default;
  border: 1px solid ${props => props.theme.colors.text}30;
  border-radius: ${borderRadius.pill};

  ${screens.mobileL} {
    font-size: ${font.sizes.medium};
  }

  ${props =>
    props.enableHoverEffect
      ? css<Props>`
          &:hover {
            color: ${props => props.hoverColor};
            transform: scale(1.2);
          }
        `
      : css<Props>`
          svg {
            color: ${props => props.hoverColor};
          }
        `}

  svg {
    stroke: initial;
    margin-right: ${spacing.components.small};
    font-size: 1.2em;
  }

  ${props => props.smallSize && smallSizeStyle}
`
