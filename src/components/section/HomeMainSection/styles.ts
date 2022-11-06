import styled from 'styled-components'
import DefaultContainer from 'components/shared/Container'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { borderRadius, font, spacing } = designSystemOptions

export const PhotoPart = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  border-radius: ${borderRadius.circle};
  overflow: hidden;
  border: 8px solid rgba(255, 255, 255, 0.25);

  & > span {
    position: relative !important;
    padding-top: 100% !important;
  }

  ${screens.laptop} {
    margin-left: auto;
    margin-right: initial;
    border-width: 16px;
  }
`

export const Socials = styled.div``

export const SaudationRole = styled.p`
  font-size: ${font.sizes.larger};
  letter-spacing: 1.5px;

  ${screens.tablet} {
    font-size: ${font.sizes.xlarger};
  }
`

export const SaudationText = styled.h1`
  font-size: ${font.sizes.xxlarger};
  font-weight: ${font.weight.bold};
  width: max-content;

  ${screens.tablet} {
    font-size: calc(${font.sizes.xlarger} * 2);
  }
`

export const SaudationPart = styled.div`
  grid-row: 2;

  ${screens.laptop} {
    grid-row: initial;
  }
`

export const Container = styled(DefaultContainer)`
  display: grid;
  justify-content: center;
  text-align: center;
  gap: ${spacing.components.large};

  ${screens.laptop} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: initial;
  }
`

export const Wrapper = styled.section`
  padding: 5rem 0;
`
