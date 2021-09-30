import styled, { css } from 'styled-components'

const MenuActive = css`
   overflow: hidden;
   transform: scale(0.75) translateX(-80%);
   border-radius: 1.5rem;
`

export const Layout = styled.div`
   width: 100vw;
   height: 100vh;
   max-height: 100vh;
   overflow-y: auto;
   display: flex;
   background-color: ${ props => props.theme.colors.background };
   position: relative;
   z-index: 2;
   transition: .5s ease-in-out;
   transition-property: transform, border-radius;

   @media screen and (max-width: 750px) {
      ${ props => props.menuActive ? MenuActive : '' }
   }
`