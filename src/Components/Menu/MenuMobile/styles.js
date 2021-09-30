import styled, { css } from 'styled-components'

const DarkMenu = css`
   background: linear-gradient(195deg, #1f0c47 0%, #222274 50%, #1e1e74 100%);
`

export const Menu = styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   left: 0;
   top: 0;
   z-index: 1;

   background: ${ props => props.theme.colors.gradientBackground };

   ${ props => props.theme.name === 'dark' ? DarkMenu : '' }

   @media screen and (min-width: 751px) {
      display: none;
   }
`

export const Wrapper = styled.div`
   margin-left: 26%;
   padding: 3% 0;
   font-size: 1rem;

   display: flex;
   flex-direction: column;
   height: 100vh;
   
   @media screen and (max-width: 360px) {
      font-size: 0.8rem;
   }

   @media screen and (max-height: 520px) {
      font-size: .7em;
   }
`
export const ThemeToggleWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 0 1.5rem;
   margin-top: 3em;
`