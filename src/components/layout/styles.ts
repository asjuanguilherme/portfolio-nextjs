import styled, { css } from 'styled-components'
import designSystemOptions from 'styles/designSystemOptions'

const { borderRadius } = designSystemOptions

export const Main = styled.main`
  flex: 1;
`

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  overflow-x: hidden;
  background: ${props => props.theme.colors.layers[0].background};
  transition: 0.3s ease-out;
  transition-property: transform, left;

  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 2;
`

const menuOpenedStyle = css`
  ${PageWrapper} {
    border-radius: ${borderRadius.medium};
    transform: scale(0.8);
    left: -60%;
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
