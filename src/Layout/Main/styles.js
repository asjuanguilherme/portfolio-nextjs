import styled from 'styled-components'

export const Main = styled.main `
   max-width: calc(100% - 360px);
   width: 100%;
   margin-left: auto;
   padding-top: 2em;

   @media screen and (max-width: 750px) {
      max-width: 100%;
      margin-left: initial;
      padding: 0;
      padding-top: 5em;
   }
`
