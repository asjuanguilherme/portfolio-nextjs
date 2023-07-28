import styled, { DefaultTheme } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'
import getNextLayer from 'utils/getNextLayer'

const { font, spacing, borderRadius, transition } = designSystemOptions

export const TagItem = styled.li`
  &:not(:last-child) {
    &::after {
      content: '|';
      padding-left: ${spacing.components.smaller};
    }
  }
`

export const Tags = styled.ul`
  font-size: ${font.sizes.smaller};
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: ${spacing.components.smaller};
`

export const Category = styled.span`
  font-size: ${font.sizes.smaller};
`

export const Title = styled.h3`
  font-size: ${font.sizes.medium};
  color: ${props => props.theme.colors.title};
  margin-bottom: ${spacing.components.small};
`

export const Informations = styled.div`
  flex: 1;
  padding: ${spacing.components.medium} 0;
`

export const ImageWrapper = styled.span`
  display: block;
  width: 100%;

  & > span {
    width: 100% !important;
    padding-top: 60% !important;
    position: relative !important;

    img {
      border-radius: ${borderRadius.small};
    }
  }
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.colors.layers[1].background};
  border: 1px solid ${props => props.theme.colors.layers[1].border};
  border-radius: ${borderRadius.small};
  padding: ${spacing.components.medium};
  transition: ${transition.default};
  transition-property: background;

  &:hover {
    background: ${props =>
      props.theme.colors.layers[getNextLayer(1)].background};
  }
`
