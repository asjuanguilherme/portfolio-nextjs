import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   max-width: 1200px;
   padding: 0 2.5em;

   @media screen and (max-width: 768px) {
      padding: 0 2em;
   }

   @media screen and (max-width: 750px) {
      margin: 0 auto;
   } 
`
