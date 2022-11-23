import styled, { css, keyframes } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { layout, spacing, font, borderRadius, zIndex } = designSystemOptions

export const BoxContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: ${spacing.components.medium};
  padding-top: 0;
  line-height: 1.8em;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.title};
  font-size: ${font.sizes.large};
  font-weight: ${font.weight.normal};
  margin-bottom: 0;
`

export const CloseButton = styled.button`
  background: transparent;
  display: inline-flex;
  padding: ${spacing.components.small};
  font-size: ${font.sizes.large};
  transition: 0.2s;
  transition-property: color;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  right: ${spacing.components.small};
  top: ${spacing.components.small};

  &:hover {
    color: ${props => props.theme.colors.main.yellow.normal};
  }
`

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.components.medium};
`

const appearBoxKeyframes = keyframes`
  from {
    transform: scale(.9);
    opacity: 0;
  }
  to {
    transform: initial;
  }
`

export const Box = styled.div<{
  width: number
  hasTitle: boolean
}>`
  position: relative;
  width: 100%;
  max-height: 85vh;
  max-width: ${props => props.width}px;
  background: ${props => props.theme.colors.layers[1].background};
  border: 1px solid ${props => props.theme.colors.layers[1].border};
  border-radius: ${borderRadius.large};
  overflow: hidden;
  animation: ${appearBoxKeyframes} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  padding-top: ${props =>
    props.hasTitle ? 'initial' : spacing.components.medium};
  transition: 0.15s;
`

const wrapperAppearKeyframes = keyframes`from {
  backdrop-filter: initial;
}`

const closedStyle = css`
  backdrop-filter: initial;
  background: transparent;
  visibility: hidden;

  ${Box} {
    transform: scale(0.9);
    opacity: 0;
  }
`

export const Wrapper = styled.div<{ opened: boolean }>`
  position: fixed;
  z-index: ${zIndex.modals};
  height: 100vh;
  width: 100vw;
  padding: 0 ${layout.gutter};
  background: rgba(
    0,
    0,
    0,
    ${props => (props.theme.name === 'dark' ? '0.1' : '0.3')}
  );
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${wrapperAppearKeyframes} 0.2s ease;
  transition: 0.3s;
  transition-property: backdrop-filter, background, visibility;

  ${props => !props.opened && closedStyle}
`
