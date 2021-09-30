import styled from 'styled-components'

export const ProjectsGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: .5em;
   
   @media screen and (min-width: 480px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (min-width: 751px) {
      grid-template-columns: 1fr;
   }

   @media screen and (min-width: 991px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (min-width: 1170px) {
      grid-template-columns: 1fr 1fr 1fr;
   }

   @media screen and (min-width: 1440px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
   }
`