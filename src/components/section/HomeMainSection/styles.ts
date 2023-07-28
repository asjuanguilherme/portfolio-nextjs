import styled, { css } from 'styled-components'
import DefaultContainer from 'components/shared/Container'
import designSystemOptions from 'styles/designSystemOptions'
import { screens } from 'styles/screens'

const { borderRadius, font, spacing } = designSystemOptions

export const OutImage = styled.div`
  background-image: url(/assets/images/juan-transparent.png);
  background-size: cover;
  padding-top: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
`

export const PhotoPart = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  border-radius: ${borderRadius.circle};
  border: ${spacing.components.small} solid rgba(255, 255, 255, 0.25);
  position: relative;

  ${screens.laptop} {
    margin-left: auto;
    margin-right: initial;
    border-width: ${spacing.components.medium};
  }
`

export const Socials = styled.ul`
  display: inline-flex;
  gap: ${spacing.components.medium};
  list-style: none;
  margin-top: ${spacing.components.larger};
`

export const SaudationRole = styled.p`
  font-size: ${font.sizes.medium};
  letter-spacing: 1.5px;

  ${screens.mobileL} {
    font-size: ${font.sizes.larger};
  }

  ${screens.tablet} {
    font-size: ${font.sizes.xlarger};
  }
`

export const SaudationText = styled.h1`
  font-size: ${font.sizes.xlarger};
  font-weight: ${font.weight.bold};
  width: max-content;

  ${screens.mobileL} {
    font-size: ${font.sizes.xxlarger};
  }

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
  color: white;
  background: ${props => css`
    linear-gradient(0deg, ${props.theme.colors.main.themeGradient.dark}, ${props.theme.colors.main.themeGradient.light})
  `};

  position: relative;
  z-index: 1;
  padding-bottom: 4rem;
  padding-top: 7rem;

  ${screens.tablet} {
    padding-bottom: 7rem;
    padding-top: 10rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('/assets/images/pattern-bg.png');
    background-size: 350px;
    opacity: 0.05;
  }
`
