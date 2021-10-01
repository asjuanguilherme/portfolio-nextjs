import styled from 'styled-components'

export const Aside = styled.aside`
   width: 360px;
   position: fixed;
   left: 0;
   top: 0;
   height: 100vh;
   z-index: 100;
   box-shadow: 5px 0 26px rgb(0 0 0 / 10%);
   border-radius: 0 18px 18px 0;
   background: ${ props => props.theme.colors.secondaryBackground };

   @media screen and (max-width: 750px) {
      display: none;
   }
`

export const ThemeToggleWrapper = styled.div`
   margin-top: 1em;
`