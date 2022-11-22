import styled, { css, keyframes } from 'styled-components'
import { screens } from 'styles/screens'
import DefaultContainer from 'components/shared/Container'
import designSystemOptions from 'styles/designSystemOptions'
import DefaultLogo from 'components/shared/Logo'

const { transition, zIndex, spacing } = designSystemOptions

export const Logo = styled(DefaultLogo)<{ isHidden: boolean }>`
  transition: 0.7s;
  transition-property: transform;
  display: flex;
  position: absolute;
  color: ${props =>
    props.theme.name === 'dark'
      ? 'white'
      : props.theme.colors.main.primary.normal};

  &::after {
    display: inline-block;
    content: '';
    width: ${spacing.sections.medium};
  }

  ${props =>
    props.isHidden &&
    css`
      transform: translateX(-100%);
      opacity: 0;
    `}
`

export const Container = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const transparentStyle = css`
  background: transparent;
  border-color: transparent;
`

export const Wrapper = styled.header<{
  showTransparentHeader: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.navbar};
  width: 100%;
  padding: ${spacing.components.large} 0;
  background: ${props => props.theme.colors.layers[2].background};
  border-bottom: 1px solid ${props => props.theme.colors.layers[2].border};
  transition: ${transition.default};

  ${props => props.showTransparentHeader && transparentStyle}
`
