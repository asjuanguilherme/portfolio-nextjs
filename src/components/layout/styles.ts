import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { borderRadius, transition } = designSystemOptions

export const Main = styled.main<{ secureMarginForContent: number }>`
  flex: 1;
  margin-top: ${props => props.secureMarginForContent + 'px'};
`

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  background: ${props => props.theme.colors.layers[0].background};
  transition: ${transition.slow} ease-out;
  transition-property: transform, left;
  display: flex;
  flex-direction: column;
  z-index: 2;
  scroll-behavior: smooth;
`

const menuOpenedStyle = css`
  ${PageWrapper} {
    position: absolute;
    border-radius: ${borderRadius.medium};
    transform: scale(0.8);
    left: -60%;
  }

  ${Main} {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const Wrapper = styled.div<{
  menuOpened: boolean
  isMobile: boolean
}>`
  height: 100%;
  background: linear-gradient(
    -90deg,
    ${props => props.theme.colors.main.themeGradient.normal} 50%,
    ${props => props.theme.colors.main.themeGradient.dark}
  );

  ${props => props.menuOpened && props.isMobile && menuOpenedStyle}
`
