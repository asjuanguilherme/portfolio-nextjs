import styled from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { spacing, font, borderRadius, transition } = designSystemOptions

export const Wrapper = styled.div<{ hoverColor: string }>`
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

  &:hover {
    color: ${props => props.hoverColor};
    transform: scale(1.2);
  }

  svg {
    margin-right: ${spacing.components.small};
  }
`
