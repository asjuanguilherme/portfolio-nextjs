import styled, { DefaultTheme } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { spacing, borderRadius } = designSystemOptions

export const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.components.medium} ${spacing.components.small};

  ${screens.mobileL} {
    gap: ${spacing.components.medium};
  }
`

export const Box = styled.div<{
  layer: keyof DefaultTheme['colors']['layers']
}>`
  background: ${props => props.theme.colors.layers[props.layer].background};
  padding: 0 ${spacing.sections.smaller};
  position: relative;
  z-index: 1;
  top: -${spacing.sections.smaller};
  border-radius: ${borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.layers[1].border};

  ${screens.tablet} {
    padding: 0 ${spacing.sections.medium};
    top: -${spacing.sections.medium};
  }
`
