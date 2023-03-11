import styled, { DefaultTheme } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { spacing, font } = designSystemOptions

export const SectionHeading = styled.h2`
  color: ${props => props.theme.colors.main.primary.normal};
  font-weight: ${font.weight.semibold};
  font-size: ${font.sizes.large};

  ${screens.mobileL} {
    font-size: ${font.sizes.larger};
  }

  &::before {
    content: '<h2>';
    margin-right: ${spacing.components.small};
  }
  &::after {
    content: '<h2/>';
    margin-left: ${spacing.components.small};
  }

  &::before,
  &::after {
    font-size: ${font.sizes.smaller};
    font-weight: ${font.weight.normal};
    color: ${props => props.theme.colors.main.primary.light};

    ${screens.mobileL} {
      font-size: ${font.sizes.small};
    }
  }
`

export const SectionWrapper = styled.section<{
  layer?: keyof DefaultTheme['colors']['layers']
}>`
  padding: ${spacing.sections.small} 0;
  background: ${props =>
    props.theme.colors.layers[props.layer || 0].background};

  ${screens.tablet} {
    padding: ${spacing.sections.medium} 0;
  }
`
